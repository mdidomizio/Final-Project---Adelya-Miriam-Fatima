import SearchCards from "./SearchCards";
import React, { useState } from "react";
import { redirect } from "react-router-dom";

const Searchbar = (props) => {
  const [searchInput, setSearchInput] = useState([]);

  const searchItemsApi = async (searchValue) => {
    setSearchInput(searchValue);
    try {
      let path = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`;
      let response = await fetch(path, { mode: "cors" });
      let resultSearch = await response.json();
      if (searchInput !== " ") {
        const filteredData = resultSearch.meals.filter((item) => {
          return Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        });
        props.setSearchResult(filteredData);
        console.log(filteredData);
      } else props.setSearchResult(resultSearch);
    } catch (error) {
      console.log("there is an error", error);
    }
  };

  const loader = async () => {
    return redirect("/search");
  };

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
              searchItemsApi(event);
              event.preventDefault();
              loader();
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
