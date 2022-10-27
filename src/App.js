import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import Favorites from "./components/Favorites";
// import About from "./components/About";
import Signup from "./components/Signup.js";
// import NewRecipe from "./components/NewRecipe";
import Login from "./components/Login";
// import { useState } from "react";
import Header from "./components/Header";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        {/* Use the component */}
        <Header />
        <Routes>
          <Route
            path="/about"
            element={
              <div>
                This is my about page. Need to create a component for this!
              </div>
            }
          />
          <Route path="/" element={<Container />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/newrecipe" element={<NewRecipe />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
