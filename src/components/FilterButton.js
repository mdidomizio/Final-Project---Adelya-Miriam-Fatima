import Dropdown from "react-bootstrap/Dropdown";

const FilterButton = (props) => {
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
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default FilterButton;
