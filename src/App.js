import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import Favorites from "./components/Favorites";
// import About from "./components/About";
import AddRecipeForm from "./components/AddRecipeForm.js";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { useState } from "react";
import Header from "./components/Header.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        {/* Use the component */}
        <Header />
        <Routes>
        {/* {loggedIn ? (
            <Route path="/" element={<Container />} />
          ) : (
            <Route path="/" element={<Navigate to='/signup' replace />} />
          )} */}
        
          <Route path="/" element={<Container />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/newItem" element={<AddRecipeForm />} />
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
