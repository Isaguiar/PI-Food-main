const recipeList =[
  {
    title: 'Cauliflower, Brown Rice, and Vegetable Fried Rice',
    id: 716426,
    score: 100,
    healthScore: 76,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/716426-312x231.jpg'
  },
  {
    title: 'Homemade Garlic and Basil French Fries',
    id: 715594,
    score: 99,
    healthScore: 78,
    diets: [ 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715594-312x231.jpg'
  },
  {
    title: 'Berry Banana Breakfast Smoothie',
    id: 715497,
    score: 99,
    healthScore: 63,
    diets: [ 'lacto ovo vegetarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715497-312x231.jpg'
  },
  {
    title: 'Garlicky Kale',
    id: 644387,
    score: 99,
    healthScore: 93,
    diets: [
      'gluten free',
      'dairy free',
      'paleolithic',
      'lacto ovo vegetarian',
      'primal',
      'vegan'
    ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/644387-312x231.jpg'
  },
  {
    title: 'Chicken Tortilla Soup (Slow Cooker)',
    id: 715392,
    score: 99,
    healthScore: 73,
    diets: [ 'gluten free', 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715392-312x231.jpg'
  },
  {
    title: 'African Chicken Peanut Stew',
    id: 716268,
    score: 99,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/716268-312x231.jpg'
  },
  {
    title: 'Nigerian Snail Stew',
    id: 716381,
    score: 99,
    healthScore: 89,
    diets: [ 'gluten free', 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/716381-312x231.jpg'
  },
  {
    title: 'Red Kidney Bean Jambalaya',
    id: 782601,
    score: 99,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/782601-312x231.jpg'
  },
  {
    title: 'Broccoli and Chickpea Rice Salad',
    id: 794349,
    score: 99,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/794349-312x231.jpg'
  },
  {
    title: 'Slow Cooker Beef Stew',
    id: 715446,
    score: 99,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715446-312x231.jpg'
  },
  {
    title: 'Red Lentil Soup with Chicken and Turnips',
    id: 715415,
    score: 99,
    healthScore: 73,
    diets: [ 'gluten free', 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715415-312x231.jpg'
  },
  {
    title: "Hummus and Za'atar",
    id: 766453,
    score: 98,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/766453-312x231.jpg'
  },
  {
    title: 'Easy Homemade Rice and Beans',
    id: 716627,
    score: 98,
    healthScore: 61,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/716627-312x231.jpg'
  },
  {
    title: 'Greek-Style Baked Fish: Fresh, Simple, and Delicious',
    id: 716408,
    score: 98,
    healthScore: 66,
    diets: [ 'gluten free', 'pescatarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/716408-312x231.jpg'
  },
  {
    title: 'Chicken Fajita Stuffed Bell Pepper',
    id: 795751,
    score: 98,
    healthScore: 75,
    diets: [ 'gluten free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/795751-312x231.jpg'
  },
  {
    title: 'Crunchy Brussels Sprouts Side Dish',
    id: 640941,
    score: 98,
    healthScore: 100,
    diets: [
      'gluten free',
      'dairy free',
      'paleolithic',
      'lacto ovo vegetarian',
      'primal'
    ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/640941-312x231.jpg'
  },
  {
    title: 'Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant',
    id: 798400,
    score: 98,
    healthScore: 87,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/798400-312x231.jpg'
  },
  {
    title: 'Powerhouse Almond Matcha Superfood Smoothie',
    id: 756814,
    score: 98,
    healthScore: 55,
    diets: [ 'gluten free', 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/756814-312x231.jpg'
  },
  {
    title: 'Plantain Salad',
    id: 729366,
    score: 98,
    healthScore: 73,
    diets: [ 'gluten free', 'primal', 'pescatarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/729366-312x231.jpg'
  },
  {
    title: 'Broccolini Quinoa Pilaf',
    id: 715769,
    score: 98,
    healthScore: 75,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715769-312x231.jpg'
  },
  {
    title: 'Quinoa Salad with Vegetables and Cashews',
    id: 782600,
    score: 98,
    healthScore: 66,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/782600-312x231.jpg'
  },
  {
    title: 'Farro With Mushrooms and Asparagus',
    id: 642605,

    score: 97,
    healthScore: 81,
    diets: [ 'dairy free', 'lacto ovo vegetarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/642605-312x231.jpg'
  },
  {
    title: 'Summer Berry Salad',
    id: 715540,
    score: 97,
    healthScore: 96,
    diets: [
      'gluten free',
      'dairy free',
      'paleolithic',
      'lacto ovo vegetarian',
      'primal',
      'vegan'
    ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715540-312x231.jpg'
  },
  {
    title: 'Butternut Squash Frittata',
    id: 636589,
    score: 97,
    healthScore: 100,
    diets: [ 'gluten free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/636589-312x231.jpg'
  },
  {
    title: 'Corn Avocado Salsa',
    id: 640062,
    score: 97,
    healthScore: 71,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/640062-312x231.jpg'
  },
  {
    title: 'Turkey Tomato Cheese Pizza',
    id: 715495,
    score: 97,
    healthScore: 33,
    diets: [],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715495-312x231.jpg'
  },
  {
    title: 'Cheesy Chicken Enchilada Quinoa Casserole',
    id: 715421,
    score: 97,
    healthScore: 38,
    diets: [ 'gluten free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715421-312x231.jpg'
  },
  {
    title: 'Finger Foods: Frittata Muffins #incredibleEGG',
    id: 716432,
    score: 97,
    healthScore: 49,
    diets: [ 'gluten free', 'lacto ovo vegetarian', 'primal' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/716432-312x231.jpg'
  },
  {
    title: 'Chilled Cucumber Avocado Soup with Yogurt and Kefir',
    id: 716437,
    score: 97,
    healthScore: 55,
    diets: [ 'gluten free', 'lacto ovo vegetarian', 'primal' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/716437-312x231.jpg'
  },
  {
    title: 'Citrusy Pecan Garbanzo Couscous: A Salad For Cold Weather',
    id: 639535,
    score: 97,
    healthScore: 73,
    diets: [ 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/639535-312x231.jpg'
  },
  {
    title: 'Moroccan chickpea and lentil stew',
    id: 652417,
    score: 97,
    healthScore: 96,
    diets: [ 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/652417-312x231.jpg'
  },
  {
    title: 'Almond Joy Protein Shake',
    id: 794538,
    score: 97,
    healthScore: 79,
    diets: [ 'gluten free', 'dairy free', 'fodmap friendly' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/794538-312x231.jpg'
  },
  {
    title: 'Jade Buddha Salmon Tartare',
    id: 648320,
    score: 97,
    healthScore: 100,
    diets: [
      'gluten free',
      'dairy free',
      'paleolithic',
      'primal',
      'pescatarian'
    ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/648320-312x231.jpg'
  },
  {
    title: 'Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO)',
    id: 769774,
    score: 97,
    healthScore: 89,
    diets: [
      'gluten free',
      'dairy free',
      'paleolithic',
      'primal',
      'whole 30'
    ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/769774-312x231.jpg'
  },
  {
    title: 'Lentil Salad With Vegetables',
    id: 649931,
    score: 97,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/649931-312x231.jpg'
  },
  {
    title: 'Strawberry-Mango Quinoa Salad',
    id: 661925,
    score: 97,
    healthScore: 65,
    diets: [ 'gluten free', 'lacto ovo vegetarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/661925-312x231.jpg'
  },
  {
    title: 'Skinny Kale Basil Pesto',
    id: 660228,
    score: 97,
    healthScore: 89,
    diets: [ 'gluten free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/660228-312x231.jpg'
  },
  {
    title: 'Easy Vegetable Beef Soup',
    id: 715447,
    score: 96,
    healthScore: 66,
    diets: [ 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715447-312x231.jpg'
  },
  {
    title: 'Homemade Guacamole',
    id: 715543,
    score: 96,
    healthScore: 35,
    diets: [
      'gluten free',
      'dairy free',
      'paleolithic',
      'lacto ovo vegetarian',
      'primal',
      'vegan'
    ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715543-312x231.jpg'
  },
  {
    title: 'Easy Ginger Beef Broccoli',
    id: 641975,
    score: 96,
    healthScore: 71,
    diets: [ 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/641975-312x231.jpg'
  },
  {
    title: 'Moroccan Couscous and Chickpea Salad',
    id: 652423,
    score: 96,
    healthScore: 56,
    diets: [ 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/652423-312x231.jpg'
  },
  {
    title: 'Slow Cooker: Pork and Garbanzo Beans',
    id: 660306,
    score: 96,
    healthScore: 76,
    diets: [ 'gluten free', 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/660306-312x231.jpg'
  },
  {
    title: 'The Best Chili',
    id: 715424,
    score: 96,
    healthScore: 34,
    diets: [ 'gluten free', 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715424-312x231.jpg'
  },
  {
    title: 'Swiss Chard Wraps',
    id: 662670,
    score: 96,
    healthScore: 90,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/662670-312x231.jpg'
  },
  {
    title: 'Spicy Indian-Style Hummus',
    id: 716195,
    score: 96,
    healthScore: 40,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/716195-312x231.jpg'
  },
  {
    title: 'Tomato and lentil soup',
    id: 663559,
    score: 96,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/663559-312x231.jpg'
  },
  {
    title: 'Balsamic Roasted Vegetables',
    id: 633942,
    score: 96,
    healthScore: 62,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/633942-312x231.jpg'
  },
  {
    title: 'Turkey Avocado BLT Salad',
    id: 715521,
    score: 96,
    healthScore: 33,
    diets: [ 'gluten free', 'dairy free', 'paleolithic', 'primal' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715521-312x231.jpg'
  },
  {
    title: 'Doughnuts',
    id: 716276,
    score: 96,
    healthScore: 39,
    diets: [ 'lacto ovo vegetarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/716276-312x231.jpg'
  },
  {
    title: 'Roasted Broccoli with Lemon and Garlic',
    id: 658509,
    score: 96,
    healthScore: 70,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/658509-312x231.jpg'
  },
  {
    title: 'Chocolate Peanut Butter Cinnamon Smoothie',
    id: 782622,
    score: 96,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'fodmap friendly' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/782622-312x231.png'
  },
  {
    title: 'Vegetable Dip',
    id: 664547,
    score: 96,
    healthScore: 100,
    diets: [ 'gluten free', 'lacto ovo vegetarian', 'primal' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/664547-312x231.jpg'
  },
  {
    title: 'Spinach Salad with Strawberry Vinaigrette',
    id: 661340,
    score: 96,
    healthScore: 78,
    diets: [ 'gluten free', 'primal' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/661340-312x231.jpg'
  },
  {
    title: 'Slow Cooker Baked Potato Soup',
    id: 715385,
    score: 96,
    healthScore: 45,
    diets: [],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715385-312x231.jpg'
  },
  {
    title: 'Asparagus and Pea Soup: Real Convenience Food',
    id: 716406,
    score: 96,
    healthScore: 44,
    diets: [
      'gluten free',
      'dairy free',
      'paleolithic',
      'lacto ovo vegetarian',
      'primal',
      'vegan'
    ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/716406-312x231.jpg'
  },
  {
    title: 'Roasted Endive Salad With Prosciutto, Figs and Pistachios',
    id: 658579,
    score: 96,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'paleolithic', 'primal' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/658579-312x231.jpg'
  },
  {
    title: 'Snap Pea and Green Bean Salad with Arugula Pesto',
    id: 765011,
    score: 96,
    healthScore: 46,
    diets: [ 'gluten free', 'lacto ovo vegetarian', 'primal' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/765011-312x231.jpg'
  },
  {
    title: 'Indian-Style Dill and Turmeric Potato Salad',
    id: 647875,
    score: 96,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/647875-312x231.jpg'
  },
  {
    title: 'Spicy Salad with Kidney Beans, Cheddar, and Nuts',
    id: 157344,
    score: 96,
    healthScore: 75,
    diets: [ 'gluten free', 'lacto ovo vegetarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/157344-312x231.jpg'
  },
  {
    title: 'Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes',
    id: 639851,
    score: 96,
    healthScore: 81,
    diets: [ 'gluten free', 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/639851-312x231.jpg'
  },
  {
    title: 'Balsamic & Honey Glazed Salmon with Lemony Asparagus',
    id: 633921,
    score: 96,
    healthScore: 81,
    diets: [ 'gluten free', 'dairy free', 'pescatarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/633921-312x231.jpg'
  },
  {
    title: 'Smoky Black Bean Soup With Sweet Potato & Kale',
    id: 660405,
    score: 95,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/660405-312x231.jpg'
  },
  {
    title: 'Carrot and Cabbage Salad With Coriander+cumin Dry Rub',
    id: 637162,
    score: 95,
    healthScore: 100,
    diets: [
      'gluten free',
      'dairy free',
      'paleolithic',
      'lacto ovo vegetarian',
      'primal',
      'fodmap friendly',
      'vegan'
    ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/637162-312x231.jpg'
  },
  {
    title: 'Split Pea and Mushroom Soup',
    id: 716221,
    score: 95,
    healthScore: 76,
    diets: [ 'gluten free', 'primal' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/716221-312x231.jpg'
  },
  {
    title: 'Alouette® Stuffed Mushroom Caps',
    id: 632252,
    score: 95,
    healthScore: 53,
    diets: [ 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/632252-312x231.jpg'
  },
  {
    title: 'Instant Pot Quinoa Grain Bowl',
    id: 982371,
    score: 95,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/982371-312x231.jpg'
  },
  {
    title: 'Alouette Chicken Paprika',
    id: 632244,
    score: 95,
    healthScore: 56,
    diets: [ 'gluten free', 'primal' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/632244-312x231.jpg'
  },
  {
    title: 'Peanut Butter and Jelly Smoothie',
    id: 655235,
    score: 95,
    healthScore: 33,
    diets: [ 'gluten free', 'dairy free', 'fodmap friendly' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/655235-312x231.jpg'
  },
  {
    title: 'Roasted Cauliflower Detox Bowl with Tahini Sauce',
    id: 1095753,
    score: 95,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/1095753-312x231.jpg'
  },
  {
    title: 'Bacon Wrapped Pork Tenderloin',
    id: 633344,
    score: 95,
    healthScore: 51,
    diets: [ 'gluten free', 'dairy free', 'paleolithic', 'primal' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/633344-312x231.jpg'
  },
  {
    title: 'Simple Skillet Lasagna',
    id: 715573,
    score: 95,
    healthScore: 40,
    diets: [],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715573-312x231.jpg'
  },
  {
    title: 'Stir Fried Quinoa, Brown Rice and Chicken Breast',
    id: 716361,
    score: 95,
    healthScore: 57,
    diets: [ 'gluten free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/716361-312x231.jpg'
  },
  {
    title: 'Turkish Chicken Salad with Home-made Cacik Yogurt Sauce',
    id: 664090,
    score: 95,
    healthScore: 84,
    diets: [ 'gluten free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/664090-312x231.jpg'
  },
  {
    title: 'Mini Stuffed Mexican Bell Peppers',
    id: 651977,
    score: 95,
    healthScore: 92,
    diets: [ 'gluten free', 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/651977-312x231.jpg'
  },
  {
    title: 'Butternut Squash Soup (In Half An Hour!)',
    id: 636602,
    score: 95,
    healthScore: 87,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/636602-312x231.jpg'
  },
  {
    title: 'Spinach and Gorgonzola Stuffed Flank Steak',
    id: 661259,
    score: 95,
    healthScore: 82,
    diets: [],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/661259-312x231.jpg'
  },
  {
    title: 'Grilled Zucchini with Goat Cheese and Balsamic-Honey Syrup',
    id: 716423,
    score: 95,
    healthScore: 27,
    diets: [ 'gluten free', 'lacto ovo vegetarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/716423-312x231.jpg'
  },
  {
    title: 'Beans With Smoked Pork Hock',
    id: 634548,
    score: 95,
    healthScore: 81,
    diets: [ 'gluten free', 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/634548-312x231.jpg'
  },
  {
    title: 'Herb chicken with sweet potato mash and sautéed broccoli',
    id: 646651,
    score: 95,
    healthScore: 79,
    diets: [ 'gluten free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/646651-312x231.jpg'
  },
  {
    title: 'Dressed Up Kale Salad',
    id: 792072,
    score: 95,
    healthScore: 45,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/792072-312x231.jpg'
  },
  {
    title: 'Amaranth and Roast Veggie Salad',
    id: 632269,
    score: 95,
    healthScore: 88,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/632269-312x231.jpg'
  },
  {
    title: 'Salmon, Watercress, Fennel and Baby Beetroot Salad With Lemony "Caviar" Dressing',
    id: 659143,
    score: 95,
    healthScore: 100,
    diets: [
      'gluten free',
      'dairy free',
      'paleolithic',
      'primal',
      'pescatarian'
    ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/659143-312x231.jpg'
  },
  {
    title: 'Filet Mignon Soft Tacos',
    id: 715533,
    score: 95,
    healthScore: 36,
    diets: [ 'gluten free', 'pescatarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715533-312x231.jpg'
  },
  {
    title: 'Stuffed Artichoke Main Dish',
    id: 640921,
    score: 95,
    healthScore: 78,
    diets: [ 'gluten free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/640921-312x231.jpg'
  },
  {
    title: 'Cilantro Lime Halibut',
    id: 639411,
    score: 95,
    healthScore: 67,
    diets: [
      'gluten free',
      'dairy free',
      'paleolithic',
      'primal',
      'pescatarian'
    ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/639411-312x231.jpg'
  },
  {
    title: 'Gujarati Dry Mung Bean Curry',
    id: 646043,
    score: 94,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/646043-312x231.jpg'
  },
  {
    title: 'Instant Pot Chicken Taco Soup',
    id: 975070,
    score: 94,
    healthScore: 84,
    diets: [ 'gluten free', 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/975070-312x231.jpg'
  },
  {
    title: 'Butternut Squash, Arugula and Goat Cheese Quinoa',
    id: 636608,
    score: 94,
    healthScore: 100,
    diets: [ 'gluten free', 'lacto ovo vegetarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/636608-312x231.jpg'
  },
  {
    title: 'Slow Cooker Chicken Taco Soup',
    id: 715391,
    score: 94,
    healthScore: 28,
    diets: [ 'gluten free', 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/715391-312x231.jpg'
  },
  {
    title: 'Chicken and Mango Skewer',
    id: 716330,
    score: 94,
    healthScore: 62,
    diets: [ 'gluten free', 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/716330-312x231.jpg'
  },
  {
    title: 'Broccoli with cheese soup',
    id: 636230,
    score: 94,
    healthScore: 53,
    diets: [ 'lacto ovo vegetarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/636230-312x231.jpg'
  },
  {
    title: 'Moosewood Lentil Soup',
    id: 652393,
    score: 94,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/652393-312x231.jpg'
  },
  {
    title: 'Corn-Crusted Fish Tacos With Jalapeno-Lime Sauce and Spicy Black Beans',
    id: 640117,
    score: 94,
    healthScore: 73,
    diets: [ 'gluten free', 'pescatarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/640117-312x231.jpg'
  },
  {
    title: 'Gluten Free Dairy Free Sugar Free Chinese Chicken Salad',
    id: 644826,
    score: 94,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/644826-312x231.jpg'
  },
  {
    title: 'Easy Roasted Vegetables',
    id: 642085,
    score: 94,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/642085-312x231.jpg'
  },
  {
    title: 'Tempered Spicy Potatoes',
    id: 662968,
    score: 94,
    healthScore: 94,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/662968-312x231.jpg'
  },
  {
    title: 'Salmon Quinoa Risotto',
    id: 659109,
    score: 94,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'pescatarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/659109-312x231.jpg'
  },
  {
    title: "Herbivoracious' White Bean and Kale Soup",
    id: 646738,
    score: 94,
    healthScore: 72,
    diets: [ 'gluten free' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/646738-312x231.jpg'
  },
  {
    title: 'Baby Beet Salad',
    id: 633221,
    score: 94,
    healthScore: 63,
    diets: [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/633221-312x231.jpg'
  },
  {
    title: 'Salmon with roasted vegetables',
    id: 659135,
    score: 94,
    healthScore: 100,
    diets: [ 'gluten free', 'dairy free', 'pescatarian' ],
    origin: 'api',
    image: 'https://spoonacular.com/recipeImages/659135-312x231.jpg'
  } 
]

module.exports = recipeList;