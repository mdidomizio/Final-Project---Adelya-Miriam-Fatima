
import AddedByUserCards from "./AddedByUserCards.js"
import { useState, useEffect } from "react";

const RecipesInFavoritesContainer = (props) => {
    const [error, setError] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [deleteMessage, setDeleteMessage] = useState(false);
    
    const fetchRecipes = async (props) => {
        try {
          let tokenJson = localStorage.getItem("token");
          let JWT_TOKEN = JSON.parse(tokenJson);
          let path = `${process.env.REACT_APP_RECIPES_API}/recipes`;
          let response = await fetch(path, {
            mode: "cors",
            headers: { Authorization: `Bearer ${JWT_TOKEN}` },
          });
          console.log("fetched data", response)
          if (response.status === 200) {
            let fetchedRecipesData = await response.json();
            console.log(fetchedRecipesData);
            // let dataToStore = fetchedData.data;
            let dataToStore = fetchedRecipesData.data.map((item) => ({
              ...item,
            }));
            console.log(dataToStore);
            setRecipes(dataToStore);
            console.log("recipes", recipes);
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

      const uploadImageToCloudinary = async (item) => {
        console.log('uplaod image start');
        // setup 
        let preset = process.env.REACT_APP_CLOUDINARY_PRESET
        let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
        let cloudPath = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
        // create body to post: 
        let dataForBody = new FormData()
        dataForBody.append('file', item.url[0])
        dataForBody.append('upload_preset', preset)
        dataForBody.append('cloud_name', cloudName)
      
        // fetch Post image to cloudinary
        try {
          let responseFromCloud = await fetch(cloudPath, {
            method: 'POST',
            body: dataForBody
          })
          let imageData = await responseFromCloud.json()
          console.log('post to cloud', imageData);
          return imageData
      
        } catch (error) {
          console.log(error);
          setError(error.message)
        }
      }
      
        const updateRecipe = async (updatedItem, id, uploadImage) => {
          let imageUrl = ''
          console.log("container updated recipe", updatedItem, uploadImage);
          // upload image to cloudinary: ONLY if the is a changed image
          if(uploadImage) {
          let resultFromImageUpload = await uploadImageToCloudinary(updatedItem)
            imageUrl = resultFromImageUpload.url
          } else {
            imageUrl = updatedItem.url
          }
      
      
          // change the state
            // add new values and url to state of the item
          
          let updatedRecipes = recipes.map((item) => {
            return item.id === id ? { ...item, ...updatedItem , url: imageUrl } : item;
          });
      
          setRecipes(updatedRecipes);
          // find the item to update in state using the id
          let updatedItemInState = updatedRecipes.find((item) => item.id === id);
          // update to db:
          
          // get access to token in local storage:
          let tokenFromLS = localStorage.getItem('token')
          let JWT_TOKEN = JSON.parse(tokenFromLS)  
      
          try {
            let path = `${process.env.REACT_APP_WARDROBE_API}/recipes/${updatedItemInState.id}`;
            let response = await fetch(path, {
              method: "PUT",
              headers: { 
                "Content-type": "application/json",
                'Authorization': `Bearer ${JWT_TOKEN}`
            },
              body: JSON.stringify(updatedItemInState),
            });
      
            if (response.status === 201) {
              alert("Your Item has been successfully updated");
            
            } else {
              let error = new Error(`${response.statusText}: ${response.url}`);
              error.status = response.status;
              throw error;
            }
          } catch (error) {
            console.log("something went wrong updating the Recipe", error.message);
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