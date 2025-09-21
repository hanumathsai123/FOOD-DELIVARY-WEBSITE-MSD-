const PRODUCTS = [
  {
    "id": 1,
    "name": "Margherita Pizza",
    "desc": "Classic cheese & tomato",
    "price": 249,
    "img": "https://tse4.mm.bing.net/th/id/OIP.7CZKLTHlIY_3A_F9BFML9AHaHa?pid=Api&P=0&h=180",
    "tags": [
      "Veg"
    ]
  },
  {
    "id": 2,
    "name": "Paneer Butter Masala",
    "desc": "Creamy paneer with butter tomato gravy",
    "price": 199,
    "img": "https://tse1.mm.bing.net/th/id/OIP.IdGS7krtr05EMXWQmOL1kwHaKi?pid=Api&P=0&h=180",
    "tags": [
      "Veg"
    ]
  },
  {
    "id": 3,
    "name": "Chicken Biryani",
    "desc": "Fragrant basmati biryani with tender chicken",
    "price": 279,
    "img": "https://tse4.mm.bing.net/th/id/OIP.r6T2zRnyrrP8LdtOEaGVowHaGl?pid=Api&P=0&h=180",
    "tags": [
      "Non-Veg"
    ]
  },
  {
    "id": 4,
    "name": "Veg Thali",
    "desc": "Balanced thali with 4 items",
    "price": 219,
    "img": "https://tse3.mm.bing.net/th/id/OIP.XhJg-GAs7HJcCE1cmIFxOgHaEK?pid=Api&P=0&h=180",
    "tags": [
      "Veg"
    ]
  },
  {
    "id": 5,
    "name": "Egg Roll",
    "desc": "Spiced egg masala wrapped in paratha",
    "price": 99,
    "img": "https://tse3.mm.bing.net/th/id/OIP.PboGH0mYW7WMayVuzaAVWQHaLH?pid=Api&P=0&h=180",
    "tags": [
      "Non-Veg"
    ]
  },
  {
    "id": 6,
    "name": "Masala Dosa",
    "desc": "Crispy dosa with potato filling",
    "price": 129,
    "img": "https://tse2.mm.bing.net/th/id/OIP.kXS6IAFLLO0Rl1gz8Bb7dAHaE8?pid=Api&P=0&h=180",
    "tags": [
      "Veg"
    ]
  },
  {
    "id": 7,
    "name": "Schezwan Noodles",
    "desc": "Spicy Indo-Chinese noodles",
    "price": 149,
    "img": "https://tse3.mm.bing.net/th/id/OIP.43y4bDY90br41t6hyzxDYgHaJQ?pid=Api&P=0&h=180",
    "tags": [
      "Veg",
      "Spicy"
    ]
  },
  {
    "id": 8,
    "name": "Butter Chicken",
    "desc": "Creamy tomato-based curry",
    "price": 289,
    "img": "https://tse4.mm.bing.net/th/id/OIP.an7yXvK88yFqxDuycY8exgHaHb?pid=Api&P=0&h=180",
    "tags": [
      "Non-Veg"
    ]
  },
  {
    "id": 9,
    "name": "Fish Fry",
    "desc": "Crispy spiced fish",
    "price": 249,
    "img": "https://1.bp.blogspot.com/-fU_ozvGFFG0/VlKh-powozI/AAAAAAAABVc/NR5v3vEy6h0/s1600/kerala+malabar+fish+crispy+fry+masala+spicy+curry+restaurant+style+fry.jpg",
    "tags": [
      "Non-Veg"
    ]
  },
  {
    "id": 10,
    "name": "Chocolate Shake",
    "desc": "Thick and chocolaty",
    "price": 99,
    "img": "https://tse2.mm.bing.net/th/id/OIP.nluBZDxsFuXfzlAMIEBaYgHaLH?pid=Api&P=0&h=180",
    "tags": [
      "Beverage"
    ]
  },
  {
    "id": 11,
    "name": "Veg Burger",
    "desc": "Veg patty with classic toppings",
    "price": 139,
    "img": "https://tse2.mm.bing.net/th/id/OIP.xKmInOGnUTlE6bIJxmP8TgHaJ4?pid=Api&P=0&h=180",
    "tags": [
      "Veg"
    ]
  },
  {
    "id": 12,
    "name": "Grilled Sandwich",
    "desc": "Cheese and veggies",
    "price": 119,
    "img": "https://tse3.mm.bing.net/th/id/OIP._Le9Tj-pFXLkhLRLcUWCxAHaHa?pid=Api&P=0&h=180",
    "tags": [
      "Veg"
    ]
  },
  {
    "id": 13,
    "name": "Mutton Korma",
    "desc": "Rich slow-cooked korma",
    "price": 329,
    "img": "https://tse3.mm.bing.net/th/id/OIP.Eg-ETCZ4hK7FksMLrZ1xzgHaE8?pid=Api&P=0&h=180",
    "tags": [
      "Non-Veg"
    ]
  },
  {
    "id": 14,
    "name": "Pav Bhaji",
    "desc": "Mumbai style mashed veggies",
    "price": 129,
    "img": "https://tse2.mm.bing.net/th/id/OIP.Yjj0qcz1o5eh8qpHp4gcFwHaGL?pid=Api&P=0&h=180",
    "tags": [
      "Veg"
    ]
  },
  {
    "id": 15,
    "name": "Samosa (2 pcs)",
    "desc": "Crispy pastry with potato filling",
    "price": 59,
    "img": "https://tse3.mm.bing.net/th/id/OIP.WryGlzX_cpeLjpfDMzta5QHaHa?pid=Api&P=0&h=180",
    "tags": [
      "Veg"
    ]
  },
  {
    "id": 16,
    "name": "Chicken 65",
    "desc": "Crispy spicy chicken bites",
    "price": 199,
    "img": "https://tse2.mm.bing.net/th/id/OIP.a-6XO6rqtMTaFe8o6vBiQQHaHa?pid=Api&P=0&h=180",
    "tags": [
      "Non-Veg",
      "Spicy"
    ]
  },
  {
    "id": 17,
    "name": "Falooda",
    "desc": "Classic cold dessert drink",
    "price": 129,
    "img": "https://www.thedeliciouscrescent.com/wp-content/uploads/2020/02/Falooda-Recipe-3.jpg",
    "tags": [
      "Dessert"
    ]
  },
  {
    "id": 18,
    "name": "Naan (2 pcs)",
    "desc": "Soft tandoori naan",
    "price": 59,
    "img": "https://tse3.mm.bing.net/th/id/OIP.micDpvY59YcinFZ7TBiVpAAAAA?pid=Api&P=0&h=180",
    "tags": [
      "Veg"
    ]
  },
  {
    "id": 19,
    "name": "Tandoori Chicken",
    "desc": "Smoky tandoori pieces",
    "price": 319,
    "img": "https://tse2.mm.bing.net/th/id/OIP.21xfGQ9jUczQhBfBTgASHwHaEJ?pid=Api&P=0&h=180",
    "tags": [
      "Non-Veg"
    ]
  },
  {
    "id": 20,
    "name": "Masala Chai",
    "desc": "Strong Indian tea",
    "price": 39,
    "img": "https://tse4.mm.bing.net/th/id/OIP.vQ3QVYq7U3GAPc_xZmx04gHaLH?pid=Api&P=0&h=180",
    "tags": [
      "Beverage"
    ]
  },
  {
    "id": 21,
    "name": "Gulab Jamun (2 pcs)",
    "desc": "Warm syrupy dessert",
    "price": 79,
    "img": "https://tse1.mm.bing.net/th/id/OIP.jHVOWwSFJmKm4WYjoOIS0QHaFk?pid=Api&P=0&h=180",
    "tags": [
      "Dessert"
    ]
  },
  {
    "id": 22,
    "name": "Veg Fried Rice",
    "desc": "Classic vegetable fried rice",
    "price": 139,
    "img": "https://www.jessicagavin.com/wp-content/uploads/2018/09/fried-rice-7.jpg",
    "tags": [
      "Veg"
    ]
  },
  {
    "id": 23,
    "name": "Chicken Shawarma",
    "desc": "Wrapped with garlic sauce",
    "price": 199,
    "img": "https://tse2.mm.bing.net/th/id/OIP.I2Ht4MOfMr2LRRfBAAljKQHaLH?pid=Api&P=0&h=180",
    "tags": [
      "Non-Veg"
    ]
  },
  {
    "id": 24,
    "name": "Spring Rolls (4 pcs)",
    "desc": "Crispy veg spring rolls",
    "price": 119,
    "img": "https://tse2.mm.bing.net/th/id/OIP.WoOuQRXsR11VWMx-CIAZlAHaHa?pid=Api&P=0&h=180",
    "tags": [
      "Veg"
    ]
  }
];
