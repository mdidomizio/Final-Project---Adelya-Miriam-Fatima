import Dropdown from "react-bootstrap/Dropdown";

const FilterButton = (props) => {
  return (
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

    //       <li>
    //         <button

    //         >
    //           All
    //         </button>
    //
  );
};
export default FilterButton;
