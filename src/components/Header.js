import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [searchResult, setSearchResult] = useState([]);

  const searchRecipes = async () => {
    try {
      let path = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
      let response = await fetch(path, { mode: "cors" });
      let resultSearch = await response.json();
      console.log(resultSearch);

      setSearchResult(resultSearch.meals);
    } catch (error) {
      console.log("there is an error", error);
    }
  };

  return (
    <header className="header m-4">
      <h1>Recipes World</h1>

      <nav className="nav justify-content-center">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/signup">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-link">
              Logout
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/addRecipe"
            >
              Add New Recipe
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/favorites"
            >
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">
              About us
            </Link>
          </li>
          <nav className="navbar bg-light">
            <div className="container-fluid">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search meal by name"
                  aria-label="Search"
                  // value={input}
                />
                <button
                  onClick={(event) => {
                    console.log("button works");
                    searchRecipes(event);
                  }}
                  className="btn btn-outline-success"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
