import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LinkAccount.scss";

const LinkAccountingContainer = () => {

  return (
    <>
      <Row className="px-md-8 pt-4 px-sm-0">
        <Col xs={1} lg={1} className="pt-3 pl-5 ml-1">
          <Link to="/bankaccountpage">
            {" "}
            <i className="fas fa-angle-left fa-3x arrow-color"></i>{" "}
          </Link>

        </Col>

        <Col xs={3} lg={7} className="mx-auto pt-3 px-sm-3 text-center">
          <h5>
            <b> Step 3 </b> of 3{" "}
          </h5>
        </Col>

        <Col xs={2} lg={2} className="pt-3">
          <Link to="/">
            {" "}
            <h5 className="">
              {" "}
              <b>Skip for Now </b>{" "}
            </h5>{" "}
          </Link>
        </Col>
      </Row>

      <Row>
        <Col xs={11} lg={11} className="pt-3 text-center">
          <img
            alt="Progress bar 1 of 3"
            className="progress-bar"
            src="progress_bar3.png"
          />
        </Col>
      </Row>

      <Row className="px-md-8 pb-5 px-sm-0">
        <Col xs={11} lg={11} className=" pt-3 text-center">
          <h3>
            {" "}
            <b> Please link your accounting software </b>
          </h3>
        </Col>
        <Col xs={11} lg={11} className="text-center">
          <h4>
            {" "}
            We recommend linking your accounting software if you're <br />
            Keeping your books up to date. Otherwise, skip this step for now.
          </h4>
        </Col>
      </Row>

      <Form>
        <Row>
          <Col lg={2} sm={7} className="mx-auto ">
            <Image 
            src="quickbooks.png" 
            rounded 
            className="account-size2 ml-5 pl-5 img-fluid img-thumbnail" 
            
            />
          </Col>
          <Col lg={6} sm={5} className="bg-white">
            <Image
              src="more_banks.jpg"
              rounded
              className="account-size img-fluid img-thumbnail"
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default LinkAccountingContainer;
