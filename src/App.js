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
import AboutApp from "./components/AboutApp";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="*" element={<div> Page not found</div>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/addRecipe" element={<AddRecipeForm />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<AboutApp />} />
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
