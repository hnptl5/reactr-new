import React from "react";
import { connect } from "react-redux";
import TransactionsComponent from "./TransactionsComponent";
import {
  getAllTransactions,
  getMonthStartBalance
} from "../../redux/actions/transactionAction";
import PropTypes from "prop-types";

class TransactionsContainer extends React.Component {
  state = {
    transactionsPeriod: {}
  };

  componentDidMount() {
    const {
      getAllTransactions,
      getMonthStartBalance,
      transactionSize,
      monthStartBalance
    } = this.props;

    const date = new Date();
    const endDate = date.setDate(date.getDate());
    const startDate = date.setDate(1);
    this.setState({ transactionsPeriod: { startDate, endDate } });

    if (transactionSize === 0 || monthStartBalance === 0) {
      const data = {
        startDate: startDate,
        endDate: endDate,
        pageSize: 50,
        pageNumber: 1
      };

      if (monthStartBalance === 0) {
        getMonthStartBalance(data);
      }
      if (transactionSize === 0) {
        getAllTransactions(data);
      }
    }
  }

  render() {
    return (
      <div className="font-weight-bold">
        <TransactionsComponent
          transactionsPeriod={this.state.transactionsPeriod}
          cashInTransactions={this.props.cashInTransactions}
          cashOutTransactions={this.props.cashOutTransactions}
          cashInAggregate={this.props.cashInAggregate}
          cashOutAggregate={this.props.cashOutAggregate}
          monthStartBalance={this.props.monthStartBalance}
        />
      </div>
    );
  }
}

TransactionsContainer.propTypes = {
  cashInTransactions: PropTypes.array.isRequired,
  cashOutTransactions: PropTypes.array.isRequired,
  cashInAggregate: PropTypes.number.isRequired,
  cashOutAggregate: PropTypes.number.isRequired,
  getAllTransactions: PropTypes.func.isRequired,
  getMonthStartBalance: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const transactions = state.transactionReducer.transactions;
  const balance = state.balanceReducer.balance;
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue["amount"];
  return {
    transactionSize: transactions.length,
    cashInTransactions: transactions.filter(t => t.type === 1),
    cashOutTransactions: transactions.filter(t => t.type === 2),
    cashInAggregate: transactions.filter(t => t.type === 1).reduce(reducer, 0),
    cashOutAggregate: transactions.filter(t => t.type === 2).reduce(reducer, 0),
    monthStartBalance: balance
  };
};

const mapDispatchesToProps = dispatch => {
  return {
    getAllTransactions: data => dispatch(getAllTransactions(data)),
    getMonthStartBalance: data => dispatch(getMonthStartBalance(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchesToProps
)(TransactionsContainer);
