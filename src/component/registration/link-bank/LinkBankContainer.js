import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import PLink from "../../../core/plaid/LinkComponent";

class LinkBankContainer extends React.Component {

  render() {
    return (
      <>
        <Jumbotron className="mb-0 pb-1" style={{ background: "transparent" }}>
          <Container className="text-center">
            <div className="float-left">
              <Link to="/welcome">
                <i className="fas fa-angle-left fa-3x arrow-color"></i>
              </Link>
            </div>
            <h5>
              <b> Step 2 </b> of 3
            </h5>

            <div className="clearfix"></div>

            <div className="pt-3">
              <img
                alt="Progress bar"
                className="progress-bar"
                src="progress_bar2.png"
              />
            </div>
            <h3 className="font-weight-bold">
              Please link your business accounts
            </h3>
            <h4>
              This includes bank accounts, credit cards, and loan accounts
            </h4>
            <PLink />

            <div className="pt-3">
              <Link to="/bankaccountpage">
                <Button size="lg"> Continue </Button>
              </Link>
            </div>
          </Container>
        </Jumbotron>
      </>
    );
  }
}
export default LinkBankContainer
