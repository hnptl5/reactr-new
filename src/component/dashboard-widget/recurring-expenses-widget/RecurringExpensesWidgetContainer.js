import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import RecurringExpensesComponent from "./RecurringExpensesWidgetComponent";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { getDueBills } from "../../../redux/actions/transactionAction";
import { FormattedNumber } from "react-intl";

class RecurringExpensesWidgetContainer extends Component {
  componentDidMount() {

    if(this.props.bills.length === 0){
      var data = {
        "dueDateRangeStart":1281873080700,
        "dueDateRangeEnd":1981873080700,
        "pageSize":50,
        "pageNumber":1
      }
      
      this.props.getBills(data);
    }
  }


  sortRecentPayables(payables) {
    return payables.sort((t1, t2) => {
      const a = new Date(t1["dueDate"]);
      const b = new Date(t2["dueDate"]);
      return a < b ? -1 : a > b ? 1 : 0;
    });
  }

  render() {
    var recentPayables = this.sortRecentPayables(this.props.bills).splice(0,4);
    var expenses = 0;
    for(var index = 0; index < recentPayables.length; index++) {
      expenses += recentPayables[index]['amount'];
    }
    return (
      <Card style={{ height: "428px" }}>
        <Card.Header className="py-0 pr-0">
          <div className="row no-gutters">
            <div className="col-9 py-2">Upcoming Recurring Expenses</div>
            <div className="col-3 py-0 border-left">
              <select className="custom-select border-0">
                <option>Select</option>
              </select>
            </div>
          </div>
        </Card.Header>
        <div className="alert alert-success alert-banner" role="alert">
          The following expenses are estimated coming due.
        </div>
        <Card.Body>
          <Card.Title className="font-weight-bold">
          <FormattedNumber
            value={expenses}
            style={`currency`}
            currency="USD"
            minimumFractionDigits={2}
            maximumFractionDigits={2}
          />
         </Card.Title>
          <ListGroup variant="flush">
            {recentPayables.map(payable => (
              <RecurringExpensesComponent key = {payable.id} data = {payable}/>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    bills: state.transactionReducer.bills
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBills: (data) => dispatch(getDueBills(data))
  }
}

RecurringExpensesWidgetContainer.propTypes = {
  getBills: PropTypes.func.isRequired,
  bills: PropTypes.array.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(RecurringExpensesWidgetContainer);
