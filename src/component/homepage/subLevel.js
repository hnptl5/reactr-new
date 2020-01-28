import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./home.scss";

export const SubLevelRightImage = ({
  heading,
  text,
  image,
  buttonState,
  step
}) => {
  return (
    <Card className="pt-4 border-0">
      <div className="row">
        <div className="col-12 col-md-7 col-lg-6 order-md-1 order-2">
          <Card.Body className={"bg-number img_" + step}>
            <p className="display-4" style={{ color: "#333333" }}>
              {heading}
            </p>
            <p className="h5 py-3 mb-3 text-gray">{text}</p>
            <Link to="/signup" className="btn btn-primary btn-lg">
              Sign Up
            </Link>
          </Card.Body>
        </div>
        <div className="col-12 col-md-5 col-lg-6 order-md-2 order-1 px-sm-0 text-center">
          <Image
            src={image}
            className="img-fluid shadow py-4 mx-auto"
            width="80%"
          />
        </div>
      </div>
    </Card>
  );
};

export const SubLevelLeftImage = ({
  heading,
  text,
  image,
  buttonState,
  step
}) => {
  return (
    <Card className="pt-4 border-0">
      <div className="row">
        <div className="col-12 col-md-5 col-lg-6 px-sm-0 text-center">
          <Image
            src={image}
            className="img-fluid py-4 shadow mx-auto"
            width="80%"
          />
        </div>
        <div className="col-12 col-md-7 col-lg-6">
          <Card.Body className={"bg-number img_" + step}>
            <p className="display-4" style={{ color: "#333333" }}>
              {heading}
            </p>
            <p className="h5 py-3 mb-3 text-gray">{text}</p>
            {buttonState && (
              <Link to="/signup" className="btn btn-primary btn-lg">
                Sign Up
              </Link>
            )}
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};
