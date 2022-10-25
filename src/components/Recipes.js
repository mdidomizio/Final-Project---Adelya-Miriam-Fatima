import RecipesCards from "./RecipesCards";
import FilterButton from "./FilterButton";

const Recipes = (props) => {
  return (
    <>
      <FilterButton />
      <div className="Recipes d-flex flex-wrap justify-content-center">
        {props.recipes.map((element, index) => {
          return <RecipesCards key={index} recipes={element} />;
        })}
      </div>
    </>
  );
};

export default Recipes;
