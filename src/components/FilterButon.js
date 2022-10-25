const FilterButton = (props) => {
    const countryList = ["British", "", "", ""];
  
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
    Title
  </button>
  <ul className="dropdown-menu">
    <li>
      <button className="dropdown-item" onClick={props.filter} id="Mr">
        Mr
      </button>
    </li>
    <li>
      <button className="dropdown-item" onClick={props.filter} id="Ms">
        Ms
      </button>
    </li>
    <li>
      <button className="dropdown-item" onClick={props.filter} id="Mrs">
        Mrs
      </button>
    </li>
    <li>
      <button
        className="dropdown-item"
        onClick={props.filter}
        id="Miss"
      >
        Miss
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
    Country
  </button>
  <ul className="dropdown-menu">
    <li>
      <button className="dropdown-item" onClick={props.filter} id="Mr">
        Mr
      </button>
    </li>
    <li>
      <button className="dropdown-item" onClick={props.filter} id="Ms">
        Ms
      </button>
    </li>
    <li>
      <button className="dropdown-item" onClick={props.filter} id="Mrs">
        Mrs
      </button>
    </li>
    <li>
      <button
        className="dropdown-item"
        onClick={props.filter}
        id="Miss"
      >
        Miss
      </button>
    </li>
    <li>
      <button
        className="dropdown-item"
        onClick={props.filter}
        id="Madame"
      >
        Madame
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
    Gender
  </button>
  <ul className="dropdown-menu">
    <li>
      <button className="dropdown-item" onClick={props.filter} id="Mr">
        Mr
      </button>
    </li>
    <li>
      <button className="dropdown-item" onClick={props.filter} id="Ms">
        Ms
      </button>
    </li>
    <li>
      <button className="dropdown-item" onClick={props.filter} id="Mrs">
        Mrs
      </button>
    </li>
    <li>
      <button
        className="dropdown-item"
        onClick={props.filter}
        id="Miss"
      >
        Miss
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
  