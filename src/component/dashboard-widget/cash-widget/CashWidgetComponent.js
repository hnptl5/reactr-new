import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import PieChartComponent from "../../common/charts/pieChart.component";

const COLORS = ["#FFC857", "#009B7A", "#034DA0", "#0391B3"];

class CashWidgetComponent extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <>
        <PieChartComponent
          data={this.props.data}
          COLORS={COLORS}
        ></PieChartComponent>
        <CardGroup>
          {this.props.data.map((entry, index) => (
            <Card key={`list-${index}`} className="border-0">
              <Card.Body
                className="py-0 px-2"
                style={{
                  borderLeft: "3px solid" + COLORS[index % COLORS.length]
                }}
              >
                <Card.Title
                  className="font-weight-bold"
                  style={{ fontSize: "0.9rem" }}
                >
                  ${" "}
                  {entry.value.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0
                  })}
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{ fontSize: "0.7rem" }}
                >
                  {entry.category}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </>
    );
  }
}

CashWidgetComponent.propTypes = {
  data: PropTypes.array.isRequired
};

export default CashWidgetComponent;
