import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

const LinkBankPage = (props) => {

  return (
    <div className="signup-background">
      <Row>
        <Col xs={1} lg={1} className="pt-5 pl-5 ml-5">
          <Link to="/linkbankaccount">
            <i className="fas fa-angle-left fa-3x arrow-font"></i>{" "}
          </Link>
        </Col>
      </Row>

      <Row>
        <Col xs={11} lg={11} className="text-center">
          <img
            alt=""
            className="arrow-image pt-5 mt-5"
            src="arrow_up.png"
          />
        </Col>
      </Row>

      <Row className="px-md-8 pb-5 px-sm-0">
        <Col xs={11} lg={11} className=" pt-3 text-center pb-3">
          <h2 className="text-white">
            {" "}
            <b> You're almost there, {props.name}</b>{" "}
          </h2>
        </Col>
        <Col xs={11} lg={11} className="text-center">
          <h4 className="text-white">
            Just one more step before you can begin visualizing <br />
            {props.companyName} finances all in one place
          </h4>
        </Col>
      </Row>

      <Row>
        <Col lg={11} className="text-center pl-2 ml-2">
          <Link to="linkaccountsoftware">
            <Button size="lg w-25"> Perfect </Button>{" "}
          </Link>
        </Col>
      </Row>
    </div>
  );
};

LinkBankPage.prototypes = {
  name: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  // this data is passed into props and returned in the UI when called
  return {
    name: state.registrationReducer.name,
    companyName: state.registrationReducer.signupData.organization.name

  }
}

export default connect(mapStateToProps, null)(LinkBankPage);
