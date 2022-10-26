const FilterButton = (props) => {
  return (
    <div
      className="filterButtons d-flex flex-row justify-content-around"
      style={{ width: "90rem" }}
    >
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Country cuisine
        </button>
        <ul className="dropdown-menu">
          <li>
            {props.countriesCuisine.map((element) => (
              <button
                className="dropdown-item"
                onClick={props.displayCountryCuisine}
                id={element}
                key={element}
              >
                {element}
              </button>
            ))}
          </li>

          <li>
            <button
              className="dropdown-item"
              onClick={props.resetCountryCuisine}
              id="resetEvent"
            >
              All
            </button>
          </li>
        </ul>
      </div>
      {/* <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Meal type
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-item"
              onClick={props.filter}
              id="Dessert"
            >
              Dessert
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={props.filter}
              id="SideDish"
            >
              Side dish
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={props.filter}
              id="Vegetarian"
            >
              Vegetarian
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={props.filter}
              id="Breakfast"
            >
              Breakfast
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={props.filter}
              id="DinnerParty"
            >
              Dinner Party
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={props.reset}
              id="resetEvent"
            >
              All
            </button>
          </li>
        </ul>
      </div> */}
    </div>
  );
};
export default FilterButton;
