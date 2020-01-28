import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class AdditionalFeatureWidgetContainer extends Component {
  state = {};

  componentDidMount() {
    this.getData();
  }

  getData() {}

  setAccounts(data) {
    this.setState({});
  }

  render() {
    return (
      <Card style={{ height: "428px" }}>
        <Card.Body>
          <Card.Text className="pt-5 text-center">
            <i className="fas fa-lightbulb fa-3x text-primary"></i>
          </Card.Text>
          <Card.Title className="font-weight-bold w-100 text-center">
            Additional Features <br /> Coming Soon
          </Card.Title>
          <p className="m-2 text-center">
            Payroll, Invoicing, Digital Deposit Account Opening, and many more.
            Be the first to be notified!
          </p>
          <div className="w-100 text-center pt-4">
            <Button variant="success" className="text-primary font-weight-bold">
              Notify Me
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

export default AdditionalFeatureWidgetContainer;
