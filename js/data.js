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
/*
  PRODUCT DATA — M&M Clothing catalog
  ------------------------------------
  All products from Inventory (P001 to P086)
  Batch 1: P001 to P010
*/

 const PRODUCTS = [
//   // ============================================================
//   // P001 - MS-Ultimate Chino-OG
//   // ============================================================
//   {
//     id: "P001",
//     name: "MS-Ultimate Chino-OG",
//     brand: "M&S",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 4200, // Revenue 352800 / Qty 84
//     description: "M&S Ultimate Chino — classic fit, premium cotton blend. Perfect for office and casual wear.",
//     colors: ["Green", "Navy", "Stone", "Ash", "Whitish", "Gray", "Khaki"],
//     sizes: [
//       { size: "32/29", color: "Green", stock: 9 },
//       { size: "32/29", color: "Navy", stock: 1 }, // Sold
//       { size: "32/29", color: "Stone", stock: 1 },
//       { size: "32/31", color: "Stone", stock: 4 },
//       { size: "32/31", color: "Navy", stock: 2 },
//       { size: "32/31", color: "Green", stock: 1 },
//       { size: "32/33", color: "Green", stock: 1 },
//       { size: "32/33", color: "Stone", stock: 2 },
//       { size: "38/33", color: "Green", stock: 1 },
//       { size: "38/33", color: "Stone", stock: 1 },
//       { size: "38/33", color: "Navy", stock: 2 },
//       { size: "38/29", color: "Navy", stock: 1 },
//       { size: "38/29", color: "Stone", stock: 2 },
//       { size: "38/31", color: "Ash", stock: 1 },
//       { size: "38/31", color: "Green", stock: 2 },
//       { size: "40/29", color: "Navy", stock: 2 },
//       { size: "40/29", color: "Green", stock: 2 },
//       { size: "40/31", color: "Navy", stock: 1 },
//       { size: "40/31", color: "Whitish", stock: 1 },
//       { size: "40/33", color: "Stone", stock: 2 },
//       { size: "40/33", color: "Navy", stock: 1 },
//       { size: "36/29", color: "Stone", stock: 4 },
//       { size: "36/29", color: "Green", stock: 1 },
//       { size: "36/31", color: "Stone", stock: 1 },
//       { size: "36/31", color: "Green", stock: 2 },
//       { size: "36/33", color: "Navy", stock: 1 },
//       { size: "42/29", color: "Whitish", stock: 1 },
//       { size: "42/29", color: "Stone", stock: 1 },
//       { size: "42/29", color: "Navy", stock: 1 },
//       { size: "42/31", color: "Green", stock: 1 },
//       { size: "42/31", color: "Stone", stock: 1 },
//       { size: "42/31", color: "Whitish", stock: 1 },
//       { size: "42/33", color: "Gray", stock: 4 },
//       { size: "42/33", color: "Navy", stock: 2 },
//       { size: "34/29", color: "Green", stock: 2 },
//       { size: "34/31", color: "Green", stock: 2 },
//       { size: "34/31", color: "Navy", stock: 1 },
//       { size: "34/31", color: "Stone", stock: 1 },
//       { size: "34/35", color: "Khaki", stock: 1 },
//       { size: "30/31", color: "Gray", stock: 12 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P001/1.jpg", "images/products/P001/2.jpg", "images/products/P001/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P002 - GP-Linen Slim Pant-FO
//   // ============================================================
//   {
//     id: "P002",
//     name: "GP-Linen Slim Pant-FO",
//     brand: "GAP",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 3900, // Revenue 109200 / Qty 28
//     description: "GAP Linen Slim Pant — lightweight, breathable linen blend. Perfect for warm weather.",
//     colors: ["Sandalwood", "Dark Navy", "Sandler Stripe", "Sweet Blue", "Light Green", "Tofu", "Ivory Gold", "Light Sand", "Night Sky", "Army Green"],
//     sizes: [
//       { size: "30", color: "Sandalwood", stock: 1 },
//       { size: "32", color: "Sandalwood", stock: 3 },
//       { size: "34", color: "Sandalwood", stock: 6 },
//       { size: "36", color: "Sandalwood", stock: 4 },
//       { size: "40", color: "Sandalwood", stock: 2 },
//       { size: "34", color: "Dark Navy", stock: 1 },
//       { size: "38", color: "Dark Navy", stock: 1 },
//       { size: "40", color: "Dark Navy", stock: 1 },
//       { size: "34", color: "Sandler Stripe", stock: 1 },
//       { size: "40", color: "Sweet Blue", stock: 1 },
//       { size: "40", color: "Light Green", stock: 1 },
//       { size: "30", color: "Tofu", stock: 1 },
//       { size: "36", color: "Ivory Gold", stock: 1 },
//       { size: "40", color: "Light Sand", stock: 1 },
//       { size: "40", color: "Night Sky", stock: 1 },
//       { size: "40", color: "Army Green", stock: 1 },
//       { size: "40/32", color: "Ivory Gold", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P002/1.jpg", "images/products/P002/2.jpg", "images/products/P002/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P003 - MC-Cors Cargo-FO
//   // ============================================================
//   {
//     id: "P003",
//     name: "MC-Cors Cargo-FO",
//     brand: "Mickeal",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 3650, // Revenue 40150 / Qty 11
//     description: "Mickeal Cors Cargo — rugged cargo pants with multiple pockets. Durable and functional.",
//     colors: ["Black", "White", "Navy"],
//     sizes: [
//       { size: "30/30", color: "Black", stock: 1 },
//       { size: "28/32", color: "Black", stock: 1 },
//       { size: "32/32", color: "Black", stock: 3 },
//       { size: "32/32", color: "White", stock: 1 },
//       { size: "31/32", color: "Navy", stock: 1 },
//       { size: "38/32", color: "Navy", stock: 1 },
//       { size: "40/32", color: "Navy", stock: 1 },
//       { size: "28/32", color: "Navy", stock: 1 },
//       { size: "30/32", color: "Navy", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P003/1.jpg", "images/products/P003/2.jpg", "images/products/P003/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P004 - GP-90s Loose Fit Linen Pant-FO
//   // ============================================================
//   {
//     id: "P004",
//     name: "GP-90s Loose Fit Linen Pant-FO",
//     brand: "GAP",
//     gender: "Unisex",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 5650, // Revenue 45200 / Qty 8
//     description: "GAP 90s Loose Fit Linen Pant — relaxed, vintage-inspired linen pants. Effortless summer style.",
//     colors: ["Oatmeal Heather", "Brown"],
//     sizes: [
//       { size: "36", color: "Oatmeal Heather", stock: 4 },
//       { size: "40", color: "Oatmeal Heather", stock: 1 },
//       { size: "33", color: "Oatmeal Heather", stock: 1 },
//       { size: "40", color: "Brown", stock: 1 },
//       { size: "36/32", color: "Oatmeal Heather", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P004/1.jpg", "images/products/P004/2.jpg", "images/products/P004/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P005 - GP-Double Cotton Ladies Easy Shorts-FO
//   // ============================================================
//   {
//     id: "P005",
//     name: "GP-Double Cotton Ladies Easy Shorts-FO",
//     brand: "GAP",
//     gender: "Female",
//     category: "Bottoms",
//     subCategory: "Shorts",
//     price: 1400, // Revenue 33600 / Qty 24
//     description: "GAP Double Cotton Ladies Easy Shorts — soft, comfortable, and easy to wear. Perfect for lounging.",
//     colors: ["Pink", "Brown", "White", "Black"],
//     sizes: [
//       { size: "XXS", color: "Pink", stock: 1 },
//       { size: "XS", color: "Pink", stock: 2 },
//       { size: "S", color: "Pink", stock: 3 },
//       { size: "M", color: "Pink", stock: 2 },
//       { size: "L", color: "Pink", stock: 2 },
//       { size: "XL", color: "Pink", stock: 1 },
//       { size: "XS", color: "Brown", stock: 1 },
//       { size: "L", color: "Brown", stock: 1 },
//       { size: "XS", color: "White", stock: 4 },
//       { size: "S", color: "White", stock: 3 },
//       { size: "M", color: "White", stock: 1 },
//       { size: "L", color: "White", stock: 2 },
//       { size: "M", color: "Black", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P005/1.jpg", "images/products/P005/2.jpg", "images/products/P005/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P006 - CR-Carhartt Cap-Regular
//   // ============================================================
//   {
//     id: "P006",
//     name: "CR-Carhartt Cap-Regular",
//     brand: "Carhartt",
//     gender: "Unisex",
//     category: "Accessories",
//     subCategory: "Caps",
//     price: 1500, // Revenue 81000 / Qty 54
//     description: "Carhartt Cap — classic workwear style. Durable, comfortable, and built to last.",
//     colors: ["Black"],
//     sizes: [
//       { size: "OS", color: "Black", stock: 53 } // 54 total, 1 sold
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P006/1.jpg", "images/products/P006/2.jpg", "images/products/P006/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P007 - CR-Carhartt Cap-Premium
//   // ============================================================
//   {
//     id: "P007",
//     name: "CR-Carhartt Cap-Premium",
//     brand: "Carhartt",
//     gender: "Unisex",
//     category: "Accessories",
//     subCategory: "Caps",
//     price: 2500, // Revenue 7500 / Qty 3
//     description: "Carhartt Cap Premium — premium edition with enhanced materials and detailing.",
//     colors: ["Black"],
//     sizes: [
//       { size: "OS", color: "Black", stock: 3 }
//     ],
//     badge: "Premium Collection",
//     images: ["images/products/P007/1.jpg", "images/products/P007/2.jpg", "images/products/P007/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P008 - CB-Columbia Cap
//   // ============================================================
//   {
//     id: "P008",
//     name: "CB-Columbia Cap",
//     brand: "Columbia",
//     gender: "Unisex",
//     category: "Accessories",
//     subCategory: "Caps",
//     price: 2500, // Revenue 27500 / Qty 11
//     description: "Columbia Cap — performance fabric with moisture-wicking technology.",
//     colors: ["Black"],
//     sizes: [
//       { size: "OS", color: "Black", stock: 10 } // 11 total, 1 sold
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P008/1.jpg", "images/products/P008/2.jpg", "images/products/P008/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P009 - NF-North Face Cap
//   // ============================================================
//   {
//     id: "P009",
//     name: "NF-North Face Cap",
//     brand: "North Face",
//     gender: "Unisex",
//     category: "Accessories",
//     subCategory: "Caps",
//     price: 2000, // Revenue 12000 / Qty 6
//     description: "North Face Cap — outdoor-ready cap with performance features.",
//     colors: ["Black"],
//     sizes: [
//       { size: "OS", color: "Black", stock: 6 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P009/1.jpg", "images/products/P009/2.jpg", "images/products/P009/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P010 - LC-Lacoste Crewneck-OR
//   // ============================================================
//   {
//     id: "P010",
//     name: "LC-Lacoste Crewneck-OR",
//     brand: "Lacoste",
//     gender: "Male",
//     category: "Tops",
//     subCategory: "T-Shirts",
//     price: 2300, // Revenue 89700 / Qty 39
//     description: "Lacoste Crewneck — classic French style with iconic crocodile logo. Premium cotton jersey.",
//     colors: ["White", "Style 02", "Style 03", "Style 04", "Style 05", "Style 07", "Style 08", "Style 09", "Style 10", "Style 11", "Style 12", "Style 13", "Style 14", "Style 15"],
//     sizes: [
//       { size: "S", color: "White", stock: 2 },
//       { size: "M", color: "White", stock: 1 },
//       { size: "XL", color: "White", stock: 1 },
//       { size: "S", color: "Style 02", stock: 1 },
//       { size: "XL", color: "Style 02", stock: 1 },
//       { size: "XXL", color: "Style 03", stock: 2 },
//       { size: "S", color: "Style 04", stock: 2 },
//       { size: "M", color: "Style 04", stock: 1 },
//       { size: "XL", color: "Style 04", stock: 1 },
//       { size: "S", color: "Style 05", stock: 2 },
//       { size: "M", color: "Style 05", stock: 1 },
//       { size: "XL", color: "Style 05", stock: 2 },
//       { size: "S", color: "Style 07", stock: 1 },
//       { size: "M", color: "Style 07", stock: 1 },
//       { size: "S", color: "Style 08", stock: 1 },
//       { size: "XL", color: "Style 08", stock: 2 },
//       { size: "M", color: "Style 08", stock: 2 },
//       { size: "S", color: "Style 09", stock: 1 },
//       { size: "XL", color: "Style 09", stock: 1 },
//       { size: "M", color: "Style 10", stock: 1 },
//       { size: "S", color: "Style 10", stock: 1 },
//       { size: "M", color: "Style 11", stock: 2 },
//       { size: "S", color: "Style 11", stock: 1 },
//       { size: "M", color: "Style 12", stock: 2 },
//       { size: "M", color: "Style 13", stock: 2 },
//       { size: "S", color: "Style 14", stock: 2 },
//       { size: "XL", color: "Style 14", stock: 1 },
//       { size: "S", color: "Style 15", stock: 1 },
//       { size: "L", color: "Style 15", stock: 1 },
//       { size: "XL", color: "Style 15", stock: 1 },
//       { size: "M", color: "Style 15", stock: 2 }
//     ],
//     badge: "Original",
//     images: ["images/products/P010/1.jpg", "images/products/P010/2.jpg", "images/products/P010/3.jpg"],
//     inStock: true
//   },

//     // ============================================================
//   // P011 - HK-Sport Polo T-Shirt-OG
//   // ============================================================
//   {
//     id: "P011",
//     name: "HK-Sport Polo T-Shirt-OG",
//     brand: "Hackett",
//     gender: "Male",
//     category: "Tops",
//     subCategory: "Polo Shirts",
//     price: 5500, // Revenue 38500 / Qty 7
//     description: "Hackett Sport Polo — classic British style with embroidered logo. Premium pique cotton.",
//     colors: ["White", "Black", "Navy"],
//     sizes: [
//       { size: "S", color: "White", stock: 1 },
//       { size: "XL", color: "White", stock: 1 },
//       { size: "XXL", color: "White", stock: 1 },
//       { size: "XL", color: "Black", stock: 1 },
//       { size: "S", color: "Navy", stock: 2 },
//       { size: "M", color: "Navy", stock: 1 }
//     ],
//     badge: "Original",
//     images: ["images/products/P011/1.jpg", "images/products/P011/2.jpg", "images/products/P011/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P012 - RL-RL Shirt Red Dotted-OG
//   // ============================================================
//   {
//     id: "P012",
//     name: "RL-RL Shirt Red Dotted-OG",
//     brand: "Ralph Lauren",
//     gender: "Male",
//     category: "Tops",
//     subCategory: "Shirts",
//     price: 3500, // Revenue 31500 / Qty 9
//     description: "Ralph Lauren Red Dotted Shirt — iconic polo shirt with signature dotted pattern. Classic American style.",
//     colors: ["Red"],
//     sizes: [
//       { size: "S", color: "Red", stock: 1 },
//       { size: "M", color: "Red", stock: 3 },
//       { size: "L", color: "Red", stock: 3 },
//       { size: "XL", color: "Red", stock: 2 }
//     ],
//     badge: "Original",
//     images: ["images/products/P012/1.jpg", "images/products/P012/2.jpg", "images/products/P012/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P013 - MS-Ladies Tailored Blouse-FO
//   // ============================================================
//   {
//     id: "P013",
//     name: "MS-Ladies Tailored Blouse-FO",
//     brand: "M&S",
//     gender: "Female",
//     category: "Tops",
//     subCategory: "Blouses",
//     price: 1350, // Revenue 8100 / Qty 6
//     description: "M&S Ladies Tailored Blouse — sophisticated and elegant. Perfect for work or special occasions.",
//     colors: ["Black", "Orange"],
//     sizes: [
//       { size: "14", color: "Black", stock: 5 },
//       { size: "18", color: "Orange", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P013/1.jpg", "images/products/P013/2.jpg", "images/products/P013/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P014 - AZ-ADEAZ Jogger Bottom-FO
//   // ============================================================
//   {
//     id: "P014",
//     name: "AZ-ADEAZ Jogger Bottom-FO",
//     brand: "Adeaz",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Joggers",
//     price: 2500, // Revenue 2500 / Qty 1
//     description: "Adeaz Jogger Bottom — comfortable and stylish. Perfect for casual wear and lounging.",
//     colors: ["Black"],
//     sizes: [
//       { size: "L", color: "Black", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P014/1.jpg", "images/products/P014/2.jpg", "images/products/P014/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P015 - TH-Tommy Flag Bearer Slim Pant-OG
//   // ============================================================
//   {
//     id: "P015",
//     name: "TH-Tommy Flag Bearer Slim Pant-OG",
//     brand: "Tommy Hilfiger",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 3250, // Revenue 13000 / Qty 4
//     description: "Tommy Hilfiger Flag Bearer Slim Pant — iconic American style with flag logo. Slim fit, premium cotton.",
//     colors: ["Beige", "Blue", "Ocean Blue"],
//     sizes: [
//       { size: "26/30", color: "Beige", stock: 1 },
//       { size: "29/32", color: "Beige", stock: 1 },
//       { size: "34/30", color: "Blue", stock: 1 },
//       { size: "34/30", color: "Ocean Blue", stock: 1 }
//     ],
//     badge: "Original",
//     images: ["images/products/P015/1.jpg", "images/products/P015/2.jpg", "images/products/P015/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P016 - TT-Tapered Fit Cargo-FO
//   // ============================================================
//   {
//     id: "P016",
//     name: "TT-Tapered Fit Cargo-FO",
//     brand: "Tom Tailor",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 5000, // Revenue 30000 / Qty 6
//     description: "Tom Tailor Tapered Fit Cargo — modern tapered cargo pants. Durable fabric with multiple pockets.",
//     colors: ["Gray", "Black", "Light Khaki"],
//     sizes: [
//       { size: "L", color: "Gray", stock: 1 },
//       { size: "L", color: "Black", stock: 2 },
//       { size: "XL", color: "Light Khaki", stock: 3 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P016/1.jpg", "images/products/P016/2.jpg", "images/products/P016/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P017 - ML-Mix Lot Chinos-FO
//   // ============================================================
//   {
//     id: "P017",
//     name: "ML-Mix Lot Chinos-FO",
//     brand: "Mix Lot",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 2850, // Revenue 8550 / Qty 3
//     description: "Mix Lot Chinos — versatile chino pants from premium factory surplus. Great everyday wear.",
//     colors: ["Navy", "Ocean Blue", "Olive Green"],
//     sizes: [
//       { size: "32/32", color: "Navy", stock: 1 },
//       { size: "34/32", color: "Ocean Blue", stock: 1 },
//       { size: "36/31", color: "Olive Green", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P017/1.jpg", "images/products/P017/2.jpg", "images/products/P017/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P018 - GP-GAP Cargo Pant-FO
//   // ============================================================
//   {
//     id: "P018",
//     name: "GP-GAP Cargo Pant-FO",
//     brand: "GAP",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 5250, // Revenue 26250 / Qty 5
//     description: "GAP Cargo Pant — classic cargo style with utility pockets. Durable cotton fabric.",
//     colors: ["Brown", "Black", "Khaki"],
//     sizes: [
//       { size: "30/32", color: "Brown", stock: 1 },
//       { size: "34/30", color: "Brown", stock: 1 },
//       { size: "36/32", color: "Brown", stock: 1 },
//       { size: "36/32", color: "Black", stock: 1 },
//       { size: "36/32", color: "Khaki", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P018/1.jpg", "images/products/P018/2.jpg", "images/products/P018/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P019 - CK-Infinite Flex Chino-OG
//   // ============================================================
//   {
//     id: "P019",
//     name: "CK-Infinite Flex Chino-OG",
//     brand: "Calvin Klein",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 3500, // Revenue 21000 / Qty 6
//     description: "Calvin Klein Infinite Flex Chino — ultimate comfort with 4-way stretch. Modern fit, premium quality.",
//     colors: ["Black", "Light Khaki", "Gray"],
//     sizes: [
//       { size: "30/30", color: "Black", stock: 1 },
//       { size: "33/30", color: "Light Khaki", stock: 2 },
//       { size: "33/30", color: "Gray", stock: 1 },
//       { size: "34/30", color: "Gray", stock: 1 },
//       { size: "34/30", color: "Light Khaki", stock: 1 }
//     ],
//     badge: "Original",
//     images: ["images/products/P019/1.jpg", "images/products/P019/2.jpg", "images/products/P019/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P020 - TH-TH Chino-FO
//   // ============================================================
//   {
//     id: "P020",
//     name: "TH-TH Chino-FO",
//     brand: "Tommy Hilfiger",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 3500, // Revenue 7000 / Qty 2
//     description: "Tommy Hilfiger Chino — classic chino with iconic Tommy branding. Versatile and timeless.",
//     colors: ["Navy", "Green"],
//     sizes: [
//       { size: "32/32", color: "Navy", stock: 1 },
//       { size: "32/32", color: "Green", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P020/1.jpg", "images/products/P020/2.jpg", "images/products/P020/3.jpg"],
//     inStock: true
//   },

//     // ============================================================
//   // P021 - MC-Elastic Waist Pant-FO
//   // ============================================================
//   {
//     id: "P021",
//     name: "MC-Elastic Waist Pant-FO",
//     brand: "Michael Cors",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 3900, // Revenue 23400 / Qty 6
//     description: "Michael Cors Elastic Waist Pant — ultimate comfort with stretch waistband. Perfect for all-day wear.",
//     colors: ["Khaki", "Black"],
//     sizes: [
//       { size: "30/32", color: "Khaki", stock: 2 },
//       { size: "32/32", color: "Black", stock: 1 },
//       { size: "34/32", color: "Black", stock: 1 },
//       { size: "36/34", color: "Black", stock: 1 },
//       { size: "36/32", color: "Black", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P021/1.jpg", "images/products/P021/2.jpg", "images/products/P021/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P022 - ML-Ladies Denim Wideleg Mix-FO
//   // ============================================================
//   {
//     id: "P022",
//     name: "ML-Ladies Denim Wideleg Mix-FO",
//     brand: "Mix Lot",
//     gender: "Female",
//     category: "Bottoms",
//     subCategory: "Jeans",
//     price: 4300, // Revenue 90300 / Qty 21
//     description: "Mix Lot Ladies Denim Wideleg — trendy wide-leg denim for women. Comfortable and stylish.",
//     colors: ["Black", "Blue", "Light Blue", "Washed", "Brown", "Pink"],
//     sizes: [
//       { size: "24", color: "Black", stock: 1 },
//       { size: "26", color: "Black", stock: 2 },
//       { size: "27", color: "Black", stock: 1 },
//       { size: "28", color: "Black", stock: 1 },
//       { size: "29", color: "Black", stock: 1 },
//       { size: "31", color: "Black", stock: 1 },
//       { size: "32", color: "Black", stock: 2 },
//       { size: "25", color: "Blue", stock: 1 },
//       { size: "26", color: "Blue", stock: 1 },
//       { size: "27", color: "Blue", stock: 2 },
//       { size: "28", color: "Blue", stock: 2 },
//       { size: "34", color: "Blue", stock: 1 },
//       { size: "32", color: "Light Blue", stock: 2 },
//       { size: "29", color: "Washed", stock: 1 },
//       { size: "27", color: "Brown", stock: 1 },
//       { size: "25", color: "Pink", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P022/1.jpg", "images/products/P022/2.jpg", "images/products/P022/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P023 - LB-Big Boys Lucky Brand Denim-FO
//   // ============================================================
//   {
//     id: "P023",
//     name: "LB-Big Boys Lucky Brand Denim-FO",
//     brand: "Lucky Brand",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Jeans",
//     price: 3000, // Revenue 9000 / Qty 3
//     description: "Lucky Brand Big Boys Denim — quality denim for big and tall sizes. Durable and comfortable.",
//     colors: ["Blue"],
//     sizes: [
//       { size: "28", color: "Blue", stock: 2 },
//       { size: "30", color: "Blue", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P023/1.jpg", "images/products/P023/2.jpg", "images/products/P023/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P024 - EB-Eddie Bauer Denim-FO
//   // ============================================================
//   {
//     id: "P024",
//     name: "EB-Eddie Bauer Denim-FO",
//     brand: "Eddie Bauer",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Jeans",
//     price: 3550, // Revenue 10650 / Qty 3
//     description: "Eddie Bauer Denim — rugged outdoor denim. Built for comfort and durability.",
//     colors: ["Blue"],
//     sizes: [
//       { size: "34/29", color: "Blue", stock: 1 },
//       { size: "36/29", color: "Blue", stock: 1 },
//       { size: "36/30", color: "Blue", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P024/1.jpg", "images/products/P024/2.jpg", "images/products/P024/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P025 - EB-Eddie Bauer Ranger Straight Leg Pant-FO
//   // ============================================================
//   {
//     id: "P025",
//     name: "EB-Eddie Bauer Ranger Straight Leg Pant-FO",
//     brand: "Eddie Bauer",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 3650, // Revenue 10950 / Qty 3
//     description: "Eddie Bauer Ranger Straight Leg Pant — classic straight-leg pants for outdoor and casual wear.",
//     colors: ["Light Khaki", "Black"],
//     sizes: [
//       { size: "38/30", color: "Light Khaki", stock: 1 },
//       { size: "38/32", color: "Light Khaki", stock: 1 },
//       { size: "32/32", color: "Black", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P025/1.jpg", "images/products/P025/2.jpg", "images/products/P025/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P026 - BR-Chambray Shirt-FO
//   // ============================================================
//   {
//     id: "P026",
//     name: "BR-Chambray Shirt-FO",
//     brand: "Banana Republic",
//     gender: "Male",
//     category: "Tops",
//     subCategory: "Shirts",
//     price: 3250, // Revenue 91000 / Qty 28
//     description: "Banana Republic Chambray Shirt — casual chambray fabric with classic style. Versatile and comfortable.",
//     colors: ["Blue"],
//     sizes: [
//       { size: "S", color: "Blue", stock: 8 },
//       { size: "M", color: "Blue", stock: 7 },
//       { size: "L", color: "Blue", stock: 13 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P026/1.jpg", "images/products/P026/2.jpg", "images/products/P026/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P027 - TH-Oxford Cotton Shirt-OG
//   // ============================================================
//   {
//     id: "P027",
//     name: "TH-Oxford Cotton Shirt-OG",
//     brand: "Tommy Hilfiger",
//     gender: "Male",
//     category: "Tops",
//     subCategory: "Shirts",
//     price: 7500, // Revenue 255000 / Qty 34
//     description: "Tommy Hilfiger Oxford Cotton Shirt — classic Oxford shirt with iconic Tommy branding. Premium quality.",
//     colors: ["White", "Navy", "Stripe", "Sweet Blue", "Pink", "Light Blue"],
//     sizes: [
//       { size: "S", color: "White", stock: 1 },
//       { size: "M", color: "White", stock: 3 },
//       { size: "L", color: "White", stock: 1 },
//       { size: "XL", color: "White", stock: 2 },
//       { size: "M", color: "Navy", stock: 9 },
//       { size: "L", color: "Navy", stock: 6 },
//       { size: "XL", color: "Navy", stock: 4 },
//       { size: "XXL", color: "Navy", stock: 1 },
//       { size: "XL", color: "Stripe", stock: 2 },
//       { size: "XXL", color: "Stripe", stock: 2 },
//       { size: "L", color: "Sweet Blue", stock: 1 },
//       { size: "L", color: "Pink", stock: 1 },
//       { size: "XL", color: "Light Blue", stock: 1 }
//     ],
//     badge: "Original",
//     images: ["images/products/P027/1.jpg", "images/products/P027/2.jpg", "images/products/P027/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P028 - TH-Oxford Cotton F/O Shirt-FO
//   // ============================================================
//   {
//     id: "P028",
//     name: "TH-Oxford Cotton F/O Shirt-FO",
//     brand: "Tommy Hilfiger",
//     gender: "Male",
//     category: "Tops",
//     subCategory: "Shirts",
//     price: 4450, // Revenue 4450 / Qty 1
//     description: "Tommy Hilfiger Oxford Cotton Factory Outlet Shirt — premium quality at factory outlet price.",
//     colors: ["Navy"],
//     sizes: [
//       { size: "XL", color: "Navy", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P028/1.jpg", "images/products/P028/2.jpg", "images/products/P028/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P029 - GP-Everyday Poplin Shirt-FO
//   // ============================================================
//   {
//     id: "P029",
//     name: "GP-Everyday Poplin Shirt-FO",
//     brand: "GAP",
//     gender: "Male",
//     category: "Tops",
//     subCategory: "Shirts",
//     price: 3650, // Revenue 3650 / Qty 1
//     description: "GAP Everyday Poplin Shirt — lightweight poplin fabric for all-day comfort. Classic fit.",
//     colors: ["Navy"],
//     sizes: [
//       { size: "M", color: "Navy", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P029/1.jpg", "images/products/P029/2.jpg", "images/products/P029/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P030 - UQ-Plain Tee Round Neck-FO
//   // ============================================================
//   {
//     id: "P030",
//     name: "UQ-Plain Tee Round Neck-FO",
//     brand: "Uniqlo",
//     gender: "Unisex",
//     category: "Tops",
//     subCategory: "T-Shirts",
//     price: 1200, // Revenue 18000 / Qty 15
//     description: "Uniqlo Plain Tee Round Neck — essential everyday tee. Soft, comfortable, and versatile.",
//     colors: ["Light Blue", "Black"],
//     sizes: [
//       { size: "XS", color: "Light Blue", stock: 3 },
//       { size: "S", color: "Light Blue", stock: 3 },
//       { size: "M", color: "Light Blue", stock: 5 },
//       { size: "L", color: "Light Blue", stock: 2 },
//       { size: "XXL", color: "Light Blue", stock: 1 },
//       { size: "XS", color: "Black", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P030/1.jpg", "images/products/P030/2.jpg", "images/products/P030/3.jpg"],
//     inStock: true
//   },

//     // ============================================================
//   // P031 - GP-Oxford Shirt-OR
//   // ============================================================
//   {
//     id: "P031",
//     name: "GP-Oxford Shirt-OR",
//     brand: "GAP",
//     gender: "Male",
//     category: "Tops",
//     subCategory: "Shirts",
//     price: 4550, // Revenue 4550 / Qty 1
//     description: "GAP Oxford Shirt — classic Oxford style with signature GAP quality.",
//     colors: ["Light Blue"],
//     sizes: [{ size: "M", color: "Light Blue", stock: 1 }],
//     badge: "Original",
//     images: ["images/products/P031/1.jpg", "images/products/P031/2.jpg", "images/products/P031/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P032 - GP-Linen Long Sleeve Stripe Shirt-FO
//   // ============================================================
//   {
//     id: "P032",
//     name: "GP-Linen Long Sleeve Stripe Shirt-FO",
//     brand: "GAP",
//     gender: "Male",
//     category: "Tops",
//     subCategory: "Shirts",
//     price: 4750, // Revenue 19000 / Qty 4
//     description: "GAP Linen Long Sleeve Stripe Shirt — breathable linen with classic stripe pattern.",
//     colors: ["Stripe"],
//     sizes: [
//       { size: "M", color: "Stripe", stock: 1 },
//       { size: "XL", color: "Stripe", stock: 3 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P032/1.jpg", "images/products/P032/2.jpg", "images/products/P032/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P033 - GP-Linen Cuban Collar Shirt-FO
//   // ============================================================
//   {
//     id: "P033",
//     name: "GP-Linen Cuban Collar Shirt-FO",
//     brand: "GAP",
//     gender: "Male",
//     category: "Tops",
//     subCategory: "Shirts",
//     price: 3900, // Revenue 54600 / Qty 14
//     description: "GAP Linen Cuban Collar Shirt — relaxed Cuban collar style in breathable linen.",
//     colors: ["Blue", "White", "Red", "Green"],
//     sizes: [
//       { size: "XS", color: "Blue", stock: 1 },
//       { size: "S", color: "Blue", stock: 1 },
//       { size: "M", color: "Blue", stock: 1 },
//       { size: "L", color: "Blue", stock: 1 },
//       { size: "XL", color: "Blue", stock: 1 },
//       { size: "L", color: "White", stock: 1 },
//       { size: "XL", color: "White", stock: 1 },
//       { size: "M", color: "Red", stock: 1 },
//       { size: "XL", color: "Red", stock: 1 },
//       { size: "XXL", color: "Red", stock: 1 },
//       { size: "S", color: "Green", stock: 1 },
//       { size: "L", color: "Green", stock: 1 },
//       { size: "XL", color: "Green", stock: 2 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P033/1.jpg", "images/products/P033/2.jpg", "images/products/P033/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P034 - OK-BBQ Shirt-FO
//   // ============================================================
//   {
//     id: "P034",
//     name: "OK-BBQ Shirt-FO",
//     brand: "Ok Outer",
//     gender: "Male",
//     category: "Tops",
//     subCategory: "Shirts",
//     price: 4450, // Revenue 13350 / Qty 3
//     description: "Ok Outer BBQ Shirt — casual shirt with unique style and comfortable fabric.",
//     colors: ["Blue"],
//     sizes: [
//       { size: "S", color: "Blue", stock: 1 },
//       { size: "M", color: "Blue", stock: 1 },
//       { size: "XL", color: "Blue", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P034/1.jpg", "images/products/P034/2.jpg", "images/products/P034/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P035 - UQ-Printed T-Shirt-FO
//   // ============================================================
//   {
//     id: "P035",
//     name: "UQ-Printed T-Shirt-FO",
//     brand: "Uniqlo",
//     gender: "Unisex",
//     category: "Tops",
//     subCategory: "T-Shirts",
//     price: 1550, // Revenue 13950 / Qty 9
//     description: "Uniqlo Printed T-Shirt — stylish printed tee with Uniqlo quality and comfort.",
//     colors: ["Beige", "Black", "Blue", "Light Blue"],
//     sizes: [
//       { size: "S", color: "Beige", stock: 2 },
//       { size: "S", color: "Black", stock: 1 },
//       { size: "M", color: "Beige", stock: 1 },
//       { size: "L", color: "Beige", stock: 2 },
//       { size: "XXL", color: "Blue", stock: 1 },
//       { size: "XXL", color: "Beige", stock: 1 },
//       { size: "XL", color: "Light Blue", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P035/1.jpg", "images/products/P035/2.jpg", "images/products/P035/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P036 - LV-Levi's Denim Short High Rise-FO
//   // ============================================================
//   {
//     id: "P036",
//     name: "LV-Levi's Denim Short High Rise-FO",
//     brand: "Levi's",
//     gender: "Female",
//     category: "Bottoms",
//     subCategory: "Shorts",
//     price: 2600, // Revenue 13000 / Qty 5
//     description: "Levi's Denim Short High Rise — classic Levi's denim shorts with high-rise fit.",
//     colors: ["Blue"],
//     sizes: [
//       { size: "32", color: "Blue", stock: 2 },
//       { size: "33", color: "Blue", stock: 1 },
//       { size: "34", color: "Blue", stock: 2 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P036/1.jpg", "images/products/P036/2.jpg", "images/products/P036/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P037 - HB-Regular Fit T-Shirt-OG
//   // ============================================================
//   {
//     id: "P037",
//     name: "HB-Regular Fit T-Shirt-OG",
//     brand: "Hugo Boss",
//     gender: "Male",
//     category: "Tops",
//     subCategory: "T-Shirts",
//     price: 5800, // Revenue 168200 / Qty 29
//     description: "Hugo Boss Regular Fit T-Shirt — premium German quality with signature Boss style.",
//     colors: ["Black", "Red", "Navy", "Green", "Blue"],
//     sizes: [
//       { size: "S", color: "Black", stock: 2 },
//       { size: "S", color: "Red", stock: 1 },
//       { size: "S", color: "Navy", stock: 2 },
//       { size: "M", color: "Red", stock: 2 },
//       { size: "M", color: "Navy", stock: 3 },
//       { size: "M", color: "Green", stock: 1 },
//       { size: "M", color: "Blue", stock: 1 },
//       { size: "L", color: "Green", stock: 1 },
//       { size: "L", color: "Red", stock: 2 },
//       { size: "L", color: "Navy", stock: 5 },
//       { size: "L", color: "Black", stock: 3 },
//       { size: "XL", color: "Navy", stock: 3 },
//       { size: "XL", color: "Red", stock: 1 },
//       { size: "XL", color: "Black", stock: 1 },
//       { size: "XXL", color: "Navy", stock: 1 }
//     ],
//     badge: "Original",
//     images: ["images/products/P037/1.jpg", "images/products/P037/2.jpg", "images/products/P037/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P038 - AI-Seamless Crewneck Tee-FO
//   // ============================================================
//   {
//     id: "P038",
//     name: "AI-Seamless Crewneck Tee-FO",
//     brand: "Ardent Inc",
//     gender: "Male",
//     category: "Tops",
//     subCategory: "T-Shirts",
//     price: 2000, // Revenue 2000 / Qty 1
//     description: "Ardent Inc Seamless Crewneck Tee — seamless construction for ultimate comfort.",
//     colors: ["Black Fladge"],
//     sizes: [{ size: "XL", color: "Black Fladge", stock: 1 }],
//     badge: "Factory Outlet",
//     images: ["images/products/P038/1.jpg", "images/products/P038/2.jpg", "images/products/P038/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P039 - WR-Wrangler Denim-FO
//   // ============================================================
//   {
//     id: "P039",
//     name: "WR-Wrangler Denim-FO",
//     brand: "Wrangler",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Jeans",
//     price: 3200, // Revenue 54400 / Qty 17
//     description: "Wrangler Denim — iconic American denim with rugged durability and timeless style.",
//     colors: ["Blue"],
//     sizes: [
//       { size: "31/32", color: "Blue", stock: 6 },
//       { size: "33/32", color: "Blue", stock: 3 },
//       { size: "34/32", color: "Blue", stock: 5 },
//       { size: "36/32", color: "Blue", stock: 3 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P039/1.jpg", "images/products/P039/2.jpg", "images/products/P039/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P040 - LV-Levi's Men's Mix Lot-FO
//   // ============================================================
//   {
//     id: "P040",
//     name: "LV-Levi's Men's Mix Lot-FO",
//     brand: "Levi's",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Jeans",
//     price: 5500, // Revenue 33000 / Qty 6
//     description: "Levi's Men's Mix Lot — curated selection of Levi's denim in various styles and sizes.",
//     colors: ["Blue"],
//     sizes: [
//       { size: "32", color: "Blue", stock: 2 },
//       { size: "34", color: "Blue", stock: 2 },
//       { size: "36", color: "Blue", stock: 2 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P040/1.jpg", "images/products/P040/2.jpg", "images/products/P040/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P041 - TH-Tommy Hilfiger Pants Mix Lot-OG
//   // ============================================================
//   {
//     id: "P041",
//     name: "TH-Tommy Hilfiger Pants Mix Lot-OG",
//     brand: "Tommy Hilfiger",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 12000, // Revenue 228000 / Qty 19
//     description: "Tommy Hilfiger Pants Mix Lot — premium Tommy Hilfiger trousers in multiple styles and colors.",
//     colors: ["Navy", "Green", "Light Ash", "Ocean Blue", "Light Khaki", "Gray", "White", "Black", "Khaki"],
//     sizes: [
//       { size: "32/32", color: "Navy", stock: 2 },
//       { size: "32/32", color: "Green", stock: 4 },
//       { size: "32/32", color: "Light Ash", stock: 2 },
//       { size: "34/34", color: "Green", stock: 1 },
//       { size: "34/34", color: "Navy", stock: 2 },
//       { size: "34/32", color: "Navy", stock: 1 },
//       { size: "34/34", color: "Ocean Blue", stock: 1 },
//       { size: "32/32", color: "Light Khaki", stock: 1 },
//       { size: "34/32", color: "Gray", stock: 1 },
//       { size: "32/32", color: "White", stock: 2 },
//       { size: "32/32", color: "Black", stock: 1 },
//       { size: "32/32", color: "Khaki", stock: 1 }
//     ],
//     badge: "Original",
//     images: ["images/products/P041/1.jpg", "images/products/P041/2.jpg", "images/products/P041/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P042 - GT-Regular Fit Twill Cotton Pant-FO
//   // ============================================================
//   {
//     id: "P042",
//     name: "GT-Regular Fit Twill Cotton Pant-FO",
//     brand: "Gant",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 4200, // Revenue 16800 / Qty 4
//     description: "Gant Regular Fit Twill Cotton Pant — classic twill cotton pants from Gant.",
//     colors: ["Navy", "Light Olive Green"],
//     sizes: [
//       { size: "31/34", color: "Navy", stock: 1 },
//       { size: "33/32", color: "Light Olive Green", stock: 3 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P042/1.jpg", "images/products/P042/2.jpg", "images/products/P042/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P043 - CK-Standard Straight Pant-OG
//   // ============================================================
//   {
//     id: "P043",
//     name: "CK-Standard Straight Pant-OG",
//     brand: "Calvin Klein",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 6500, // Revenue 65000 / Qty 10
//     description: "Calvin Klein Standard Straight Pant — classic straight-fit trousers from CK.",
//     colors: ["Dark Night Sky Blue", "Black", "Light Khaki"],
//     sizes: [
//       { size: "30/32", color: "Dark Night Sky Blue", stock: 1 },
//       { size: "32/32", color: "Dark Night Sky Blue", stock: 1 },
//       { size: "34/32", color: "Dark Night Sky Blue", stock: 1 },
//       { size: "34/32", color: "Black", stock: 2 },
//       { size: "33/32", color: "Black", stock: 1 },
//       { size: "34/30", color: "Light Khaki", stock: 1 },
//       { size: "34/32", color: "Light Khaki", stock: 1 },
//       { size: "36/30", color: "Light Khaki", stock: 1 },
//       { size: "36/32", color: "Light Khaki", stock: 1 }
//     ],
//     badge: "Original",
//     images: ["images/products/P043/1.jpg", "images/products/P043/2.jpg", "images/products/P043/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P046 - US-Jetblack Denim-OG
//   // ============================================================
//   {
//     id: "P046",
//     name: "US-Jetblack Denim-OG",
//     brand: "US Polo",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Jeans",
//     price: 12500, // Revenue 12500 / Qty 1
//     description: "US Polo Jetblack Denim — premium jet-black denim from US Polo Association.",
//     colors: ["Jetblack"],
//     sizes: [{ size: "32", color: "Jetblack", stock: 1 }],
//     badge: "Original",
//     images: ["images/products/P046/1.jpg", "images/products/P046/2.jpg", "images/products/P046/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P047 - LV-Levi's Denim Mix Lot-OG
//   // ============================================================
//   {
//     id: "P047",
//     name: "LV-Levi's Denim Mix Lot-OG",
//     brand: "Levi's",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Jeans",
//     price: 8500, // Revenue 34000 / Qty 4
//     description: "Levi's Denim Mix Lot — premium Levi's denim in multiple sizes and washes.",
//     colors: ["Blue"],
//     sizes: [
//       { size: "28/32", color: "Blue", stock: 1 },
//       { size: "30/30", color: "Blue", stock: 1 },
//       { size: "30/31", color: "Blue", stock: 1 },
//       { size: "30/32", color: "Blue", stock: 1 }
//     ],
//     badge: "Original",
//     images: ["images/products/P047/1.jpg", "images/products/P047/2.jpg", "images/products/P047/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P048 - LV-Ladies Denim Mix Lot-OG
//   // ============================================================
//   {
//     id: "P048",
//     name: "LV-Ladies Denim Mix Lot-OG",
//     brand: "Levi's",
//     gender: "Female",
//     category: "Bottoms",
//     subCategory: "Jeans",
//     price: 6500, // Revenue 13000 / Qty 2
//     description: "Levi's Ladies Denim Mix Lot — premium women's denim from Levi's.",
//     colors: ["Blue"],
//     sizes: [
//       { size: "30/28", color: "Blue", stock: 2 }
//     ],
//     badge: "Original",
//     images: ["images/products/P048/1.jpg", "images/products/P048/2.jpg", "images/products/P048/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P049 - EB-Ladies Pant-FO
//   // ============================================================
//   {
//     id: "P049",
//     name: "EB-Ladies Pant-FO",
//     brand: "Eddie Bauer",
//     gender: "Female",
//     category: "Bottoms",
//     subCategory: "Trousers",
//     price: 2300, // Revenue 4600 / Qty 2
//     description: "Eddie Bauer Ladies Pant — comfortable pants for women from Eddie Bauer.",
//     colors: ["Unknown"],
//     sizes: [
//       { size: "OS", color: "Unknown", stock: 2 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P049/1.jpg", "images/products/P049/2.jpg", "images/products/P049/3.jpg"],
//     inStock: true
//   },



//   // ============================================================
//   // P051 - TH-Jogger Pant-OG
//   // ============================================================
//   {
//     id: "P051",
//     name: "TH-Jogger Pant-OG",
//     brand: "Tommy Hilfiger",
//     gender: "Male",
//     category: "Bottoms",
//     subCategory: "Joggers",
//     price: 5500, // Revenue 11000 / Qty 2
//     description: "Tommy Hilfiger Jogger Pant — comfortable joggers with iconic Tommy branding.",
//     colors: ["Green", "Navy"],
//     sizes: [
//       { size: "32/32", color: "Green", stock: 1 },
//       { size: "32/32", color: "Navy", stock: 1 }
//     ],
//     badge: "Original",
//     images: ["images/products/P051/1.jpg", "images/products/P051/2.jpg", "images/products/P051/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P052 - US-USPA Polo T-Shirt-OG
//   // ============================================================
//   {
//     id: "P052",
//     name: "US-USPA Polo T-Shirt-OG",
//     brand: "US Polo",
//     gender: "Male",
//     category: "Tops",
//     subCategory: "Polo Shirts",
//     price: 4500, // Revenue 13500 / Qty 3
//     description: "US Polo Association Polo T-Shirt — classic polo with iconic USPA logo.",
//     colors: ["White"],
//     sizes: [
//       { size: "S", color: "White", stock: 3 }
//     ],
//     badge: "Original",
//     images: ["images/products/P052/1.jpg", "images/products/P052/2.jpg", "images/products/P052/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P053 - GP-Linen Long Sleeve Shirt-FO
//   // ============================================================
//   {
//     id: "P053",
//     name: "GP-Linen Long Sleeve Shirt-FO",
//     brand: "GAP",
//     gender: "Male",
//     category: "Tops",
//     subCategory: "Shirts",
//     price: 6500, // Revenue 6500 / Qty 1
//     description: "GAP Linen Long Sleeve Shirt — breathable linen shirt from GAP.",
//     colors: ["White"],
//     sizes: [{ size: "XL", color: "White", stock: 1 }],
//     badge: "Factory Outlet",
//     images: ["images/products/P053/1.jpg", "images/products/P053/2.jpg", "images/products/P053/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P054 - CS-Castore F1 Merch Mix Lot-FO
//   // ============================================================
//   {
//     id: "P054",
//     name: "CS-Castore F1 Merch Mix Lot-FO",
//     brand: "Castore",
//     gender: "Unisex",
//     category: "Tops",
//     subCategory: "T-Shirts",
//     price: 2500, // Revenue 120000 / Qty 48
//     description: "Castore F1 Merch — officially licensed Formula 1 merchandise from Castore.",
//     colors: ["Evening Primrose", "Phantom", "Egret", "Oxotic Orange", "Bright White", "Autumn Glory", "Deep Lichen Green", "Night Sky", "White", "Black", "Blue Iris"],
//     sizes: [
//       { size: "XS", color: "Evening Primrose", stock: 1 },
//       { size: "S", color: "Evening Primrose", stock: 1 },
//       { size: "M", color: "Evening Primrose", stock: 1 },
//       { size: "L", color: "Evening Primrose", stock: 1 },
//       { size: "S", color: "Phantom", stock: 1 },
//       { size: "M", color: "Phantom", stock: 2 },
//       { size: "L", color: "Phantom", stock: 1 },
//       { size: "XL", color: "Phantom", stock: 1 },
//       { size: "M", color: "Egret", stock: 2 },
//       { size: "S", color: "Oxotic Orange", stock: 1 },
//       { size: "L", color: "Oxotic Orange", stock: 1 },
//       { size: "XS", color: "Bright White", stock: 1 },
//       { size: "XL", color: "Autumn Glory", stock: 3 },
//       { size: "L", color: "Deep Lichen Green", stock: 2 },
//       { size: "XL", color: "Deep Lichen Green", stock: 1 },
//       { size: "M", color: "Night Sky", stock: 4 },
//       { size: "M", color: "White", stock: 1 },
//       { size: "L", color: "White", stock: 1 },
//       { size: "XL", color: "White", stock: 1 },
//       { size: "M", color: "Autumn Glory", stock: 1 },
//       { size: "L", color: "Autumn Glory", stock: 1 },
//       { size: "XL", color: "Autumn Glory", stock: 4 },
//       { size: "2XL", color: "Bright White", stock: 3 },
//       { size: "3XL", color: "Bright White", stock: 1 },
//       { size: "2XL", color: "Black", stock: 2 },
//       { size: "2XL", color: "White", stock: 2 },
//       { size: "2XL", color: "Blue Iris", stock: 2 },
//       { size: "3XL", color: "Evening Primrose", stock: 1 },
//       { size: "3XL", color: "Oxotic Orange", stock: 1 },
//       { size: "4XL", color: "Oxotic Orange", stock: 1 },
//       { size: "M", color: "Bright White", stock: 1 },
//       { size: "4XL", color: "Egret", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P054/1.jpg", "images/products/P054/2.jpg", "images/products/P054/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P055 - CS-Castore F1 Kids' Round Neck Tee Mix-FO
//   // ============================================================
//   {
//     id: "P055",
//     name: "CS-Castore F1 Kids' Round Neck Tee Mix-FO",
//     brand: "Castore",
//     gender: "Unisex",
//     category: "Tops",
//     subCategory: "T-Shirts",
//     price: 1650, // Revenue 28050 / Qty 17
//     description: "Castore F1 Kids' Round Neck Tee — officially licensed F1 kids' t-shirts.",
//     colors: ["Exotic Orange", "Night Sky", "Bright White", "Black"],
//     sizes: [
//       { size: "JS", color: "Exotic Orange", stock: 9 },
//       { size: "JM", color: "Night Sky", stock: 4 },
//       { size: "JL", color: "Bright White", stock: 1 },
//       { size: "JXL", color: "Bright White", stock: 2 },
//       { size: "JXL", color: "Black", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P055/1.jpg", "images/products/P055/2.jpg", "images/products/P055/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P056 - CS-Castore F1 Kids' Hoodie Mix-FO
//   // ============================================================
//   {
//     id: "P056",
//     name: "CS-Castore F1 Kids' Hoodie Mix-FO",
//     brand: "Castore",
//     gender: "Unisex",
//     category: "Outerwear",
//     subCategory: "Hoodies",
//     price: 2200, // Revenue 6600 / Qty 3
//     description: "Castore F1 Kids' Hoodie — officially licensed F1 hoodie for kids.",
//     colors: ["Gray", "Black"],
//     sizes: [
//       { size: "JM", color: "Gray", stock: 2 },
//       { size: "JXL", color: "Black", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P056/1.jpg", "images/products/P056/2.jpg", "images/products/P056/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P057 - EL-Ellesse Mens Hipster Boxers-FO
//   // ============================================================
//   {
//     id: "P057",
//     name: "EL-Ellesse Mens Hipster Boxers-FO",
//     brand: "Ellesse",
//     gender: "Male",
//     category: "Accessories",
//     subCategory: "Boxers",
//     price: 1100, // Revenue 9900 / Qty 9
//     description: "Ellesse Mens Hipster Boxers — comfortable Italian-style hipster boxers.",
//     colors: ["Black"],
//     sizes: [
//       { size: "L", color: "Black", stock: 6 },
//       { size: "XL", color: "Black", stock: 3 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P057/1.jpg", "images/products/P057/2.jpg", "images/products/P057/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P058 - CR-Crocodile Talon Boxers-FO
//   // ============================================================
//   {
//     id: "P058",
//     name: "CR-Crocodile Talon Boxers-FO",
//     brand: "Crocodile",
//     gender: "Male",
//     category: "Accessories",
//     subCategory: "Boxers",
//     price: 1200, // Revenue 16800 / Qty 14
//     description: "Crocodile Talon Boxers — premium boxers from Crocodile.",
//     colors: ["Green", "Navy", "Black", "Maroon", "Gray"],
//     sizes: [
//       { size: "S", color: "Green", stock: 2 },
//       { size: "S", color: "Navy", stock: 1 },
//       { size: "M", color: "Green", stock: 2 },
//       { size: "M", color: "Black", stock: 2 },
//       { size: "M", color: "Maroon", stock: 1 },
//       { size: "L", color: "Green", stock: 2 },
//       { size: "L", color: "Black", stock: 1 },
//       { size: "XL", color: "Green", stock: 1 },
//       { size: "XL", color: "Black", stock: 1 },
//       { size: "XL", color: "Gray", stock: 1 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P058/1.jpg", "images/products/P058/2.jpg", "images/products/P058/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P059 - CK-CK Variety Waistband Boxers-FO
//   // ============================================================
//   {
//     id: "P059",
//     name: "CK-CK Variety Waistband Boxers-FO",
//     brand: "Calvin Klein",
//     gender: "Male",
//     category: "Accessories",
//     subCategory: "Boxers",
//     price: 1200, // Revenue 21600 / Qty 18
//     description: "Calvin Klein Variety Waistband Boxers — iconic CK boxers with variety waistband designs.",
//     colors: ["Black"],
//     sizes: [
//       { size: "M", color: "Black", stock: 9 },
//       { size: "XL", color: "Black", stock: 6 },
//       { size: "L", color: "Black", stock: 3 }
//     ],
//     badge: "Factory Outlet",
//     images: ["images/products/P059/1.jpg", "images/products/P059/2.jpg", "images/products/P059/3.jpg"],
//     inStock: true
//   },

//   // ============================================================
//   // P060 - GS-Gymshark Soft Sculpt Legging-OG
//   // ============================================================
//   {
//     id: "P060",
//     name: "GS-Gymshark Soft Sculpt Legging-OG",
//     brand: "Gymshark",
//     gender: "Female",
//     category: "Activewear",
//     subCategory: "Leggings",
//     price: 6450, // Revenue 116100 / Qty 18
//     description: "Gymshark Soft Sculpt Legging — sculpting high-waisted leggings for ultimate gym performance.",
//     colors: ["Brown"],
//     sizes: [
//       { size: "M", color: "Brown", stock: 1 },
//       { size: "S", color: "Brown", stock: 17 }
//     ],
//     badge: "Original",
//     images: ["images/products/P060/1.jpg", "images/products/P060/2.jpg", "images/products/P060/3.jpg"],
//     inStock: true
//   },

  // ============================================================
  // P061 - NK-Nike Pro Mens Training Short-OG
  // ============================================================
  // {
  //   id: "P061",
  //   name: "NK-Nike Pro Mens Training Short-OG",
  //   brand: "Nike",
  //   gender: "Male",
  //   category: "Bottoms",
  //   subCategory: "Shorts",
  //   price: 2800, // Revenue 19600 / Qty 7
  //   description: "Nike Pro Training Short — high-performance training shorts from Nike Pro.",
  //   colors: ["Gray", "Black"],
  //   sizes: [
  //     { size: "M", color: "Gray", stock: 2 },
  //     { size: "M", color: "Black", stock: 2 },
  //     { size: "L", color: "Gray", stock: 3 }
  //   ],
  //   badge: "Original",
  //   images: ["images/products/P061/1.jpg", "images/products/P061/2.jpg", "images/products/P061/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P062 - CK-CK HP Brief Micro Fiber Mesh-OG
  // // ============================================================
  // {
  //   id: "P062",
  //   name: "CK-CK HP Brief Micro Fiber Mesh-OG",
  //   brand: "Calvin Klein",
  //   gender: "Male",
  //   category: "Accessories",
  //   subCategory: "Boxers",
  //   price: 1800, // Revenue 16200 / Qty 9
  //   description: "Calvin Klein HP Brief Micro Fiber Mesh — premium microfiber mesh briefs from CK.",
  //   colors: ["White", "Blue", "Black", "Gray"],
  //   sizes: [
  //     { size: "M", color: "White", stock: 2 },
  //     { size: "M", color: "Blue", stock: 2 },
  //     { size: "M", color: "Black", stock: 3 },
  //     { size: "M", color: "Gray", stock: 2 }
  //   ],
  //   badge: "Original",
  //   images: ["images/products/P062/1.jpg", "images/products/P062/2.jpg", "images/products/P062/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P063 - GS-Guess Bags-Damages
  // // ============================================================
  // {
  //   id: "P063",
  //   name: "GS-Guess Bags-Damages",
  //   brand: "Guess",
  //   gender: "Unisex",
  //   category: "Accessories",
  //   subCategory: "Bags",
  //   price: 1200, // Revenue 8400 / Qty 7
  //   description: "Guess Bags — authentic Guess bags with minor cosmetic damage. Great value.",
  //   colors: ["Black"],
  //   sizes: [
  //     { size: "OS", color: "Black", stock: 7 }
  //   ],
  //   badge: "As-Is",
  //   images: ["images/products/P063/1.jpg", "images/products/P063/2.jpg", "images/products/P063/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P064 - CS-Castore Woven Training Short-FO
  // // ============================================================
  // {
  //   id: "P064",
  //   name: "CS-Castore Woven Training Short-FO",
  //   brand: "Castore",
  //   gender: "Unisex",
  //   category: "Bottoms",
  //   subCategory: "Shorts",
  //   price: 1850, // Revenue 16650 / Qty 9
  //   description: "Castore Woven Training Short — lightweight woven training shorts from Castore.",
  //   colors: ["Blue", "Unknown", "Dark Slate", "Black", "Gray"],
  //   sizes: [
  //     { size: "XS", color: "Blue", stock: 2 },
  //     { size: "S", color: "Unknown", stock: 1 },
  //     { size: "M", color: "Dark Slate", stock: 1 },
  //     { size: "M", color: "Blue", stock: 1 },
  //     { size: "M", color: "Black", stock: 1 },
  //     { size: "L", color: "Black", stock: 1 },
  //     { size: "L", color: "Blue", stock: 1 },
  //     { size: "2XL", color: "Gray", stock: 1 }
  //   ],
  //   badge: "Factory Outlet",
  //   images: ["images/products/P064/1.jpg", "images/products/P064/2.jpg", "images/products/P064/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P065 - CS-Castore Training Pant & Short Mix-FO
  // // ============================================================
  // {
  //   id: "P065",
  //   name: "CS-Castore Training Pant & Short Mix-FO",
  //   brand: "Castore",
  //   gender: "Unisex",
  //   category: "Bottoms",
  //   subCategory: "Shorts",
  //   price: 1850, // Revenue 3700 / Qty 2
  //   description: "Castore Training Pant & Short Mix — versatile mix of training pants and shorts.",
  //   colors: ["Green", "Navy"],
  //   sizes: [
  //     { size: "M", color: "Green", stock: 1 },
  //     { size: "M", color: "Navy", stock: 1 }
  //   ],
  //   badge: "Factory Outlet",
  //   images: ["images/products/P065/1.jpg", "images/products/P065/2.jpg", "images/products/P065/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P066 - CK OG T-Shirt Crewneck
  // // ============================================================
  // {
  //   id: "P066",
  //   name: "CK OG T-Shirt Crewneck",
  //   brand: "Calvin Klein",
  //   gender: "Male",
  //   category: "Tops",
  //   subCategory: "T-Shirts",
  //   price: 3250, // Revenue 185250 / Qty 57
  //   description: "Calvin Klein OG Crewneck T-Shirt — classic CK crewneck in multiple colors.",
  //   colors: ["White", "Brown", "Black", "Navy", "Safety Yellow", "Other Colors", "Maroon", "Royal Blue"],
  //   sizes: [
  //     { size: "S", color: "White", stock: 15 },
  //     { size: "S", color: "Brown", stock: 2 },
  //     { size: "S", color: "Black", stock: 8 },
  //     { size: "S", color: "Navy", stock: 2 },
  //     { size: "S", color: "Safety Yellow", stock: 4 },
  //     { size: "S", color: "Other Colors", stock: 4 },
  //     { size: "Big", color: "Black", stock: 13 },
  //     { size: "Big", color: "Other Colors", stock: 3 },
  //     { size: "Big", color: "Maroon", stock: 3 },
  //     { size: "Big", color: "Royal Blue", stock: 2 },
  //     { size: "Big", color: "White", stock: 1 }
  //   ],
  //   badge: "Original",
  //   images: ["images/products/P066/1.jpg", "images/products/P066/2.jpg", "images/products/P066/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P067 - CK Sleep Suit
  // // ============================================================
  // {
  //   id: "P067",
  //   name: "CK Sleep Suit",
  //   brand: "Calvin Klein",
  //   gender: "Male",
  //   category: "Others",
  //   subCategory: "Sleepwear",
  //   price: 3250, // Revenue 9750 / Qty 3
  //   description: "Calvin Klein Sleep Suit — comfortable sleepwear from CK.",
  //   colors: ["Unknown"],
  //   sizes: [
  //     { size: "XS", color: "Unknown", stock: 1 },
  //     { size: "M", color: "Unknown", stock: 1 },
  //     { size: "L", color: "Unknown", stock: 1 }
  //   ],
  //   badge: "Original",
  //   images: ["images/products/P067/1.jpg", "images/products/P067/2.jpg", "images/products/P067/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P068 - BR Dress Shirts Mix Styles-FO
  // // ============================================================
  // {
  //   id: "P068",
  //   name: "BR Dress Shirts Mix Styles-FO",
  //   brand: "Banana Republic",
  //   gender: "Male",
  //   category: "Tops",
  //   subCategory: "Shirts",
  //   price: 4300, // Revenue 120400 / Qty 28
  //   description: "Banana Republic Dress Shirts Mix Styles — premium dress shirts in multiple styles.",
  //   colors: ["Unknown"],
  //   sizes: [
  //     { size: "M", color: "Unknown", stock: 10 },
  //     { size: "XL", color: "Unknown", stock: 16 },
  //     { size: "XXL", color: "Unknown", stock: 2 }
  //   ],
  //   badge: "Factory Outlet",
  //   images: ["images/products/P068/1.jpg", "images/products/P068/2.jpg", "images/products/P068/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P069 - OG BR Dress Shirts Mix Styles
  // // ============================================================
  // {
  //   id: "P069",
  //   name: "OG BR Dress Shirts Mix Styles",
  //   brand: "Banana Republic",
  //   gender: "Male",
  //   category: "Tops",
  //   subCategory: "Shirts",
  //   price: 5450, // Revenue 70850 / Qty 13
  //   description: "Original Banana Republic Dress Shirts Mix Styles — premium dress shirts.",
  //   colors: ["Unknown"],
  //   sizes: [
  //     { size: "M", color: "Unknown", stock: 13 }
  //   ],
  //   badge: "Original",
  //   images: ["images/products/P069/1.jpg", "images/products/P069/2.jpg", "images/products/P069/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P070 - OLD Navy Plain Shirts-FO
  // // ============================================================
  // {
  //   id: "P070",
  //   name: "OLD Navy Plain Shirts-FO",
  //   brand: "Old Navy",
  //   gender: "Male",
  //   category: "Tops",
  //   subCategory: "Shirts",
  //   price: 4300, // Revenue 38700 / Qty 9
  //   description: "Old Navy Plain Shirts — clean, versatile plain shirts from Old Navy.",
  //   colors: ["White", "Sweet Blue", "Black"],
  //   sizes: [
  //     { size: "S", color: "White", stock: 3 },
  //     { size: "M", color: "White", stock: 1 },
  //     { size: "S", color: "Sweet Blue", stock: 1 },
  //     { size: "4XL", color: "Black", stock: 2 },
  //     { size: "XL", color: "Black", stock: 2 }
  //   ],
  //   badge: "Factory Outlet",
  //   images: ["images/products/P070/1.jpg", "images/products/P070/2.jpg", "images/products/P070/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P071 - Lacoste OG Kids' Jerseys Mix Lot
  // // ============================================================
  // {
  //   id: "P071",
  //   name: "Lacoste OG Kids' Jerseys Mix Lot",
  //   brand: "Lacoste",
  //   gender: "Unisex",
  //   category: "Tops",
  //   subCategory: "T-Shirts",
  //   price: 3600, // Revenue 64800 / Qty 18
  //   description: "Lacoste OG Kids' Jerseys Mix Lot — premium kids' jerseys from Lacoste.",
  //   colors: ["Pink", "Light Sky Blue", "Red", "White", "Purple", "Royal Blue", "Navy Blue", "Light Green"],
  //   sizes: [
  //     { size: "14", color: "Pink", stock: 1 },
  //     { size: "10", color: "Light Sky Blue", stock: 2 },
  //     { size: "5", color: "Red", stock: 1 },
  //     { size: "8", color: "Red", stock: 3 },
  //     { size: "10", color: "Red", stock: 1 },
  //     { size: "2", color: "Red", stock: 1 },
  //     { size: "3", color: "Red", stock: 1 },
  //     { size: "8", color: "White", stock: 1 },
  //     { size: "10", color: "Purple", stock: 1 },
  //     { size: "12", color: "Royal Blue", stock: 2 },
  //     { size: "12", color: "Navy Blue", stock: 1 },
  //     { size: "8", color: "Navy Blue", stock: 1 },
  //     { size: "12", color: "Navy Blue", stock: 1 },
  //     { size: "10", color: "Light Green", stock: 1 }
  //   ],
  //   badge: "Original",
  //   images: ["images/products/P071/1.jpg", "images/products/P071/2.jpg", "images/products/P071/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P072 - Lacoste OG Mens Short
  // // ============================================================
  // {
  //   id: "P072",
  //   name: "Lacoste OG Mens Short",
  //   brand: "Lacoste",
  //   gender: "Male",
  //   category: "Bottoms",
  //   subCategory: "Shorts",
  //   price: 5000, // Revenue 15000 / Qty 3
  //   description: "Lacoste OG Mens Short — classic Lacoste shorts with signature crocodile logo.",
  //   colors: ["Black", "Gray"],
  //   sizes: [
  //     { size: "FR2", color: "Black", stock: 1 },
  //     { size: "FR2", color: "Gray", stock: 1 },
  //     { size: "FR3", color: "Black", stock: 1 }
  //   ],
  //   badge: "Original",
  //   images: ["images/products/P072/1.jpg", "images/products/P072/2.jpg", "images/products/P072/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P073 - Castore Fleece Mix Hoodies
  // // ============================================================
  // {
  //   id: "P073",
  //   name: "Castore Fleece Mix Hoodies",
  //   brand: "Castore",
  //   gender: "Unisex",
  //   category: "Outerwear",
  //   subCategory: "Hoodies",
  //   price: 3800, // Revenue 72200 / Qty 19
  //   description: "Castore Fleece Mix Hoodies — premium fleece hoodies from Castore in multiple colors.",
  //   colors: ["Navy Blue", "Orange", "McLean Green", "Gray", "McLean Pink", "Black", "Skipper Blue"],
  //   sizes: [
  //     { size: "M", color: "Navy Blue", stock: 2 },
  //     { size: "L", color: "Navy Blue", stock: 1 },
  //     { size: "M", color: "Orange", stock: 3 },
  //     { size: "2XL", color: "McLean Green", stock: 1 },
  //     { size: "2XL", color: "Gray", stock: 1 },
  //     { size: "2XL", color: "McLean Pink", stock: 1 },
  //     { size: "S", color: "McLean Green", stock: 2 },
  //     { size: "XL", color: "Black", stock: 2 },
  //     { size: "XL", color: "Skipper Blue", stock: 1 },
  //     { size: "XS", color: "Skipper Blue", stock: 1 },
  //     { size: "L", color: "Black", stock: 1 },
  //     { size: "L", color: "Skipper Blue", stock: 1 },
  //     { size: "S", color: "Navy Blue", stock: 1 },
  //     { size: "S", color: "Skipper Blue", stock: 1 }
  //   ],
  //   badge: "Factory Outlet",
  //   images: ["images/products/P073/1.jpg", "images/products/P073/2.jpg", "images/products/P073/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P074 - Kids Muffler
  // // ============================================================
  // {
  //   id: "P074",
  //   name: "Kids Muffler",
  //   brand: "Unknown",
  //   gender: "Unisex",
  //   category: "Accessories",
  //   subCategory: "Accessories",
  //   price: 1500, // Revenue 3000 / Qty 2
  //   description: "Kids Muffler — warm and cozy muffler for kids.",
  //   colors: ["Pink"],
  //   sizes: [
  //     { size: "OS", color: "Pink", stock: 2 }
  //   ],
  //   badge: "",
  //   images: ["images/products/P074/1.jpg", "images/products/P074/2.jpg", "images/products/P074/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P075 - Lands End Formal Pant
  // // ============================================================
  // {
  //   id: "P075",
  //   name: "Lands End Formal Pant",
  //   brand: "Lands End",
  //   gender: "Male",
  //   category: "Bottoms",
  //   subCategory: "Trousers",
  //   price: 2000, // Revenue 2000 / Qty 1
  //   description: "Lands End Formal Pant — classic formal trousers from Lands End.",
  //   colors: ["Black"],
  //   sizes: [
  //     { size: "44", color: "Black", stock: 1 }
  //   ],
  //   badge: "",
  //   images: ["images/products/P075/1.jpg", "images/products/P075/2.jpg", "images/products/P075/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P076 - Sleeveless Puffy Jacket
  // // ============================================================
  // {
  //   id: "P076",
  //   name: "Sleeveless Puffy Jacket",
  //   brand: "Terranova",
  //   gender: "Unisex",
  //   category: "Outerwear",
  //   subCategory: "Jackets",
  //   price: 3670, // Revenue 11010 / Qty 3
  //   description: "Terranova Sleeveless Puffy Jacket — lightweight puffy vest from Terranova.",
  //   colors: ["Brown", "White", "Black"],
  //   sizes: [
  //     { size: "XS", color: "Brown", stock: 1 },
  //     { size: "M", color: "White", stock: 1 },
  //     { size: "XS", color: "Black", stock: 1 }
  //   ],
  //   badge: "Factory Outlet",
  //   images: ["images/products/P076/1.jpg", "images/products/P076/2.jpg", "images/products/P076/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P077 - Hoodies Padded Mix Lot
  // // ============================================================
  // {
  //   id: "P077",
  //   name: "Hoodies Padded Mix Lot",
  //   brand: "Unknown",
  //   gender: "Unisex",
  //   category: "Outerwear",
  //   subCategory: "Hoodies",
  //   price: 12000, // Revenue 132000 / Qty 11
  //   description: "Hoodies Padded Mix Lot — premium padded hoodies in various styles.",
  //   colors: ["Unknown"],
  //   sizes: [
  //     { size: "OS", color: "Unknown", stock: 11 }
  //   ],
  //   badge: "",
  //   images: ["images/products/P077/1.jpg", "images/products/P077/2.jpg", "images/products/P077/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P078 - Puffy Mix Jacket
  // // ============================================================
  // {
  //   id: "P078",
  //   name: "Puffy Mix Jacket",
  //   brand: "Unknown",
  //   gender: "Unisex",
  //   category: "Outerwear",
  //   subCategory: "Jackets",
  //   price: 5500, // Revenue 49500 / Qty 9
  //   description: "Puffy Mix Jacket — warm puffy jackets in various styles.",
  //   colors: ["Unknown"],
  //   sizes: [
  //     { size: "OS", color: "Unknown", stock: 9 }
  //   ],
  //   badge: "",
  //   images: ["images/products/P078/1.jpg", "images/products/P078/2.jpg", "images/products/P078/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P079 - Roxy Backpack 20.5L
  // // ============================================================
  // {
  //   id: "P079",
  //   name: "Roxy Backpack 20.5L",
  //   brand: "Roxy",
  //   gender: "Unisex",
  //   category: "Accessories",
  //   subCategory: "Bags",
  //   price: 6200, // Revenue 43400 / Qty 7
  //   description: "Roxy Backpack 20.5L — stylish Roxy backpack perfect for everyday use.",
  //   colors: ["Black"],
  //   sizes: [
  //     { size: "OS", color: "Black", stock: 7 }
  //   ],
  //   badge: "Premium",
  //   images: ["images/products/P079/1.jpg", "images/products/P079/2.jpg", "images/products/P079/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P080 - CK OG Straight Fit Pant
  // // ============================================================
  // {
  //   id: "P080",
  //   name: "CK OG Straight Fit Pant",
  //   brand: "Calvin Klein",
  //   gender: "Male",
  //   category: "Bottoms",
  //   subCategory: "Trousers",
  //   price: 12000, // Revenue 24000 / Qty 2
  //   description: "Calvin Klein OG Straight Fit Pant — classic straight-fit trousers from CK.",
  //   colors: ["Black", "Light Khaki"],
  //   sizes: [
  //     { size: "32/32", color: "Black", stock: 1 },
  //     { size: "32/32", color: "Light Khaki", stock: 1 }
  //   ],
  //   badge: "Original",
  //   images: ["images/products/P080/1.jpg", "images/products/P080/2.jpg", "images/products/P080/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P081 - Superdry Biker Jacket
  // // ============================================================
  // {
  //   id: "P081",
  //   name: "Superdry Biker Jacket",
  //   brand: "Superdry",
  //   gender: "Male",
  //   category: "Outerwear",
  //   subCategory: "Jackets",
  //   price: 3300, // Revenue 3300 / Qty 1
  //   description: "Superdry Biker Jacket — classic biker jacket from Superdry.",
  //   colors: ["Army Green"],
  //   sizes: [
  //     { size: "S", color: "Army Green", stock: 1 }
  //   ],
  //   badge: "",
  //   images: ["images/products/P081/1.jpg", "images/products/P081/2.jpg", "images/products/P081/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P082 - Lacoste OG Boxer Briefs
  // // ============================================================
  // {
  //   id: "P082",
  //   name: "Lacoste OG Boxer Briefs",
  //   brand: "Lacoste",
  //   gender: "Male",
  //   category: "Accessories",
  //   subCategory: "Boxers",
  //   price: 2500, // Revenue 2500 / Qty 1
  //   description: "Lacoste OG Boxer Briefs — premium boxer briefs from Lacoste.",
  //   colors: ["Unknown"],
  //   sizes: [
  //     { size: "M", color: "Unknown", stock: 1 }
  //   ],
  //   badge: "Original",
  //   images: ["images/products/P082/1.jpg", "images/products/P082/2.jpg", "images/products/P082/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P083 - Castore Quarter Zip Long Sleeve Performance Tee
  // // ============================================================
  // {
  //   id: "P083",
  //   name: "Castore Quarter Zip Long Sleeve Performance Tee",
  //   brand: "Castore",
  //   gender: "Male",
  //   category: "Tops",
  //   subCategory: "T-Shirts",
  //   price: 2300, // Revenue 2300 / Qty 1
  //   description: "Castore Quarter Zip Long Sleeve Performance Tee — high-performance training tee.",
  //   colors: ["Unknown"],
  //   sizes: [
  //     { size: "L", color: "Unknown", stock: 1 }
  //   ],
  //   badge: "",
  //   images: ["images/products/P083/1.jpg", "images/products/P083/2.jpg", "images/products/P083/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P084 - Pierre Cardin Pant
  // // ============================================================
  // {
  //   id: "P084",
  //   name: "Pierre Cardin Pant",
  //   brand: "Pierre Cardin",
  //   gender: "Male",
  //   category: "Bottoms",
  //   subCategory: "Trousers",
  //   price: 3800, // Revenue 3800 / Qty 1
  //   description: "Pierre Cardin Pant — classic formal trousers from Pierre Cardin.",
  //   colors: ["Navy"],
  //   sizes: [
  //     { size: "33/32", color: "Navy", stock: 1 }
  //   ],
  //   badge: "",
  //   images: ["images/products/P084/1.jpg", "images/products/P084/2.jpg", "images/products/P084/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P085 - Nike Sports Bra
  // // ============================================================
  // {
  //   id: "P085",
  //   name: "Nike Sports Bra",
  //   brand: "Nike",
  //   gender: "Female",
  //   category: "Activewear",
  //   subCategory: "Activewear",
  //   price: 7500, // Revenue 37500 / Qty 5
  //   description: "Nike Sports Bra — high-support sports bra from Nike.",
  //   colors: ["White", "Black", "Gray"],
  //   sizes: [
  //     { size: "XS", color: "White", stock: 1 },
  //     { size: "S", color: "White", stock: 2 },
  //     { size: "M", color: "Black", stock: 1 },
  //     { size: "M", color: "Gray", stock: 1 }
  //   ],
  //   badge: "Original",
  //   images: ["images/products/P085/1.jpg", "images/products/P085/2.jpg", "images/products/P085/3.jpg"],
  //   inStock: true
  // },



  {
    id: "MM001",
    name: "BR Business Casual Pants — Navy",
    gender: "Male",
    category: "Bottoms",
    subCategory: "Trousers",
    price: 5250,
    description: "Premium fabric with a tailored fit. Perfect for office wear and formal occasions.",
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
    name: "BR Business Casual Pants — Olive",
    gender: "Male",
    category: "Bottoms",
    subCategory: "Trousers",
    price: 5250,
    description: "Premium fabric with a tailored fit. Perfect for office wear and formal occasions.",
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
    name: "BR Business Casual Pants — Brown",
    gender: "Male",
    category: "Bottoms",
    subCategory: "Trousers",
    price: 5250,
    description: "Premium fabric with a tailored fit. Perfect for office wear and formal occasions.",
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
    badge: "Factory Outlet",
    images: [
      "images/products/MM003/1.jpg",
      "images/products/MM003/2.jpg",
      "images/products/MM003/3.jpg"
    ]
  },

  {
    id: "MM004",
    name: "BR Business Casual Pants — Black",
    gender: "Male",
    category: "Bottoms",
    subCategory: "Trousers",
    price: 5250,
    description: "Premium fabric with a tailored fit. Perfect for office wear and formal occasions.",
    colors: ["Black"],
    sizes: [
      { size: "30/30", stock: 1 },
      { size: "36/30", stock: 1 },
      { size: "38/30", stock: 1 },
      { size: "36/34", stock: 1 }
    ],
    badge: "Factory Outlet",
    images: [
      "images/products/MM004/1.jpg",
      "images/products/MM004/2.jpg",
      "images/products/MM004/3.jpg"
    ]
  },


  //   // ============================================================
  // // P050 - GP-Baggy Fit Pant-OG
  // // ============================================================
  // {
  //   id: "P050",
  //   name: "GP-Baggy Fit Pant-OG",
  //   brand: "GAP",
  //   gender: "Male",
  //   category: "Bottoms",
  //   subCategory: "Trousers",
  //   price: 4990, // Revenue 5990 / Qty 1
  //   description: "GAP Baggy Fit Pant — relaxed baggy-fit trousers from GAP.",
  //   colors: ["Green Khaki"],
  //   sizes: [{ size: "32/32", color: "Green Khaki", stock: 1 }],
  //   badge: "Original",
  //   images: ["images/products/P050/1.jpg", "images/products/P050/2.jpg", "images/products/P050/3.jpg"],
  //   inStock: true
  // },

  // // ============================================================
  // // P045 - GT-Regular Fit Denim-OG
  // // ============================================================
  // {
  //   id: "P045",
  //   name: "GT-Regular Fit Denim-OG",
  //   brand: "Gant",
  //   gender: "Male",
  //   category: "Bottoms",
  //   subCategory: "Jeans",
  //   price: 9200, // Revenue 7000 / Qty 1
  //   description: "Gant Regular Fit Denim — premium denim from Gant with classic fit.",
  //   colors: ["Blue"],
  //   sizes: [{ size: "32/32", color: "Blue", stock: 1 }],
  //   badge: "Original",
  //   images: ["images/products/P045/1.jpg", "images/products/P045/2.jpg", "images/products/P045/3.jpg"],
  //   inStock: true
  // },



  // // ============================================================
  // // P086 - Uniqlo Pea Coat
  // // ============================================================
  // {
  //   id: "P086",
  //   name: "Uniqlo Pea Coat",
  //   brand: "Uniqlo",
  //   gender: "Male",
  //   category: "Jackets",
  //   subCategory: "Coats",
  //   price: 9990, // Revenue 9990 / Qty 1
  //   description: "Uniqlo Pea Coat — classic pea coat from Uniqlo. Warm and stylish.",
  //   colors: ["Black"],
  //   sizes: [
  //     { size: "L", color: "Black", stock: 1 }
  //   ],
  //   badge: "",
  //   images: ["images/products/P086/1.jpg", "images/products/P086/2.jpg", "images/products/P086/3.jpg"],
  //   inStock: true
  // },


  // // ============================================================
  // // P044 - GP-Straight Drop Pant-FO
  // // ============================================================
  // {
  //   id: "P044",
  //   name: "GP-Straight Drop Pant-FO",
  //   brand: "GAP",
  //   gender: "Male",
  //   category: "Bottoms",
  //   subCategory: "Trousers",
  //   price: 4950, // Revenue 4950 / Qty 1
  //   description: "GAP Straight Drop Pant — classic straight-leg trousers from GAP.",
  //   colors: ["White"],
  //   sizes: [{ size: "31/32", color: "White", stock: 1 }],
  //   badge: "Factory Outlet",
  //   images: ["images/products/P044/1.jpg", "images/products/P044/2.jpg", "images/products/P044/3.jpg"],
  //   inStock: true
  // },


];