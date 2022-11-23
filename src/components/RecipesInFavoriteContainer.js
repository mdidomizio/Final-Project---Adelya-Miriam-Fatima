
import AddedByUserCards from "./AddedByUserCards.js"
const [deleteMessage, setDeleteMessage] = useState(false);
import { useState, useEffect } from "react";

const RecipesInFavoritesContainer = (props) => {
    const [error, setError] = useState(null);
    const [recipes, setRecipes] = useState([]);
    
    const fetchRecipes = async (props) => {
        try {
          let tokenJson = localStorage.getItem("token");
          let JWT_TOKEN = JSON.parse(tokenJson);
          let path = `${process.env.REACT_APP_RECIPES_API}/recipes`;
          let response = await fetch(path, {
            mode: "cors",
            headers: { Authorization: `Bearer ${JWT_TOKEN}` },
          });
          console.log(response)
          if (response.status === 200) {
            let fetchedRecipesData = await response.json();
            console.log(fetchedRecipesData);
            // let dataToStore = fetchedData.data;
            let dataToStore = fetchedRecipesData.data.map((item) => ({
              ...item,
            }));
            console.log(dataToStore);
            setRecipes(dataToStore);
            console.log(recipes);
          } else {
            // deal with error
            throw new Error(`Sorry, could not find any Recipe`);
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

      const deleteRecipeFromDb = async (event) => {
        let id = event.target.id;
        
        // get access to token in local storage:
        let tokenFromLS = localStorage.getItem('token')
        let JWT_TOKEN = JSON.parse(tokenFromLS)  
    
        try {
          let path = `${process.env.REACT_APP_RECIPES_API}/recipes/${id}`;
          let response = await fetch(path, { 
            method: "DELETE", 
            headers: {'Authorization': `Bearer ${JWT_TOKEN}`},
            mode: "cors" });
          console.log(response);
    
          if (response.status === 204) {
            console.log("Your Item has been successfully deleted");
            setDeleteMessage(true);
            let leftRecipesAfterDelete = recipes.filter((item) => {
              return item.id !== event.target.id;
            });
            setRecipes(leftRecipesAfterDelete);
          } else {
            throw new Error(`could not delete: ${id}`);
          }
        } catch (error) {
          console.log("something went wrong deleting Item", error.message);
          setError(error.message);
        }
      };

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