#!/usr/bin/env python3
"""Strip location/camera/other metadata from JPEG files in place.

Keeps the image, the colour profile, and only the EXIF orientation flag
(so phone photos still display the right way up). Standard library only.
Usage: scrub_jpeg.py photo.jpg [more.jpg ...]
"""
import struct
import sys


def read_orientation(tiff):
    try:
        order = ">" if tiff[:2] == b"MM" else "<"
        ifd = struct.unpack(order + "I", tiff[4:8])[0]
        count = struct.unpack(order + "H", tiff[ifd:ifd + 2])[0]
        for i in range(count):
            e = ifd + 2 + i * 12
            tag, typ, n = struct.unpack(order + "HHI", tiff[e:e + 8])
            if tag == 0x0112 and typ == 3 and n == 1:
                return struct.unpack(order + "H", tiff[e + 8:e + 10])[0]
    except (struct.error, IndexError):
        pass
    return 1


def orientation_segment(value):
    tiff = b"MM\x00*" + struct.pack(">I", 8)
    tiff += struct.pack(">H", 1) + struct.pack(">HHIHH", 0x0112, 3, 1, value, 0)
    tiff += struct.pack(">I", 0)
    body = b"Exif\x00\x00" + tiff
    return b"\xff\xe1" + struct.pack(">H", len(body) + 2) + body


def scrub(data):
    if data[:2] != b"\xff\xd8":
        raise ValueError("not a JPEG")
    kept, orientation, pos = [], 1, 2
    while pos < len(data):
        if data[pos] != 0xFF:
            raise ValueError("bad JPEG structure")
        marker = data[pos + 1]
        if marker == 0xFF:
            pos += 1
            continue
        if marker == 0xDA:  # start of scan: everything after is image data
            kept.append(data[pos:])
            break
        if marker == 0x01 or 0xD0 <= marker <= 0xD8:
            kept.append(data[pos:pos + 2])
            pos += 2
            continue
        length = struct.unpack(">H", data[pos + 2:pos + 4])[0]
        seg = data[pos:pos + 2 + length]
        pos += 2 + length
        payload = seg[4:]
        if marker == 0xE1 and payload[:6] == b"Exif\x00\x00":
            orientation = read_orientation(payload[6:])
        elif marker in (0xE1, 0xED, 0xFE):  # XMP, IPTC/Photoshop, comments
            pass
        else:
            kept.append(seg)
    head = [b"\xff\xd8"]
    if kept and kept[0][:2] == b"\xff\xe0":  # JFIF header stays first
        head.append(kept.pop(0))
    if orientation != 1:
        head.append(orientation_segment(orientation))
    return b"".join(head + kept)


def main(paths):
    for p in paths:
        with open(p, "rb") as f:
            data = f.read()
        clean = scrub(data)
        with open(p, "wb") as f:
            f.write(clean)


if __name__ == "__main__":
    main(sys.argv[1:])
