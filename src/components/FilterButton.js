import Dropdown from "react-bootstrap/Dropdown";

const FilterButton = (props) => {
  const mealType = ["Beef", "Breakfast", "Chicken", "Dessert",  "Miscellaneous", "Pork", "Seafood", "Side", "Starter", "Vegetarian"]

  return (
    
    <div className="dropdown d-flex justify-content-center align-items-center">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Country cuisine
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {props.countriesCuisine.map((element) => (
            <Dropdown.Item
              className="dropdown-item"
              onClick={props.displayCountryCuisine}
              id={element}
              key={element}
            >
              {element}
            </Dropdown.Item>
          ))}
          <Dropdown.Item
            className="dropdown-item"
            onClick={props.resetCountryCuisine}
            id="resetEvent"
          >
            All
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Meal type
        </Dropdown.Toggle>

        <Dropdown.Menu>
        {mealType.map((element) => (
            <Dropdown.Item
              className="dropdown-item"
              onClick={props.displayMealType}
              id={element}
              key={element}
            >
              {element}
            </Dropdown.Item>
          ))}

          <Dropdown.Item
            className="dropdown-item"
            onClick={props.resetMealType}
            id="resetEvent"
          >
            All
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default FilterButton;
