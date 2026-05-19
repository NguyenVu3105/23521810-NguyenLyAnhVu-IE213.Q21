import React, { useState } from "react";
import MovieDataService from "../services/movies";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const AddReview = (props) => {
  const { id } = useParams();
  const location = useLocation();
  const currentReview = location.state && location.state.currentReview;
  const editing = Boolean(currentReview);
  const initialReviewState = editing ? currentReview.review : "";

  const [review, setReview] = useState(initialReviewState);
  const [submitted, setSubmitted] = useState(false);

  const onChangeReview = (e) => {
    setReview(e.target.value);
  };

  const saveReview = () => {
    const data = {
      review: review,
      name: props.user.name,
      user_id: props.user.id,
      movie_id: id,
    };

    if (editing) {
      data.review_id = currentReview._id;
      MovieDataService.updateReview(data)
        .then((response) => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      MovieDataService.createReview(data)
        .then(() => {
          setSubmitted(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  if (!props.user) {
    return <Navigate to="/login" />;
  }

  return (
    <Container className="mt-3">
      {submitted ? (
        <div>
          <h4>Review submitted successfully</h4>
          <Link to={"/movies/" + id}>Back to Movie</Link>
        </div>
      ) : (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>{editing ? "Edit" : "Create"} Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              value={review}
              onChange={onChangeReview}
            />
          </Form.Group>

          <Button variant="primary" type="button" onClick={saveReview}>
            Submit
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default AddReview;
