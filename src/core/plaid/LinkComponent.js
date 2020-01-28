import React, { Component } from "react";
import PlaidLink from "./PlaidLinkComponent";
import {insertPublicToken} from "../../service/plaidService";

class PLink extends Component {
  constructor() {
    super();

    this.state = {
      transactions: []
    };
  }

  handleOnSuccess(public_token, metadata) {
    // send token to client server
    insertPublicToken(public_token)
  }

  handleOnExit() {
    // handle the case when your user exits Link
    // For the sake of this tutorial, we're not going to be doing anything here.
  }

  render() {
    return (
      <div>
        <PlaidLink
          clientName="Citizens"
          env="sandbox"
          product={["auth", "transactions"]}
          publicKey="d5edd0327fc5c7fe4003c3fc6bb0c8"
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}
          className="test"
        >
          Open Link and connect your bank!
        </PlaidLink>
      </div>
    );
  }
}

export default PLink;
