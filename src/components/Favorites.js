import FavoriteCards from "./FavoriteCards";
import { useState, useEffect } from "react";

const Favorites = (props) => {
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    try {
      let tokenJson = localStorage.getItem("token");
      let JWT_TOKEN = JSON.parse(tokenJson);
      let path = `${process.env.REACT_APP_RECIPES_API}/favorites`;
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

        setFavorites(dataToStore);
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

  const removeFromFavorite = async (event) => {
    try {
      let tokenJson = localStorage.getItem("token");
      let JWT_TOKEN = JSON.parse(tokenJson);
      let id = event.target.id;
      let path = `${process.env.REACT_APP_RECIPES_API}/favorites/${id}`;
      let responseDelete = await fetch(path, {
        method: "DELETE",
        mode: "cors",
        headers: { Authorization: `Bearer ${JWT_TOKEN}` },
      });
      console.log(responseDelete);
      if (responseDelete.status === 200) {
        console.log("Item is deleted");

        let restItemstoDisplay = favorites.filter((item) => item.idmeal !== id);
        console.log(restItemstoDisplay);
        setFavorites(restItemstoDisplay);
      } else {
        throw new Error(`Sorry, could not delete any data`);
      }
    } catch (error) {
      console.log("Something went wrong deleting data", error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div className="Favorites">
      <div className="d-flex flex-wrap justify-content-center">
        {favorites.length > 0 ? (
          favorites.map((element, index) => {
            return (
              <div>
                <FavoriteCards
                  key={index}
                  item={element}
                  removeFromFavorite={removeFromFavorite}
                />
              </div>
            );
          })
        ) : (
          <h3> Save your favorite recipes here or create your own </h3>
        )}
      </div>
    </div>
  );
};
export default Favorites;
