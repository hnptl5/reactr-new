import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Switch } from "react-router-dom";

import LeftNavContainer from "../component/common/left-nav/LeftNavContainer";
import BenchmarkContainer from "../component/industry-benchmarks/BenchmarkContainer";
import TrendsContainer from "../component/trends/TrendsContainer";
import TransactionsContainer from "../component/transactions/TransactionsContainer";
import DashboardContainer from "../component/dashboard/dashboard.container";
import SidebarComponent from "./sidebar/Sidebar";

class LeftNavPageLoader extends React.Component {
  state = {
    sideBarOpen: false
  };

  slideBarToggleClickHandler = () => {
    this.setState(function(prevState) {
      return {
        sideBarOpen: !prevState.sideBarOpen
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideBarOpen: false });
  };

  render() {
    return (
      <>
        <Row>
          <SidebarComponent
            show={this.state.sideBarOpen}
            closeHandler={this.backdropClickHandler}
          ></SidebarComponent>
          <Col
            className="d-block d-lg-none pt-2"
            xs={"auto"}
            sm={"auto"}
            md={1}
          >
            <button
              onClick={this.slideBarToggleClickHandler}
              type="button"
              className="navbar-toggler px-0"
              data-toggle="collapse"
            >
              <i className="fas fa-bars"></i>
            </button>
          </Col>
          <Col lg={2} className="bg-info pl-0 d-none d-lg-block">
            <LeftNavContainer />
          </Col>
          <Col xs={12} sm={12} md={12} lg={10}>
            <Switch>
              <Route exact path="/" component={DashboardContainer} />
              <Route exact path="/dashboard" component={DashboardContainer} />
              <Route
                exact
                path="/transactions"
                component={TransactionsContainer}
              />
              <Route exact path="/trends" component={TrendsContainer} />
              <Route exact path="/benchmarks" component={BenchmarkContainer} />
            </Switch>
          </Col>
        </Row>
      </>
    );
  }
}

export default LeftNavPageLoader;
