const FilterButton = (props) => {
  return (
    // <div className="countryBtn">
    //   <button
    //     type="reset"
    //     className="btn btn-secondary m-2"
    //     onClick={(event) => {
    //       props.resetFilter(event);
    //     }}
    //     id="reset"
    //   >
    //     All
    //   </button>

    //   {countryList.map((item) => (
    //     <button
    //       type="button"
    //       className="btn btn-warning m-2"
    //       id={item}
    //       key={item}
    //       onClick={(event) => {
    //         return props.filteredSeasonWardrobe(event);
    //       }}
    //     >
    //       {item}
    //     </button>
    //   ))}
    // </div>
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
            <button
              className="dropdown-item"
              onClick={props.filter}
              id="American"
            >
              American
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={props.filter}
              id="French"
            >
              French
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={props.filter}
              id="Mexican"
            >
              Mexican
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={props.filter}
              id="British"
            >
              British
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={props.filter}
              id="Russian"
            >
              Russian
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
      </div>
      <div className="dropdown">
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
      </div>
    </div>
  );
};
export default FilterButton;
