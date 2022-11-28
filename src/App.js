import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Favorites from './components/Favorites';
import AddRecipeForm from './components/AddRecipeForm.js';
import SignUp from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';
import Header from './components/Header.js';
import Logout from './components/Logout';
import AboutApp from './AboutApp';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header loggedIn={loggedIn} />
        <Routes>
          {loggedIn ? (
            <Route path="/favorites" element={<Favorites />} />
          ) : (
            <Route
              path="/favorites"
              element={<Navigate to="/signup" replace />}
            />
          )}

          {loggedIn ? (
            <Route path="/addRecipe" element={<AddRecipeForm />} />
          ) : (
            <Route
              path="/addRecipe"
              element={<Navigate to="/signup" replace />}
            />
          )}

          <Route path="/" element={<Container />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/addRecipe" element={<AddRecipeForm />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<AboutApp />} />
          <Route
            path="/logout"
            element={<Logout setLoggedIn={setLoggedIn} />}
          />

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
