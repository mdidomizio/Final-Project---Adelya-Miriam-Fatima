import { useState, useEffect } from "react";
import Recipes from "./Recipes.js";
import FilterButton from "./FilterButton.js";
import Favorites from "./Favorites.js";
import Error from "./Error";

const Container = () => {
  const [recipes, setRecipes] = useState([]);

  // const [deleteMessage, setDeleteMessage] = useState(false);

  const [error, setError] = useState(false);

  const fetchRecipes = async () => {
    try {
      let path = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`;
      let response = await fetch(path, { mode: "cors" });
      let data = await response.json();
      console.log(data);

      setRecipes(data.meals);
      // console.log("my Recipes object", setRecipes);
    } catch (error) {
      console.log("there is an error", error);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, []);

  const countriesCuisine = [
    "American",
    "British",
    "Canadian",
    "Chinese",
    "Croatian",
    "Dutch",
    "French",
    "Indian",
    "Irish",
    "Italian",
    "Jamaican",
    "Malaysian",
    "Mexican",
    "Polish",
    "Russian",
    "Vietnamese",
  ];
  const [countryFilter, setCountryFilter] = useState([]);
  const [mealTypeFilter, setMealTypeFilter] = useState([]);

  const displayCountryCuisine = (event) => {
    let countryFilter = recipes.filter(
      (recipe) => recipe.strArea === event.target.id
    );

    console.log(countryFilter);
    setCountryFilter(countryFilter);
  };

  const resetCountryCuisine = () => {
    setCountryFilter([]);
  };
  const mealTypeArray = [
    "Beef",
    "Breakfast",
    "Chicken",
    "Dessert",
    "Miscellaneous",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegetarian",
  ];

  const displayMealType = (event) => {
    let mealTypeFilter = recipes.filter(
      (recipe) => recipe.strCategory === event.target.id
    );
    console.log("meal type filter", mealTypeFilter);
    setMealTypeFilter(mealTypeFilter);
  };
  const resetMealType = () => {
    setMealTypeFilter([]);
  };
  const [favorite, setFavorite] = useState([]);
  const addToFavorite = (event) => {
    let id = event.target.id;
    let clickedItem = recipes.find((recipe) => recipe.idMeal === id);
    setFavorite([...favorite, clickedItem]);
  };
  const removeFromFavorite = (event) => {
    let updatedFavorite = favorite.filter(
      (item) => item.id !== event.target.id
    );
    setFavorite(updatedFavorite);
  };

  return (
    <>
      <Favorites favorite={favorite} removeFromFavorite={removeFromFavorite} />
      <FilterButton
        countriesCuisine={countriesCuisine}
        displayCountryCuisine={displayCountryCuisine}
        resetCountryCuisine={resetCountryCuisine}
        mealTypeArray={mealTypeArray}
        displayMealType={displayMealType}
        resetMealType={resetMealType}
      />
      <Recipes
        recipes={(countryFilter.length > 0 ? countryFilter : recipes) || (mealTypeFilter.length > 0 ? mealTypeFilter : recipes)}
        addToFavorite={addToFavorite}
      />
    </>
  );
};
export default Container;
