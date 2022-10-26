import { useState, useEffect } from "react";
import Recipes from "./Recipes.js";
import FilterButton from "./FilterButton.js";
// import Outfit from "./Outfit";
// import Error from "./Error";

const Container = () => {
  const [recipes, setRecipes] = useState([]);
  // const [deleteMessage, setDeleteMessage] = useState(false);
  // const [outfit, setOutfit] = useState([]);

  // const [error, setError] = useState(false);

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

  const countriesCuisine = ["Canadian", "American", "French", "Italian"];
  const [countryFilter, setCountryFilter] = useState([]);

  const displayCountryCuisine = (event) => {
    let countryFilter = recipes.filter(
      (item) => item.recipes.strArea === event.target.id
    );
    setCountryFilter(countryFilter);
  };

  const resetCountryCuisine = () => {
    setCountryFilter([]);
  };

  return (
    <>
      <FilterButton
        countriesCuisine={countriesCuisine}
        displayCountryCuisine={displayCountryCuisine}
        resetCountryCuisine={resetCountryCuisine}
      />
      <Recipes recipes={countryFilter.length > 0 ? countryFilter : recipes} />
    </>
  );
};
export default Container;
