import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { completeRegistration } from "../../redux/actions/registrationAction";
import * as JWT from 'jwt-decode';
import DashboardComponent from "./dashboard.component";
import AccountContainer from "../dashboard-widget/account-widget/AccountContainer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class DashboardContainer extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row noGutters={true} className="px-lg-4 py-4 px-sm-0">
          <Col xs={"auto"} className="pr-3">
            <img
              alt="LOGO"
              style={{ width: "50px" }}
              className="card-img pt-1"
              src="ghost_logo.jpg"
            />
          </Col>
          <Col xs={8} sm={10} lg={11} className="pt-sm-3">
            <h4> {JWT(localStorage.getItem("access_token"))["https://gateway.citizensbank.com/claims/homeOrgName"]} Dashboard</h4>
          </Col>
          <Col xs={"auto"} className="text-right pt-3">
            <i className="fas fa-bell fa-lg"></i>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={8} lg={8}>
            <DashboardComponent history={this.props.history} />
          </Col>
          <Col md={4} lg={4} className="d-none d-md-block">
            <AccountContainer history={this.props.history} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const connectStateToDashboard = state => {
  if (!state.registrationReducer.signupData) {
    return {
      firstName: "Jessica",
      lastName: "Jones",
      companyName: "Pinch of Salt"
    };
  } else {
    return {
      firstName: state.registrationReducer.signupData.user.firstName,
      lastName: state.registrationReducer.signupData.user.lastName,
      companyName: state.registrationReducer.signupData.organization.name
    };
  }
};
export default connect(
  connectStateToDashboard,
  { completeRegistration }
)(withRouter(DashboardContainer));
