import starters from "@/assets/starters.jpg";
import soups from "@/assets/soups.jpg";
import mainCourse from "@/assets/main-course.jpg";
import breads from "@/assets/breads.jpg";
import biryani from "@/assets/biryani.jpg";
import chinese from "@/assets/chinese.jpg";
import desserts from "@/assets/desserts.jpg";
import beverages from "@/assets/beverages.jpg";

export type MenuItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  ingredients: string;
  image: string;
  type: "veg" | "nonveg";
  spicy?: boolean;
  bestseller?: boolean;
  spiceLevel: "Mild" | "Medium" | "Hot";
};

export const categories = [
  "All",
  "Starters",
  "Soups",
  "Main Course",
  "Breads",
  "Rice & Biryani",
  "Chinese",
  "Desserts",
  "Beverages",
] as const;

export const restaurant = {
  name: "The Urban Plate",
  tagline: "Fresh • Local • Delicious",
  location: "12 Linden Street, Bandra West, Mumbai",
  hours: "11:30 AM – 11:30 PM",
  phone: "+91 98200 44112",
  instagram: "@theurbanplate",
};

export const menuItems: MenuItem[] = [
  // Starters
  { id: 1, name: "Paneer Tikka", category: "Starters", price: 299, description: "Char-grilled cottage cheese marinated with aromatic spices.", ingredients: "Cottage cheese, yogurt, kashmiri chilli, ginger-garlic, bell pepper", image: starters, type: "veg", spicy: true, bestseller: true, spiceLevel: "Medium" },
  { id: 2, name: "Chicken Tikka", category: "Starters", price: 349, description: "Tender chicken chunks smoked in the clay tandoor.", ingredients: "Chicken thigh, hung curd, garam masala, lemon, mustard oil", image: starters, type: "nonveg", spicy: true, bestseller: true, spiceLevel: "Hot" },
  { id: 3, name: "Veg Spring Rolls", category: "Starters", price: 229, description: "Crisp rolls stuffed with julienned garden vegetables.", ingredients: "Cabbage, carrot, spring onion, rice wrapper, soy", image: starters, type: "veg", spiceLevel: "Mild" },
  { id: 4, name: "Crispy Corn", category: "Starters", price: 249, description: "Golden fried sweet corn tossed with pepper and curry leaf.", ingredients: "Sweet corn, corn flour, curry leaf, black pepper", image: starters, type: "veg", spiceLevel: "Mild" },
  { id: 5, name: "Chicken Wings", category: "Starters", price: 329, description: "Sticky glazed wings with a slow-building chilli heat.", ingredients: "Chicken wings, honey, red chilli, garlic, sesame", image: starters, type: "nonveg", spicy: true, spiceLevel: "Hot" },

  // Soups
  { id: 6, name: "Tomato Soup", category: "Soups", price: 149, description: "Slow-simmered vine tomatoes finished with cream.", ingredients: "Tomato, basil, cream, croutons, butter", image: soups, type: "veg", spiceLevel: "Mild" },
  { id: 7, name: "Sweet Corn Soup", category: "Soups", price: 159, description: "Silky broth with tender corn kernels and herbs.", ingredients: "Sweet corn, vegetable stock, corn starch, white pepper", image: soups, type: "veg", spiceLevel: "Mild" },
  { id: 8, name: "Manchow Soup", category: "Soups", price: 179, description: "Spiced Indo-Chinese broth topped with fried noodles.", ingredients: "Mixed vegetables, soy, garlic, chilli, crispy noodles", image: soups, type: "veg", spicy: true, bestseller: true, spiceLevel: "Hot" },
  { id: 9, name: "Hot & Sour Soup", category: "Soups", price: 179, description: "Peppery, tangy and warming — a monsoon favourite.", ingredients: "Vegetables, vinegar, white pepper, soy, corn starch", image: soups, type: "veg", spicy: true, spiceLevel: "Medium" },

  // Main Course
  { id: 10, name: "Paneer Butter Masala", category: "Main Course", price: 379, description: "Cottage cheese in a velvety tomato and cashew gravy.", ingredients: "Paneer, tomato, cashew, butter, fenugreek, cream", image: mainCourse, type: "veg", bestseller: true, spiceLevel: "Mild" },
  { id: 11, name: "Kadai Paneer", category: "Main Course", price: 369, description: "Wok-tossed paneer with peppers and crushed spices.", ingredients: "Paneer, bell pepper, onion, coriander seed, dry chilli", image: mainCourse, type: "veg", spicy: true, spiceLevel: "Medium" },
  { id: 12, name: "Dal Tadka", category: "Main Course", price: 279, description: "Yellow lentils tempered with ghee, garlic and cumin.", ingredients: "Toor dal, ghee, cumin, garlic, dry chilli", image: mainCourse, type: "veg", spiceLevel: "Mild" },
  { id: 13, name: "Butter Chicken", category: "Main Course", price: 429, description: "Our signature — tandoori chicken in a silky makhani gravy.", ingredients: "Chicken, tomato, butter, cream, kasuri methi", image: mainCourse, type: "nonveg", bestseller: true, spiceLevel: "Mild" },
  { id: 14, name: "Chicken Curry", category: "Main Course", price: 399, description: "Home-style curry with onion, tomato and whole spices.", ingredients: "Chicken, onion, tomato, bay leaf, garam masala", image: mainCourse, type: "nonveg", spicy: true, spiceLevel: "Medium" },

  // Breads
  { id: 15, name: "Butter Naan", category: "Breads", price: 69, description: "Pillowy tandoor naan brushed with melted butter.", ingredients: "Refined flour, yogurt, butter, yeast", image: breads, type: "veg", spiceLevel: "Mild" },
  { id: 16, name: "Garlic Naan", category: "Breads", price: 89, description: "Naan studded with garlic and fresh coriander.", ingredients: "Refined flour, garlic, coriander, butter", image: breads, type: "veg", bestseller: true, spiceLevel: "Mild" },
  { id: 17, name: "Tandoori Roti", category: "Breads", price: 49, description: "Whole wheat flatbread straight off the clay oven wall.", ingredients: "Whole wheat flour, salt, water", image: breads, type: "veg", spiceLevel: "Mild" },
  { id: 18, name: "Laccha Paratha", category: "Breads", price: 79, description: "Flaky layered paratha with a crisp golden finish.", ingredients: "Whole wheat flour, ghee, salt", image: breads, type: "veg", spiceLevel: "Mild" },

  // Rice & Biryani
  { id: 19, name: "Veg Biryani", category: "Rice & Biryani", price: 329, description: "Dum-cooked basmati layered with garden vegetables.", ingredients: "Basmati rice, vegetables, saffron, mint, fried onion", image: biryani, type: "veg", spicy: true, spiceLevel: "Medium" },
  { id: 20, name: "Chicken Biryani", category: "Rice & Biryani", price: 399, description: "Sealed-pot biryani with saffron rice and tender chicken.", ingredients: "Basmati rice, chicken, saffron, yogurt, whole spices", image: biryani, type: "nonveg", spicy: true, bestseller: true, spiceLevel: "Hot" },
  { id: 21, name: "Mutton Biryani", category: "Rice & Biryani", price: 489, description: "Slow-cooked mutton on a bed of fragrant long-grain rice.", ingredients: "Basmati rice, mutton, saffron, fried onion, mint", image: biryani, type: "nonveg", spicy: true, spiceLevel: "Hot" },
  { id: 22, name: "Jeera Rice", category: "Rice & Biryani", price: 199, description: "Fluffy basmati tossed with roasted cumin and ghee.", ingredients: "Basmati rice, cumin, ghee, coriander", image: biryani, type: "veg", spiceLevel: "Mild" },

  // Chinese
  { id: 23, name: "Veg Hakka Noodles", category: "Chinese", price: 259, description: "Street-style noodles with crunchy stir-fried vegetables.", ingredients: "Noodles, cabbage, carrot, capsicum, soy, vinegar", image: chinese, type: "veg", spiceLevel: "Mild" },
  { id: 24, name: "Chicken Hakka Noodles", category: "Chinese", price: 309, description: "Wok-tossed noodles with shredded chicken and scallions.", ingredients: "Noodles, chicken, spring onion, soy, garlic", image: chinese, type: "nonveg", spiceLevel: "Medium" },
  { id: 25, name: "Veg Fried Rice", category: "Chinese", price: 249, description: "High-flame fried rice with crisp diced vegetables.", ingredients: "Rice, beans, carrot, capsicum, soy, pepper", image: chinese, type: "veg", spiceLevel: "Mild" },
  { id: 26, name: "Chicken Fried Rice", category: "Chinese", price: 299, description: "Smoky fried rice with juicy chicken and egg.", ingredients: "Rice, chicken, egg, spring onion, soy", image: chinese, type: "nonveg", spiceLevel: "Mild" },
  { id: 27, name: "Chilli Paneer", category: "Chinese", price: 329, description: "Crisp paneer glazed in a fiery sweet-chilli sauce.", ingredients: "Paneer, capsicum, onion, chilli sauce, soy", image: chinese, type: "veg", spicy: true, bestseller: true, spiceLevel: "Hot" },

  // Desserts
  { id: 28, name: "Gulab Jamun", category: "Desserts", price: 149, description: "Warm milk dumplings soaked in cardamom syrup.", ingredients: "Khoya, sugar syrup, cardamom, pistachio", image: desserts, type: "veg", bestseller: true, spiceLevel: "Mild" },
  { id: 29, name: "Chocolate Brownie", category: "Desserts", price: 189, description: "Fudgy brownie served warm with a molten centre.", ingredients: "Dark chocolate, butter, walnut, cocoa", image: desserts, type: "veg", spiceLevel: "Mild" },
  { id: 30, name: "Ice Cream", category: "Desserts", price: 129, description: "Two scoops — vanilla bean, alphonso or chocolate.", ingredients: "Milk, cream, sugar, natural flavour", image: desserts, type: "veg", spiceLevel: "Mild" },
  { id: 31, name: "Rasmalai", category: "Desserts", price: 169, description: "Soft cheese discs in saffron-infused thickened milk.", ingredients: "Chenna, milk, saffron, cardamom, pistachio", image: desserts, type: "veg", spiceLevel: "Mild" },

  // Beverages
  { id: 32, name: "Masala Chaas", category: "Beverages", price: 89, description: "Chilled spiced buttermilk with cumin and curry leaf.", ingredients: "Yogurt, cumin, curry leaf, black salt, coriander", image: beverages, type: "veg", spiceLevel: "Mild" },
  { id: 33, name: "Fresh Lime Soda", category: "Beverages", price: 99, description: "Sparkling lime soda — sweet, salted or mixed.", ingredients: "Lime, soda, sugar, black salt, mint", image: beverages, type: "veg", spiceLevel: "Mild" },
  { id: 34, name: "Cold Coffee", category: "Beverages", price: 159, description: "Thick blended coffee with a crown of foam.", ingredients: "Coffee, milk, sugar, ice cream", image: beverages, type: "veg", bestseller: true, spiceLevel: "Mild" },
  { id: 35, name: "Mango Lassi", category: "Beverages", price: 149, description: "Alphonso mango whipped into chilled sweet yogurt.", ingredients: "Mango, yogurt, sugar, cardamom", image: beverages, type: "veg", spiceLevel: "Mild" },
  { id: 36, name: "Mineral Water", category: "Beverages", price: 40, description: "Chilled 1 litre packaged drinking water.", ingredients: "Packaged drinking water", image: beverages, type: "veg", spiceLevel: "Mild" },
];
