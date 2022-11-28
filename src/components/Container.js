import { useState, useEffect } from 'react';
import Recipes from './Recipes.js';
import FilterButton from './FilterButton.js';
import { Button } from 'react-bootstrap';

const Container = (props) => {
  const [countryFilter, setCountryFilter] = useState([]);
  const [mealTypeFilter, setMealTypeFilter] = useState([]);
  const [error, setError] = useState(null);
  const [messageUpload, setMessageUpload] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const fetchRecipes = async () => {
    try {
      let path = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`;
      let response = await fetch(path, { mode: 'cors' });
      let data = await response.json();
      console.log(data);

      setRecipes(data.meals);
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
        alert('Item  saved to my recipes!');
        setMessageUpload(response.statusText);
      } else {
        let error = new Error(`${response.statusText}: ${response.url}`);
        error.status = response.status;
        alert('Item could not be saved to my recipes, login required!');
        throw error;
      }
    } catch (error) {
      console.log('There was an error when updating data', error);
      setError(error.message);
    }
  };

  const searchItems = () => {
    if (searchInput !== '') {
      const filteredData = recipes.filter((recipe) => {
        return Object.values(recipe)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      console.log(filteredData);
      setSearchResult(filteredData);
    } else {
      setSearchResult(recipes);
    }
  };

  return (
    <>
      <div className="d-flex flex-row-reverse me-5 bd-highlight">
        <nav className="navbar bg-light">
          <div className="container-fluid me-5">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search-form"
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Button
                onClick={(event) => {
                  event.preventDefault();
                  console.log('button works');
                  searchItems();
                }}
                style={{ backgroundColor: '#94340c', color: '#FFF' }}
                className="btn btn-light"
                btn-ligh
                type="submit"
              >
                Search
              </Button>
            </form>
          </div>
        </nav>
      </div>
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
          searchResult.length > 0
            ? searchResult
            : mealTypeFilter.length > 0
            ? mealTypeFilter
            : countryFilter.length > 0
            ? countryFilter
            : recipes
        }
        addToFavorite={addToFavorite}
      />
    </>
  );
};
export default Container;
