/*
  PRODUCT DATA — M&M Clothing catalog
  ------------------------------------
  FIELD GUIDE
  id           Short unique code, e.g. "MM001".
  name         Product name shown to customers.
  gender       "Male", "Female", or "Unisex".
  category     Fixed top-level group, e.g. "Tops", "Bottoms", "Footwear".
  subCategory  More specific group, e.g. "T-Shirts", "Jeans", "Sneakers".
  price        Number only, in LKR.
  description  A sentence or two shown on the product page.
  colors       List of available colors.
  sizes        Array of objects: { size: "32/30", stock: 8 }
  badge        Custom badge text shown on product page (e.g. "Factory Outlet", "Premium", "Limited Stock").
               Set to null or "" to show nothing.
  images       List of image paths.
*/

const PRODUCTS = [
  {
    id: "MM001",
    name: "Banana Republic Business Casual Pants — Navy",
    gender: "Male",
    category: "Bottoms",
    subCategory: "Trousers",
    price: 5250,
    description: "Brand new deadstock Banana Republic business casual pants in Navy. Premium fabric with a tailored fit. Perfect for office wear and formal occasions.",
    colors: ["Navy"],
    sizes: [
      { size: "28/28", stock: 1 },
      { size: "30/32", stock: 1 },
      { size: "31/32", stock: 2 },
      { size: "32/30", stock: 8 },
      { size: "33/30", stock: 1 },
      { size: "34/32", stock: 1 },
      { size: "34/30", stock: 2 },
      { size: "36/34", stock: 4 },
      { size: "36/30", stock: 2 },
      { size: "36/32", stock: 1 },
      { size: "38/32", stock: 1 }
    ],
    badge: "Factory Outlet",
    images: [
      "images/products/MM001/1.jpg",
      "images/products/MM001/2.jpg",
      "images/products/MM001/3.jpg"
    ]
  },
  {
    id: "MM002",
    name: "Banana Republic Business Casual Pants — Olive",
    gender: "Male",
    category: "Bottoms",
    subCategory: "Trousers",
    price: 5250,
    description: "Brand new deadstock Banana Republic business casual pants in Olive. Premium fabric with a tailored fit. Perfect for office wear and formal occasions.",
    colors: ["Olive"],
    sizes: [
      { size: "29/32", stock: 2 },
      { size: "30/30", stock: 1 },
      { size: "31/30", stock: 1 },
      { size: "32/34", stock: 1 },
      { size: "33/32", stock: 1 },
      { size: "33/30", stock: 1 },
      { size: "34/34", stock: 2 },
      { size: "34/30", stock: 4 },
      { size: "35/30", stock: 2 },
      { size: "35/34", stock: 1 },
      { size: "35/32", stock: 1 },
      { size: "36/32", stock: 2 },
      { size: "36/34", stock: 1 },
      { size: "36/30", stock: 2 },
      { size: "38/30", stock: 1 },
      { size: "38/34", stock: 1 },
      { size: "38/32", stock: 2 },
      { size: "40/34", stock: 1 }
    ],
    badge: "Factory Outlet",
    images: [
      "images/products/MM002/1.jpg",
      "images/products/MM002/2.jpg",
      "images/products/MM002/3.jpg"
    ]
  },
  {
    id: "MM003",
    name: "Banana Republic Business Casual Pants — Brown",
    gender: "Male",
    category: "Bottoms",
    subCategory: "Trousers",
    price: 5250,
    description: "Brand new deadstock Banana Republic business casual pants in Brown. Premium fabric with a tailored fit. Perfect for office wear and formal occasions.",
    colors: ["Brown"],
    sizes: [
      { size: "30/32", stock: 1 },
      { size: "31/32", stock: 2 },
      { size: "31/30", stock: 1 },
      { size: "32/32", stock: 3 },
      { size: "33/34", stock: 1 },
      { size: "33/32", stock: 1 },
      { size: "34/30", stock: 1 },
      { size: "35/32", stock: 1 },
      { size: "36/32", stock: 1 },
      { size: "36/34", stock: 2 },
      { size: "36/30", stock: 1 },
      { size: "38/34", stock: 1 },
      { size: "38/30", stock: 1 },
      { size: "42/32", stock: 1 }
    ],
    badge: "Premium Collection",
    images: [
      "images/products/MM003/1.jpg",
      "images/products/MM003/2.jpg",
      "images/products/MM003/3.jpg"
    ]
  },
  {
    id: "MM004",
    name: "Banana Republic Business Casual Pants — Black",
    gender: "Male",
    category: "Bottoms",
    subCategory: "Trousers",
    price: 5250,
    description: "Brand new deadstock Banana Republic business casual pants in Black. Premium fabric with a tailored fit. Perfect for office wear and formal occasions.",
    colors: ["Black"],
    sizes: [
      { size: "30/30", stock: 1 },
      { size: "36/30", stock: 1 },
      { size: "38/30", stock: 1 },
      { size: "36/34", stock: 1 }
    ],
    badge: "Limited Stock",
    images: [
      "images/products/MM004/1.jpg",
      "images/products/MM004/2.jpg",
      "images/products/MM004/3.jpg"
    ]
  }
];