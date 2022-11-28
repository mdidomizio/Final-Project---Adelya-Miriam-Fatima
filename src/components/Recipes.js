import RecipesCards from './RecipesCards';

const Recipes = (props) => {
  return (
    <>
      <div className="Recipes d-flex flex-wrap justify-content-center">
        {props.recipes.map((element, index) => {
          return (
            <RecipesCards
              key={index}
              recipes={element}
              addToFavorite={props.addToFavorite}
            />
          );
        })}
      </div>
    </>
  );
};

export default Recipes;
