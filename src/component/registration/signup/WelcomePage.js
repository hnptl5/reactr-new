import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../../react-auth0-spa";
import './SignUp.scss';

const WelcomePage = () => {

  const { user } = useAuth0();

  return (
    <div className="signup-background">
    <Jumbotron className="bg-dark">
      <Container className="text-center">
        <div className="float-left">
          <Link to="/profile">
            <i className="fas fa-angle-left fa-3x arrow-font"></i>
          </Link>
        </div>
        <div className="pt-4">
          <Image
            fluid
            alt="arrow image"
            className="arrow-image"
            src="arrow_up.png"
          />
        </div>

        <h1 className="text-white font-weight-bold pt-3">
          Hi {user.nickname}, Let's get started
        </h1>
        <h4 className="text-white  font-weight-normal pb-3">
          Please link your business bank accounts so that we can allow <br />
          you to visualize your cash flow and view all of your financial <br />
          accounts in one place
        </h4>

        <Link to="/linkbankaccount">
          <Button size="lg" className="mt-5">Sounds Good </Button>
        </Link>

        <h6 className="text-white mt-4 pt-4">
          <img src="shield_logo.png" className="shield" alt="shield logo" />
          Gateway cares about the security of your data. We protect your
          information by using technology that is used by top banks
        </h6>
      </Container>
    </Jumbotron>
    </div>
  );
};


export default WelcomePage;
