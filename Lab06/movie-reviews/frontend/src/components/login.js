import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Login = (props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const login = () => {
    props.login({ name: name, id: id });
    navigate("/");
  };

  return (
    <Container className="mt-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={name}
            onChange={onChangeName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter id"
            value={id}
            onChange={onChangeId}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={login}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
