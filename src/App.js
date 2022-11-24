import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import Favorites from "./components/Favorites";
// import About from "./components/About";
import AddRecipeForm from "./components/AddRecipeForm.js";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";
import Header from "./components/Header.js";
import Logout from "./components/Logout";
import SearchCards from "./components/SearchCards";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header setSearchResult={setSearchResult} />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/addRecipe" element={<AddRecipeForm />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="/search"
            element={<SearchCards searchResult={searchResult} />}
          />
          <Route
            path="/logout"
            element={<Logout setLoggedIn={setLoggedIn} />}
          />
          {/* {loggedIn ? (
            <Route path="/favorites" element={<Favorites />} />
          ) : (
            <Route path="/" element={<Navigate to="/signup" replace />} />
          )} */}
          <Route
            path="/about"
            element={
              <div>
                This is our About Us page. Need to create a component for this
              </div>
            }
          />
          <Route path="*" element={<div> Page not found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
