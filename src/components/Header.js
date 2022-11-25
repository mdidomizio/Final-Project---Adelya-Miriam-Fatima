import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="header m-4">
      <h1 className="display-1">Recipes World </h1>

      <nav
        className="nav justify-content-center p-4 border"
        style={{ backgroundColor: '#EDEADE' }}
      >
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link
              className="btn btn-outline-light me-3 "
              style={{ color: '#94340c', border: '1px solid #94340c' }}
              aria-current="page"
              to="/"
            >
              Home
            </Link>
          </li>
          {props.loggedIn ? (
            <li className="nav-item">
              <Link
                to="/logout"
                className="btn btn-outline-light me-3 "
                style={{ color: '#94340c', border: '1px solid #94340c' }}
              >
                Logout
              </Link>
            </li>
          ) : (
            <div className="d-flex">
              <li className="nav-item">
                <Link
                  className="btn btn-outline-light me-3 "
                  aria-current="page"
                  to="/signup"
                  style={{ color: '#94340c', border: '1px solid #94340c' }}
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-outline-light me-3 "
                  aria-current="page"
                  to="/login"
                  style={{ color: '#94340c', border: '1px solid #94340c' }}
                >
                  Login
                </Link>
              </li>
            </div>
          )}
          <li className="nav-item">
            <Link
              className="btn btn-outline-light me-3 "
              aria-current="page"
              to="/addRecipe"
              style={{ color: '#94340c', border: '1px solid #94340c' }}
            >
              Add New Recipe
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="btn btn-outline-light me-3 "
              aria-current="page"
              to="/favorites"
              style={{ color: '#94340c', border: '1px solid #94340c' }}
            >
              My Recipes
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="btn btn-outline-light me-3"
              // className="nav-link active"
              aria-current="page"
              to="/about"
              style={{ color: '#94340c', border: '1px solid #94340c' }}
            >
              About the app
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
