import React, { useCallback, useEffect, useState } from "react";
import MovieDataService from "../services/movies";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";

const MoviesList = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [activeSearchTitle, setActiveSearchTitle] = useState("");
  const [activeSearchRating, setActiveSearchRating] = useState("All Ratings");
  const [ratings, setRatings] = useState(["All Ratings"]);
  const [currentPage, setCurrentPage] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(0);
  const [currentSearchMode, setCurrentSearchMode] = useState("");

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const onChangeSearchRating = (e) => {
    const searchRating = e.target.value;
    setSearchRating(searchRating);
  };

  const retrieveMovies = useCallback(() => {
    MovieDataService.getAll(currentPage)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.movies);
        setCurrentPage(response.data.page);
        setEntriesPerPage(response.data.entries_per_page);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [currentPage]);

  const retrieveRatings = useCallback(() => {
    MovieDataService.getRatings()
      .then((response) => {
        console.log(response.data);
        setRatings(["All Ratings"].concat(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const find = useCallback((query, by) => {
    MovieDataService.find(query, by, currentPage)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.movies);
        setCurrentPage(response.data.page);
        setEntriesPerPage(response.data.entries_per_page);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [currentPage]);

  const retrieveNextPage = useCallback(() => {
    if (currentSearchMode === "findByTitle") {
      find(activeSearchTitle, "title");
    } else if (currentSearchMode === "findByRating") {
      if (activeSearchRating === "All Ratings") {
        retrieveMovies();
      } else {
        find(activeSearchRating, "rated");
      }
    } else {
      retrieveMovies();
    }
  }, [
    activeSearchRating,
    activeSearchTitle,
    currentSearchMode,
    find,
    retrieveMovies,
  ]);

  useEffect(() => {
    retrieveRatings();
  }, [retrieveRatings]);

  useEffect(() => {
    retrieveNextPage();
  }, [retrieveNextPage]);

  const findByTitle = () => {
    setActiveSearchTitle(searchTitle);
    setCurrentSearchMode("findByTitle");
    if (
      currentPage === 0 &&
      currentSearchMode === "findByTitle" &&
      activeSearchTitle === searchTitle
    ) {
      find(searchTitle, "title");
    } else {
      setCurrentPage(0);
    }
  };

  const findByRating = () => {
    setActiveSearchRating(searchRating);
    setCurrentSearchMode("findByRating");
    if (
      currentPage === 0 &&
      currentSearchMode === "findByRating" &&
      activeSearchRating === searchRating
    ) {
      if (searchRating === "All Ratings") {
        retrieveMovies();
      } else {
        find(searchRating, "rated");
      }
    } else {
      setCurrentPage(0);
    }
  };

  const showAllMovies = () => {
    setCurrentSearchMode("");
    setActiveSearchTitle("");
    setActiveSearchRating("All Ratings");
    if (currentPage === 0 && currentSearchMode === "") {
      retrieveMovies();
    } else {
      setCurrentPage(0);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search by title"
              value={searchTitle}
              onChange={onChangeSearchTitle}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={findByTitle}>
            Search
          </Button>
        </Col>

        <Col>
          <Form.Group>
            <Form.Control
              as="select"
              onChange={onChangeSearchRating}
              value={searchRating}
            >
              {ratings.map((rating) => {
                return (
                  <option value={rating} key={rating}>
                    {rating}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="button" onClick={findByRating}>
            Search
          </Button>
        </Col>
      </Row>

      <br />
      Showing page: {currentPage}.
      <Button
        variant="link"
        type="button"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Get next {entriesPerPage} results
      </Button>
      <Button variant="link" type="button" onClick={showAllMovies}>
        Show all
      </Button>
      <br />

      <Row>
        {movies.map((movie) => {
          return (
            <Col key={movie._id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={movie.poster + "/100px180"} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>Rating: {movie.rated}</Card.Text>
                  <Card.Text>{movie.plot}</Card.Text>
                  <Link to={"/movies/" + movie._id}>View Reviews</Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MoviesList;
