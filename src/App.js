import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
// import Container from "./components/Container";
// import About from "./components/About";
// import Cats from "./components/Cats";
// import NewItemForm from "./components/NewItemForm";
// import SignUpForm from "./components/SignUpForm";
// import Login from "./components/Login";
// import { useState } from "react";
import Header from "./components/Header";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false)
  return (
    <BrowserRouter>
    
    <div className="App">
        {/* Use the component */}
        <Header />

    </div>
    </BrowserRouter>
  );
}

export default App;
