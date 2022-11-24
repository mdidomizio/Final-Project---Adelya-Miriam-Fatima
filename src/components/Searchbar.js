import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Searchbar = (props) => {
  const [searchInput, setSearchInput] = useState([]);

  const searchItems = async () => {
    try {
      let path = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`;
      let response = await fetch(path, { mode: "cors" });
      let data = await response.json();
      console.log(data);
      if (searchInput !== "") {
        const filteredData = data.meals.filter((item) => {
          return Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        });
        console.log(filteredData);
        props.setSearchResult(filteredData);
      }
    } catch (error) {
      console.log("there is an error", error);
    }
  };

  const loader = async () => {
    const search = await searchItems();
    if (search) {
      return redirect("/search");
    }
  };

  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="search-form"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Link
            to="/search"
            onClick={(event) => {
              event.preventDefault();
              console.log("button works");
              searchItems();
              // loader();
            }}
            className="btn btn-outline-primary"
            // type="submit"
          >
            Search
          </Link>
        </form>
      </div>
    </nav>
  );
};
export default Searchbar;
