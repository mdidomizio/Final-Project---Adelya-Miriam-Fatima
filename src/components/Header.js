import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header m-4">
      <h1 className="display-1">Recipes World </h1>

      <nav className="nav justify-content-center">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          {props.loggedIn ? (
            <li className="nav-item">
              <Link to="/logout" className="nav-link">
                Logout
              </Link>
            </li>
          ) : (
            <div className="d-flex">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </div>
          )}
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
              My Recipes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">
              About the app
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
