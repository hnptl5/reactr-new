import React from "react";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "./core/ErrorBoundary";
import PageNotFound from "./component/common/page-not-found/PageNotFoundComponent";
import LeftNavPageLoader from "./core/LeftNavPageLoader";
import LinkBank from "./component/registration/link-bank/LinkBankContainer";
import BankAccountPage from "./component/registration/link-bank/LinkBankPage";
import LinkAccountSoftware from "./component/registration/link-accounting/LinkAccountingContainer";
import SignUpPage from "./component/registration/signup/SignUpPage";
import SignUpCont from "./component/registration/signup/SignUpCont";
import WelcomePage from "./component/registration/signup/WelcomePage";
import HomePage from "./component/homepage/homePage";
import { useAuth0 } from "./react-auth0-spa";
import Logout from "./component/user/Logout";
import Login from "./component/user/Login";
import Reloading from "./component/user/Reloading";
import Jumbotron from "react-bootstrap/Jumbotron";

const App = props => {
  const { loading, isAuthenticated } = useAuth0();


  //Refreshing
  if (loading && window.performance.navigation.type === 1) {
    return (
      <Jumbotron className="text-center d-flex align-items-center min-vh-100">
        <div className="container">
          <Reloading />
        </div>
      </Jumbotron>
    );
  }

  //logout
  if (loading && isAuthenticated) {
    return (
      <Jumbotron className="text-center d-flex align-items-center min-vh-100">
        <div className="container">
          <Logout />
        </div>
      </Jumbotron>
    );
  }
  //login
  if (loading && !isAuthenticated && window.performance.navigation.type !== 1) {
    return (
      <Jumbotron className="text-center d-flex align-items-center min-vh-100">
        <div className="container">
          <Login />
        </div>
      </Jumbotron>
    );
  }

  if (!isAuthenticated) {
    return (
      <ErrorBoundary>
        <Container fluid={true}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/profile" component={SignUpCont} />
            <Route component={PageNotFound} />
          </Switch>
        </Container>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <Container fluid={true}>
        <Switch>
          <Route exact path="/" component={LeftNavPageLoader} />
          <Route exact path="/welcome" component={WelcomePage} />
          <Route exact path="/linkbankaccount" component={LinkBank} />
          <Route exact path="/bankaccountpage" component={BankAccountPage} />
          <Route exact path="/linkaccountsoftware" component={LinkAccountSoftware} />
          <Route exact path="/dashboard" component={LeftNavPageLoader} />
          <Route exact path="/settings" component={LeftNavPageLoader} />
          <Route exact path="/faq" component={LeftNavPageLoader} />
          <Route exact path="/tools" component={LeftNavPageLoader} />
          <Route exact path="/policies" component={LeftNavPageLoader} />
          <Route exact path="/transactions" component={LeftNavPageLoader} />
          <Route exact path="/trends" component={LeftNavPageLoader} />
          <Route exact path="/benchmarks" component={LeftNavPageLoader} />
          <Route component={PageNotFound} />
        </Switch>
      </Container>
    </ErrorBoundary>
  );
};

export default App;
