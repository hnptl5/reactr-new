import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const PageNotFound = () => {
    return (
        <Jumbotron className="text-center d-flex align-items-center">
            <Container style={{color: "green", fontSize: 35}}>
                Page Not Found :(
            </Container>
        </Jumbotron>
    );
}

export default PageNotFound;