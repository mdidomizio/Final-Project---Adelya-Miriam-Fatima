import { useState } from "react";
// import SeasonBtn from "./SeasonBtn";
import Recipes from "./Recipes";
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
    //   let city = parsedData.address;
    //   let temperature = parsedData.days[0].temp;
    //   let description = parsedData.days[0].description;
    //   description = description
    //     .split(" ")
    //     .map((word) => word.toLowerCase())
    //     .join(" ");

    //   console.log("description", description);

      // city = city.split();
      // console.log(city);

      setRecipes({  });
      console.log("my Recipes object", setRecipes);
    } catch (error) {
      console.log("there is an error", error);
    }
  };
};
