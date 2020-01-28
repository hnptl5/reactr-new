import React, { Component } from "react";
import PropTypes from "prop-types";
import CashWidgetComponent from "./CashWidgetComponent";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Spinner from "react-bootstrap/Spinner";
import { connect } from "react-redux";
import { getAllTransactions } from "../../../redux/actions/transactionAction";


class CashWidgetContainer extends Component {
  // dateRange: any;

  constructor(props) {
    super(props);
    const dt = new Date();
    // const month = dt.getMonth();
    const year = dt.getFullYear();
    const month = dt.getMonth();

    // TODO: Remove Month hard coding.
    this.dateRange = {
      todayDate: dt,
      currentMonthFirstDay: new Date(year, month, 1),
      currentMonthLastDay: new Date(year, month, 0),
      lastMonthFirstDay: new Date(year, month - 1, 1),
      lastMonthLastDay: new Date(year, month - 1, 0)
    };
    this.state = { activeTab: 1 };
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    const { transactionSize, getAllTransactions } = this.props;

    if (transactionSize === 0) {
      let endDate = this.dateRange.todayDate;
      let startDate = this.dateRange.lastMonthFirstDay;
      let data = {
        startDate: startDate,
        endDate: endDate,
        pageSize: 5000,
        pageNumber: 1
      };
      getAllTransactions(data);
    }
  }

  handleSelect(selectedTab) {
    this.setState({
      activeTab: selectedTab
    });
  }

  render() {
    return (
      <Card style={{ height: "428px" }}>
        <Card.Body className="pt-0">
          <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
            <Tab eventKey={1} title="Cash In">
              <h6 className="mb-0 font-weight-bold">Month To Date</h6>
              {this.props.loaded ? (
                <CashWidgetComponent data={this.props.cashIn} />
              ) : (
                <Spinner animation="border" variant="primary" />
              )}
            </Tab>
            <Tab eventKey={2} title="Cash Out">
              <h6 className="mb-0 font-weight-bold">Month To Date</h6>
              {this.props.loaded ? (
                <CashWidgetComponent data={this.props.cashOut} />
              ) : (
                <Spinner animation="border" variant="primary" />
              )}
            </Tab>
          </Tabs>
          {/* <div className="col-1 text-right">
            <i className="fas fa-ellipsis-h"></i>
          </div> */}
        </Card.Body>
      </Card>
    );
  }
}

CashWidgetContainer.propTypes = {
  cashIn: PropTypes.array.isRequired,
  cashOut: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  if (!state.transactionReducer.transactions) {
    return {
      transactionSize : 0,
      cashIn: [],
      cashOut: [],
      loaded: false
    };
  }
  let currentMonthFirstDay = new Date();
  currentMonthFirstDay.setDate(1);
  const transactions = state.transactionReducer.transactions;
  const currentMonthCashOutTransactions = transactions.filter(
    t => new Date(t.timestamp) > currentMonthFirstDay && t.type === 2
  );
  const currentMonthCashInTransactions = transactions.filter(
    t => new Date(t.timestamp) > currentMonthFirstDay && t.type === 1
  );
  
  const cashOut = Object.values(
    currentMonthCashOutTransactions.reduce(
      (result, { category, timestamp, amount }) => {
        // Create new group
        if (!result[category])
          result[category] = {
            category,
            value: 0
          };
        // Append to group
        result[category].value += amount;
        return result;
      },
      {}
    )
    );
    
  const cashIn = Object.values(
    currentMonthCashInTransactions.reduce(
      (result, { category, timestamp, amount }) => {
        // Create new group
        if (!result[category])
          result[category] = {
            category,
            value: 0
          };
        // Append to group
        result[category].value += amount;
        return result;
      },
      {}
    )
  );

  return {
    transactionSize : transactions.length,
    cashIn: cashIn,
    cashOut: cashOut,
    loaded: true
  };
};

const mapDispatchesToProps = dispatch => {
  return {
    getAllTransactions: data => dispatch(getAllTransactions(data))
  };
};


CashWidgetContainer.propTypes = {
  getAllTransactions: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  cashIn: PropTypes.array.isRequired,
  cashOut: PropTypes.array.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchesToProps
)(CashWidgetContainer);
