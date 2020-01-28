import React from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

const Login = () => {
  return (
    <>
      <Container>
        <div>
          Refreshing
        </div>
        <Spinner animation="border" variant="primary" />
      </Container>
    </>
  );
};

export default Login;
