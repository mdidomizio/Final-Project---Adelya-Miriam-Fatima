import SearchCards from "./SearchCards";

const Searchbar = (props) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search meal by name"
            aria-label="Search"
            id="search-form"
            // onChange={(e) => searchItemsApi(e.target.value)}
          />
          <button
            onClick={(event) => {
              console.log("button works");
              props.searchItemsApi(event);
              event.preventDefault();
              props.loader();
            }}
            className="btn btn-outline-success"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
export default Searchbar;
