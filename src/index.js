import React from "react";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import App from "./App";
import "./stylesheets/styles.scss";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
import { IntlProvider } from "react-intl";

const store = configureStore();

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    audience={config.audience}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <ReduxProvider store={store}>
      <IntlProvider locale="en">
        <Router>
          <App />
        </Router>
      </IntlProvider>
    </ReduxProvider>
  </Auth0Provider>,
  document.getElementById("app")
);

serviceWorker.unregister();
