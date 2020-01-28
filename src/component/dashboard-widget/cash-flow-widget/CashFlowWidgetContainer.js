import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import NavDropdown from "react-bootstrap/NavDropdown";
import { connect } from "react-redux";
import LineGraphComponent from "../../common/charts/lineGraph.component";
import { getCashFlow } from "../../../redux/actions/cashFlowAction";

class CashFlowWidgetContainer extends Component {

  state = {
    dateRange: "14"
  };

  componentDidMount() {
    const { cashFlow, getCashFlowDetails } = this.props;

    if (cashFlow && cashFlow.length === 0) {
      getCashFlowDetails();
    }
  }

  changeDateRange = (select) => {
    if(select) {
      const newRange = select;
      this.setState({dateRange: newRange});
    }
  }

  render() {
    return (
      <Card style={{ height: "428px" }}>
        <Card.Header className="py-0 pr-0">
          <div className="row no-gutters">
            <div className="col-8 py-2">Cash Flow</div>
            <div className="col-4 pl-2 pr-1 border-left text-center d-flex align-items-center ">
            <NavDropdown title={this.state.dateRange + " Days"} id="nav-dropdown">
                     <NavDropdown.Item
                          eventKey="14"
                          active={this.state.dateRange === "14"}
                          onSelect={this.changeDateRange}
                        >14 Days</NavDropdown.Item>
                     <NavDropdown.Item
                          eventKey="30"
                          active={this.state.dateRange === "30"}
                          onSelect={this.changeDateRange}
                        >30 Days</NavDropdown.Item>
                  </NavDropdown>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="px-0">
          <Card.Title className="font-weight-bold h4 px-3">
            $
            {this.props.netCashPosition.toLocaleString(navigator.language, {
              minimumFractionDigits: 0
            })}
          </Card.Title>
          <Card.Subtitle
            className="mb-2 font-weight-bold px-3"
            style={{ fontSize: "0.75rem" }}
          >
            Net Cash Position
          </Card.Subtitle>

          <LineGraphComponent data={
            this.props.cashFlow.length > this.state.dateRange ? 
            this.props.cashFlow.slice(this.props.cashFlow.length - this.state.dateRange) : 
            this.props.cashFlow} />
        </Card.Body>
      </Card>
    );
  }
}

CashFlowWidgetContainer.propTypes = {
  cashFlow: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
  netCashPosition: PropTypes.number.isRequired,
  getCashFlowDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const cashFlowList = state.cashFlowReducer.cashFlow;
  let cashFlow = [];
  let loaded = false;
  let netCashAmount = 0;
  if (cashFlowList && cashFlowList.dailyPositions) {
    cashFlow = cashFlowList.dailyPositions.reduce(
      (result, { day, netCashPosition, index }) => {
        // Create new group
        result.push({
          name: new Date(day).getDate(),
          current: netCashPosition,
          lastYear: Math.floor(Math.random() * netCashPosition + 1)
        });
        return result;
      },
      []
    );
    loaded = true;
    netCashAmount =
      cashFlowList.dailyPositions[cashFlowList.dailyPositions.length - 1]
        .netCashPosition;
  }
  return {
    cashFlow: cashFlow,
    loaded: loaded,
    netCashPosition: netCashAmount
  };
};

const mapDispatchesToProps = dispatch => {
  return {
    getCashFlowDetails: data => dispatch(getCashFlow(data))
  };
};

CashFlowWidgetContainer.propTypes = {
  cashFlow: PropTypes.array.isRequired,
  netCashPosition: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchesToProps
)(CashFlowWidgetContainer);
