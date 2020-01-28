import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class InvoiceWidgetContainer extends Component {
  state = {};

  // componentDidMount() {
  //   this.getData();
  // }

  // getData() {}

  // setAccounts(data) {
  //   this.setState({});
  // }

  render() {
    return (
      <Card style={{ height: "428px" }}>
        <Card.Header>
          <div className="row no-gutters">
            <div className="col-11">Customer Invoice</div>
            <div className="col-1 text-right">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text className="pt-3 text-center">
            <i className="fas fa-unlock-alt fa-3x text-primary"></i>
          </Card.Text>
          <Card.Title className="font-weight-bold w-100 text-center">
            Connect Quickbooks
          </Card.Title>
          <p className="m-2 text-center">
            Connect your Quickbooks account to activate this module and start
            seeing your customer invoices.
          </p>
          <div className="w-100 text-center pt-4">
            <Button variant="success" className="text-primary font-weight-bold">
              Connect Quickbooks
            </Button>
          </div>
          <div className="w-100 text-center pt-2">
            <Card.Link href="#">Dismiss</Card.Link>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default InvoiceWidgetContainer;
