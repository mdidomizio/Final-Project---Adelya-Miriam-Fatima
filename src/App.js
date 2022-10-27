import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Container from "./components/Container.js";
// import About from "./components/About";
import AddRecipeForm from "./components/AddRecipeForm.js";
// import SignUpForm from "./components/SignUpForm";
// import Login from "./components/Login";
// import { useState } from "react";
import Header from "./components/Header.js";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        {/* Use the component */}
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/newRecipe" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
