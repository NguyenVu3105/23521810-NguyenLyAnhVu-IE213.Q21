import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import AddReview from "./components/add-review";
import MoviesList from "./components/movies-list";
import Movie from "./components/movie";
import Login from "./components/login";

function App() {
  const [user, setUser] = React.useState(null);

  function login(user = null) {
    setUser(user);
  }

  function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Movie Reviews</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movies">
              Movies
            </Nav.Link>

            <Nav.Link
              as={Link}
              to={user ? "/" : "/login"}
              onClick={user ? logout : null}
            >
              {user ? "Logout User" : "Login"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />

        <Route path="/movies" element={<MoviesList />} />

        <Route path="/movies/:id/review" element={<AddReview user={user} />} />

        <Route path="/movies/:id" element={<Movie user={user} />} />

        <Route path="/login" element={<Login login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
