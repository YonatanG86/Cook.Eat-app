// Easy, medium, hard (levels) + add it to add recipe
// change object to arrary for steps

function ObjectID(value) {
  return value;
}

const mockRecipes = [
  {
    _id: ObjectID("MongoDB will decide"),
    id: "1",
    userId: "",
    title: "Chocolate Lava Cakes",
    description:
      "Rich and fudgy chocolate lava cakes come together with 6 simple ingredients. Ready in just 25 minutes, this easy dessert recipe always impresses. If you don’t have ramekins, follow my instructions for using a muffin pan instead.",
    cuisineType: "French",
    dietType: "None",
    preparationTime: "35",
    servings: "6",
    picture:
      "https://i.pinimg.com/originals/18/4c/10/184c10659c61ed96e4b238e89ff35918.jpg",
    ingredients: [
      {
        qty: "113",
        measurement: "g",
        ingredientName: "unsalted butter",
      },
      {
        qty: "170",
        measurement: "g",
        ingredientName: "bittersweet chocolate, preferably Valrhona",
      },
      {
        qty: "2",
        measurement: "",
        ingredientName: "eggs",
      },
      {
        qty: "2",
        measurement: "",
        ingredientName: "egg yolks",
      },
      {
        qty: "32",
        measurement: "g",
        ingredientName: "sugar",
      },
      {
        qty: "1",
        measurement: "pinch",
        ingredientName: "salt",
      },
      {
        qty: "2",
        measurement: "tbs",
        ingredientName: "all-purpose flour",
      },
    ],
    steps: [
      {
        step1:
          "Preheat the oven to 450°. Butter and lightly flour four 6-ounce ramekins. Tap out the excess flour. Set the ramekins on a baking sheet.",
        step2:
          "In a double boiler, over simmering water, melt the butter with the chocolate. In a medium bowl, beat the eggs with the egg yolks, sugar and salt at high speed until thickened and pale.",
        step3:
          "Whisk the chocolate until smooth. Quickly fold it into the egg mixture along with the flour. Spoon the batter into the prepared ramekins and bake for 12 minutes, or until the sides of the cakes are firm but the centers are soft. Let the cakes cool in the ramekins for 1 minute, then cover each with an inverted dessert plate. Carefully turn each one over, let stand for 10 seconds and then unmold. Serve immediately.",
      },
    ],
  },
  {
    _id: ObjectID("MongoDB will decide"),
    id: "1",
    userId: "",
    title: "Chocolate Lava Cakes",
    description:
      "Rich and fudgy chocolate lava cakes come together with 6 simple ingredients. Ready in just 25 minutes, this easy dessert recipe always impresses. If you don’t have ramekins, follow my instructions for using a muffin pan instead.",
    cuisineType: "French",
    dietType: "None",
    preparationTime: "35",
    servings: "6",
    picture:
      "https://i.pinimg.com/originals/18/4c/10/184c10659c61ed96e4b238e89ff35918.jpg",
    ingredients: [
      {
        qty: "113",
        measurement: "g",
        ingredientName: "unsalted butter",
      },
      {
        qty: "170",
        measurement: "g",
        ingredientName: "bittersweet chocolate, preferably Valrhona",
      },
      {
        qty: "2",
        measurement: "",
        ingredientName: "eggs",
      },
      {
        qty: "2",
        measurement: "",
        ingredientName: "egg yolks",
      },
      {
        qty: "32",
        measurement: "g",
        ingredientName: "sugar",
      },
      {
        qty: "1",
        measurement: "pinch",
        ingredientName: "salt",
      },
      {
        qty: "2",
        measurement: "tbs",
        ingredientName: "all-purpose flour",
      },
    ],
    steps: [
      {
        step1:
          "Preheat the oven to 450°. Butter and lightly flour four 6-ounce ramekins. Tap out the excess flour. Set the ramekins on a baking sheet.",
        step2:
          "In a double boiler, over simmering water, melt the butter with the chocolate. In a medium bowl, beat the eggs with the egg yolks, sugar and salt at high speed until thickened and pale.",
        step3:
          "Whisk the chocolate until smooth. Quickly fold it into the egg mixture along with the flour. Spoon the batter into the prepared ramekins and bake for 12 minutes, or until the sides of the cakes are firm but the centers are soft. Let the cakes cool in the ramekins for 1 minute, then cover each with an inverted dessert plate. Carefully turn each one over, let stand for 10 seconds and then unmold. Serve immediately.",
      },
    ],
  },
  {
    _id: ObjectID("MongoDB will decide"),
    id: "2",
    userId: "",
    title: "Chocolate Lava Cakes",
    description:
      "Rich and fudgy chocolate lava cakes come together with 6 simple ingredients. Ready in just 25 minutes, this easy dessert recipe always impresses. If you don’t have ramekins, follow my instructions for using a muffin pan instead.",
    cuisineType: "French",
    dietType: "None",
    preparationTime: "35",
    servings: "6",
    picture:
      "https://i.pinimg.com/originals/18/4c/10/184c10659c61ed96e4b238e89ff35918.jpg",
    ingredients: [
      {
        qty: "113",
        measurement: "g",
        ingredientName: "unsalted butter",
      },
      {
        qty: "170",
        measurement: "g",
        ingredientName: "bittersweet chocolate, preferably Valrhona",
      },
      {
        qty: "2",
        measurement: "",
        ingredientName: "eggs",
      },
      {
        qty: "2",
        measurement: "",
        ingredientName: "egg yolks",
      },
      {
        qty: "32",
        measurement: "g",
        ingredientName: "sugar",
      },
      {
        qty: "1",
        measurement: "pinch",
        ingredientName: "salt",
      },
      {
        qty: "2",
        measurement: "tbs",
        ingredientName: "all-purpose flour",
      },
    ],
    steps: [
      {
        step1:
          "Preheat the oven to 450°. Butter and lightly flour four 6-ounce ramekins. Tap out the excess flour. Set the ramekins on a baking sheet.",
        step2:
          "In a double boiler, over simmering water, melt the butter with the chocolate. In a medium bowl, beat the eggs with the egg yolks, sugar and salt at high speed until thickened and pale.",
        step3:
          "Whisk the chocolate until smooth. Quickly fold it into the egg mixture along with the flour. Spoon the batter into the prepared ramekins and bake for 12 minutes, or until the sides of the cakes are firm but the centers are soft. Let the cakes cool in the ramekins for 1 minute, then cover each with an inverted dessert plate. Carefully turn each one over, let stand for 10 seconds and then unmold. Serve immediately.",
      },
    ],
  },
  {
    _id: ObjectID("MongoDB will decide"),
    id: "3",
    userId: "",
    title: "Chocolate Lava Cakes",
    description:
      "Rich and fudgy chocolate lava cakes come together with 6 simple ingredients. Ready in just 25 minutes, this easy dessert recipe always impresses. If you don’t have ramekins, follow my instructions for using a muffin pan instead.",
    cuisineType: "French",
    dietType: "None",
    preparationTime: "35",
    servings: "6",
    picture:
      "https://i.pinimg.com/originals/18/4c/10/184c10659c61ed96e4b238e89ff35918.jpg",
    ingredients: [
      {
        qty: "113",
        measurement: "g",
        ingredientName: "unsalted butter",
      },
      {
        qty: "170",
        measurement: "g",
        ingredientName: "bittersweet chocolate, preferably Valrhona",
      },
      {
        qty: "2",
        measurement: "",
        ingredientName: "eggs",
      },
      {
        qty: "2",
        measurement: "",
        ingredientName: "egg yolks",
      },
      {
        qty: "32",
        measurement: "g",
        ingredientName: "sugar",
      },
      {
        qty: "1",
        measurement: "pinch",
        ingredientName: "salt",
      },
      {
        qty: "2",
        measurement: "tbs",
        ingredientName: "all-purpose flour",
      },
    ],
    steps: [
      {
        step1:
          "Preheat the oven to 450°. Butter and lightly flour four 6-ounce ramekins. Tap out the excess flour. Set the ramekins on a baking sheet.",
        step2:
          "In a double boiler, over simmering water, melt the butter with the chocolate. In a medium bowl, beat the eggs with the egg yolks, sugar and salt at high speed until thickened and pale.",
        step3:
          "Whisk the chocolate until smooth. Quickly fold it into the egg mixture along with the flour. Spoon the batter into the prepared ramekins and bake for 12 minutes, or until the sides of the cakes are firm but the centers are soft. Let the cakes cool in the ramekins for 1 minute, then cover each with an inverted dessert plate. Carefully turn each one over, let stand for 10 seconds and then unmold. Serve immediately.",
      },
    ],
  },
  {
    _id: ObjectID("MongoDB will decide"),
    id: "4",
    userId: "",
    title: "Chocolate Lava Cakes",
    description: "Rich and fudgy chocolate",
    cuisineType: "French",
    dietType: "None",
    preparationTime: "35",
    servings: "6",
    picture:
      "https://i.pinimg.com/originals/18/4c/10/184c10659c61ed96e4b238e89ff35918.jpg",
    ingredients: [
      {
        qty: "113",
        measurement: "g",
        ingredientName: "unsalted butter",
      },
      {
        qty: "170",
        measurement: "g",
        ingredientName: "bittersweet chocolate, preferably Valrhona",
      },
      {
        qty: "2",
        measurement: "",
        ingredientName: "eggs",
      },
      {
        qty: "2",
        measurement: "",
        ingredientName: "egg yolks",
      },
      {
        qty: "32",
        measurement: "g",
        ingredientName: "sugar",
      },
      {
        qty: "1",
        measurement: "pinch",
        ingredientName: "salt",
      },
      {
        qty: "2",
        measurement: "tbs",
        ingredientName: "all-purpose flour",
      },
    ],
    steps: [
      {
        step1:
          "Preheat the oven to 450°. Butter and lightly flour four 6-ounce ramekins. Tap out the excess flour. Set the ramekins on a baking sheet.",
        step2:
          "In a double boiler, over simmering water, melt the butter with the chocolate. In a medium bowl, beat the eggs with the egg yolks, sugar and salt at high speed until thickened and pale.",
        step3:
          "Whisk the chocolate until smooth. Quickly fold it into the egg mixture along with the flour. Spoon the batter into the prepared ramekins and bake for 12 minutes, or until the sides of the cakes are firm but the centers are soft. Let the cakes cool in the ramekins for 1 minute, then cover each with an inverted dessert plate. Carefully turn each one over, let stand for 10 seconds and then unmold. Serve immediately.",
      },
    ],
  },
  {
    _id: ObjectID("MongoDB will decide"),
    id: "5",
    userId: "",
    title: "Chocolate",
    description:
      "Rich and fudgy chocolate lava cakes come together with 6 simple ingredients. Ready in just 25 minutes, this easy dessert recipe always impresses. If you don’t have ramekins, follow my instructions",
    cuisineType: "",
    dietType: "",
    preparationTime: "",
    servings: "",
    picture: "",
    ingredients: [
      {
        qty: "",
        measurement: "",
        ingredientName: "",
      },
      {
        qty: "",
        measurement: "",
        ingredientName: "",
      },
      {
        qty: "",
        measurement: "",
        ingredientName: "",
      },
      {
        qty: "",
        measurement: "",
        ingredientName: "",
      },
      {
        qty: "",
        measurement: "",
        ingredientName: "",
      },
      {
        qty: "",
        measurement: "",
        ingredientName: "",
      },
      {
        qty: "",
        measurement: "",
        ingredientName: "",
      },
    ],
    steps: [
      {
        step1: "",
        step2: "",
        step3: "",
      },
    ],
  },
];

export default mockRecipes;
