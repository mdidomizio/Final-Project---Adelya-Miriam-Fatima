import { useState, useEffect } from "react";
// import SeasonBtn from "./SeasonBtn";
import Reciepes from "./Reciepes";
// import Outfit from "./Outfit";
// import Error from "./Error";

const Container = () => {
  const [recipes, setRecipes] = useState([]);
  // const [deleteMessage, setDeleteMessage] = useState(false);
  // const [outfit, setOutfit] = useState([]);
  // const [seasonWardrobe, setSeasonWardrobe] = useState([]);
  // const [error, setError] = useState(false);

  const fetchRecipes = async () => {
    try {
      let path = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`;
      let response = await fetch(path);
      let data = await response.json();
      console.log(data);
      let MealName = data.meals[0].strMeal;
      let MealPic = data.meals[0].strMealThumb;
      let MealTag = data.meals[0].strTags;
      let MealOrigin = data.meals[0].strArea;
      let Instructions = data.meals[0].strInstructions;
      let ingredients = [];
      let measurements = [];
      console.log("data.meal", data.meals);

      const objectKeys = Object.keys(data.meals[0]);
      console.log(objectKeys);
      objectKeys.forEach((key) => {
        if (key.startsWith("strIngredient")) {
          ingredients.push(data.meals[0][key]);
        } else if (key.startsWith("strMeasure")) {
          measurements.push(data.meals[0][key]);
        }
      });

      ingredients = ingredients
        .filter((ingredient) => ingredient !== "")
        .filter((measurement) => measurement !== null);

      let combinedIngredients = [];
      for (let i = 0; i < ingredients.length; i++) {
        combinedIngredients.push([ingredients[i], measurements[i]]);
      }
      console.log("combinedIngredients", combinedIngredients);

      // setRecipes({});
      // console.log("my Recipes object", setRecipes);
    } catch (error) {
      console.log("there is an error", error);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, []);

  return <Reciepes recipes={recipes} />;
};
export default Container;
