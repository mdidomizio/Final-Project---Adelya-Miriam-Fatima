import { useState, useEffect } from 'react';
import Recipes from './Recipes.js';
import FilterButton from './FilterButton.js';

const Container = () => {
  const [recipes, setRecipes] = useState([]);
  const [countryFilter, setCountryFilter] = useState([]);
  const [mealTypeFilter, setMealTypeFilter] = useState([]);
  // const [deleteMessage, setDeleteMessage] = useState(false);

  const fetchRecipes = async () => {
    try {
      let path = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`;
      let response = await fetch(path, { mode: 'cors' });
      let data = await response.json();
      console.log(data);

      setRecipes(data.meals);
      // console.log("my Recipes object", setRecipes);
    } catch (error) {
      console.log('there is an error', error);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, []);

  // filters:
  const countriesCuisine = [
    'American',
    'British',
    'Canadian',
    'Chinese',
    'Croatian',
    'Dutch',
    'French',
    'Indian',
    'Irish',
    'Italian',
    'Jamaican',
    'Malaysian',
    'Mexican',
    'Polish',
    'Russian',
    'Vietnamese',
  ];

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
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Miscellaneous',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegetarian',
  ];

  const displayMealType = (event) => {
    let mealTypeFilter = recipes.filter(
      (recipe) => recipe.strCategory === event.target.id
    );
    console.log('meal type filter', mealTypeFilter);
    setMealTypeFilter(mealTypeFilter);
  };
  const resetMealType = () => {
    setMealTypeFilter([]);
  };

  const [error, setError] = useState(null);
  const [messageUpload, setMessageUpload] = useState(false);

  const addToFavorite = async (IdAddedItem) => {
    let userid = localStorage.getItem('userId');
    let userIdClean = userid.replaceAll('"', '');
    console.log('userId: ' + userIdClean);
    let itemsToPasstoFavorite = recipes.filter(
      (item) => item.idMeal === IdAddedItem
    )[0];
    let itemWithId = { ...itemsToPasstoFavorite, userid: userIdClean };
    console.log(itemWithId);

    // get access to token in local storage:
    let tokenFromLS = localStorage.getItem('token');
    let JWT_TOKEN = JSON.parse(tokenFromLS);
    let path = `${process.env.REACT_APP_RECIPES_API}/favorites`;
    try {
      let response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
        body: JSON.stringify(itemWithId),
      });
      console.log('response from fetch', response);
      if (response.status === 200) {
        alert('Item  saved to favorites,');
        setMessageUpload(response.statusText);
      } else {
        let error = new Error(`${response.statusText}: ${response.url}`);
        error.status = response.status;
        alert('Item could not be saved to favorites, login required!');
        throw error;
      }
    } catch (error) {
      console.log('There was an error when updating data', error);
      setError(error.message);
    }
  };

  return (
    <>
      <FilterButton
        countriesCuisine={countriesCuisine}
        displayCountryCuisine={displayCountryCuisine}
        resetCountryCuisine={resetCountryCuisine}
        mealTypeArray={mealTypeArray}
        displayMealType={displayMealType}
        resetMealType={resetMealType}
      />
      <Recipes
        recipes={
          (countryFilter.length > 0 ? countryFilter : recipes) &&
          mealTypeFilter.length > 0
            ? mealTypeFilter
            : recipes
        }
        addToFavorite={addToFavorite}
      />
    </>
  );
};
export default Container;
