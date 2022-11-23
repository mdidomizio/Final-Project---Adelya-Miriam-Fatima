
import AddedByUserCards from "./AddedByUserCards.js"
import { useState, useEffect } from "react";

const RecipesInFavoritesContainer = (props) => {
    const [error, setError] = useState(null);
    const [recipes, setRecipes] = useState([]);
    
    const fetchRecipes = async () => {
        try {
          let tokenJson = localStorage.getItem("token");
          let JWT_TOKEN = JSON.parse(tokenJson);
          let path = `${process.env.REACT_APP_RECIPES_API}/recipes`;
          let response = await fetch(path, {
            mode: "cors",
            headers: { Authorization: `Bearer ${JWT_TOKEN}` },
          });
          if (response.status === 200) {
            let fetchedData = await response.json();
            // let dataToStore = fetchedData.data;
            let dataToStore = fetchedData.data.map((item) => ({
              ...item,
            }));
            console.log(dataToStore);
            setRecipes(dataToStore);
            console.log(recipes);
          } else {
            // deal with error
            throw new Error(`Sorry, could not find any data`);
            // throw new Error(`Could not find: ${response.url}`);
          }
        } catch (error) {
          console.log("Something went wrong fetching data", error.message);
          setError(error.message);
        }
      };
    
      useEffect(() => {
        fetchRecipes();
      }, []);

      //const removeRecipesFromFavorite = async (event) => {
        //   try {
        //     let id = event.target.id;
        //     let path = `${process.env.REACT_APP_RECIPES_API}/favorites/${props.mealId}`; // ? How to refer to ID? DO we need to?
        //     let responseDelete = await fetch(path, {
        //       method: "DELETE",
        //       mode: "cors",
        //     });
        //     console.log(responseDelete);
        //     if (responseDelete.status === 200) {
        //       console.log("Item is deleted");
      
        //       let restItemstoDisplay = favorites.filter((item) => item.id !== id);
        //       setFavorites(restItemstoDisplay);
        //     } else {
        //       throw new Error(`Sorry, could not delete any data`);
        //     }
        //   } catch (error) {
        //     console.log("Something went wrong deleting data", error.message);
        //     setError(error.message);
        //   }
        // };


        return (
            
            <div className="Recipes">
              <div className="d-flex flex-wrap justify-content-center">
                {recipes.length > 0 ? (
                  recipes.map((element, index) => {
                    return (
                      <div>
                        <AddedByUserCards key={index} item={element} />
                      </div>
                    );
                  })
                ) : (
                  {/* <h3> Save your favorite recipes here! </h3> */}
                )}
              </div>
            </div>
            
          );
        };

        export default RecipesInFavoritesContainer;