import React from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

const Logout = () => {
  return (
    <>
      <Container>
        <div>
          Please wait until you are signed out
        </div>
        <Spinner animation="border" variant="primary" />
      </Container>
    </>
  );
};

export default Logout;
