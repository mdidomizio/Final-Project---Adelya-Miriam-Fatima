import FavoriteCards from "./FavoriteCards";

const Favorites = (props) => {
  return (
    <div className="Favorites">
      {props.favorite.length > 0 ? (
        <h3>My favorite recipes:</h3>
      ) : (
        <h3> Save your favorite recipes here </h3>
      )}
      <div className="d-flex flex-wrap justify-content-center">
        {props.favorite.map((element, index) => {
          return (
            <FavoriteCards
              key={index}
              item={element}
              removeFromFavorite={props.removeFromFavorite}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Favorites;
