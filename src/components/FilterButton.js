import Dropdown from "react-bootstrap/Dropdown";

const FilterButton = (props) => {
  

  return (
    
    <div className="dropdown d-flex justify-content-center align-items-center m-2">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn m2">
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
        <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn m2">
          Meal type
        </Dropdown.Toggle>

        <Dropdown.Menu>
        {props.mealTypeArray.map((element) => (
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
