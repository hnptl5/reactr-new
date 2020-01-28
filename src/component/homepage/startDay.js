import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const StartDay = () => {
  const upText = `IT'S TIME TO`;
  return (
    <Card
      className="pt-4 bg-dark border-0 rounded-0 text-center mb-5"
      style={{ margin: "0 -15px" }}
    >
      <Card.Body>
        <h6 className="text-white">{upText}</h6>
        <p className="display-4 text-white mb-5">Start your day with Gateway</p>
        <Link to="/signup" className="btn btn-primary btn-lg">
          Sign Up
        </Link>
      </Card.Body>
    </Card>
  );
};

export default StartDay;
