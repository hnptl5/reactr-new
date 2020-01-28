import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { connect } from "react-redux";
import { getCashFlow } from "../../redux/actions/cashFlowAction";
import { getAllTransactions, getMonthStartBalance } from "../../redux/actions/transactionAction";
import TrendsComponent from "./TrendsComponent";
import _ from "lodash";

class TrendsContainer extends React.Component {

  state = {
    cashFlow: this.props.cashFlow,
    selected: 30
  }

  componentDidMount() {
    const {
      cashFlow, 
      cashIn, 
      cashOut, 
      getMonthStartBalance,
      getCashFlowDetails
    } = this.props;

    let currDate = new Date();
      currDate.setDate(currDate.getDate() + 1);
      currDate.setHours(0);
      currDate.setMinutes(0);
      currDate.setSeconds(0);
      let startDate = new Date(
        currDate.getFullYear(),
        currDate.getMonth() - 1,
        currDate.getDate() + 1,
        11,
        59,
        59
      );

      let data = {
        startDate: startDate,
        endDate: currDate,
        pageSize: 50,
        pageNumber: 1
      };

    getMonthStartBalance(data);

    if(cashFlow.length === 0 || cashIn.length === 0 ||  cashOut.length === 0){
      getCashFlowDetails(data);
     
      let startDate2 = new Date(
        currDate.getFullYear(),
        currDate.getMonth() - 1,
        1,
        11,
        59,
        59
      );
      this.props.getAllTransactions({...data, startDate: startDate2});
    }
  }

  componentDidUpdate(prevProps){

    if(prevProps.cashFlow.length < this.props.cashFlow.length){
      this.handleSelect(null);
    }
  }

  handleSelect = (select) => {
    let value = 30;

    const { cashFlow } = this.props;
    if (select) {
      value = Number(select);
    }

    if (value >= this.props.cashFlow.length) {
      this.setState({ cashFlow: cashFlow , selected: value});
    } else {
      this.setState({ cashFlow: cashFlow.slice(cashFlow.length - value), selected: value });
    }
  }

  render() {
    const { 
      datePeriod, 
      monthStartBalance , 
      totalCashIn, 
      totalCashOut, 
      cashOfToday, 
      cashIn, 
      cashOut
    } = this.props;
    
    return (
      <>
        <Jumbotron className="px-2 font-weight-bold" style={{ backgroundColor: "transparent" }}>
              <TrendsComponent 
                selected={this.state.selected}
                datePeriod={datePeriod}
                cashFlow={this.state.cashFlow}
                totalCashIn={totalCashIn}
                totalCashOut={totalCashOut}
                cashOfToday={cashOfToday}
                monthStartBalance={monthStartBalance}
                onSelectDays={this.handleSelect}
                cashIn={cashIn}
                cashOut={cashOut}
              />
        </Jumbotron>
      </>
    );
  }
}

const mapStateToProps = state => {
  const cashFlowList = state.cashFlowReducer.cashFlow;
  let balance;
  if(state.balanceReducer.balance.availableBalance){
    balance = state.balanceReducer.balance.availableBalance;
  } 
  else {
   balance = 0;
  }

  let datePeriod = {
    startDate: 0,
    endDate: 0
  };
  let cashFlow = [];
  let totalCashIn = 0;
  let totalCashOut = 0;
  let loaded = false;
  const addAllTransaction = (accumulator, currentValue) =>
    accumulator + currentValue["sumOfTransactions"];
  if (cashFlowList && cashFlowList.dailyPositions) {
    cashFlow = cashFlowList.dailyPositions.reduce(
      (result, { day, netCashPosition, cashIn, cashOut }, index) => {

        let date = new Date(day);
        if (index === 0 || date.getDate() === 1) {
          // result.push({
          //   name: date.toLocaleDateString("en-US", { month: "short" }).toLocaleUpperCase(),
          //   cashInAmount: 0,
          //   cashOutAmount: 0,
          //   netCashPosition: netCashPosition
          // })
        }
        result.push({
          name: date.toLocaleDateString("en-US", { year: "2-digit", month: '2-digit', day: '2-digit'}),
          cashInAmount: cashIn.reduce(addAllTransaction, 0),
          cashOutAmount: -cashOut.reduce(addAllTransaction, 0),
          netCashPosition: netCashPosition
        });
        return result;
      },
      []
    );
    


    cashFlow.map(({cashInAmount, cashOutAmount}) => {
      totalCashIn += cashInAmount;
      totalCashOut += cashOutAmount;
      return 0;
    });

    datePeriod = {
      startDate: cashFlowList.periodStart,
      endDate: cashFlowList.periodEnd
    };
    
  }

  let currentMonthFirstDay = new Date();
  let lastMonthFirstDay = new Date();
  currentMonthFirstDay.setDate(1);
  lastMonthFirstDay.setMonth(lastMonthFirstDay.getDate() - 1);
  lastMonthFirstDay.setDate(1);
  const transactions = state.transactionReducer.transactions;
  const currentMonthCashOutTransactions = transactions.filter(
    t => new Date(t.timestamp) >= currentMonthFirstDay && t.type === 2
  );
  const currentMonthCashInTransactions = transactions.filter(
    t => new Date(t.timestamp) >= currentMonthFirstDay && t.type === 1
  );

  const lastMonthCashOutTransactions = transactions.filter(
    t => new Date(t.timestamp) < currentMonthFirstDay && t.type === 2
  );
  const lastMonthCashInTransactions = transactions.filter(
    t => new Date(t.timestamp) < currentMonthFirstDay && t.type === 1
  );

  let cashIn = [];
  let cashOut = [];
  if(transactions.length > 0){
    cashOut = Object.values(
      currentMonthCashOutTransactions.reduce(
        (result, { category, amount }) => {
          if (!result[category]){
            result[category] = {
              category,
              amountCurrMonth: 0
            };
          }
          result[category].amountCurrMonth += amount;
          return result;
        },
        {}
      )
    );
  
    cashIn = Object.values(
      currentMonthCashInTransactions.reduce(
        (result, { category, amount }) => {
          if (!result[category])
            result[category] = {
              category,
              amountCurrMonth: 0
            };
          result[category].amountCurrMonth += amount;
          return result;
        },
        {}
      )
    );
  
    const cashOutLastMonth = Object.values(
      lastMonthCashOutTransactions.reduce(
        (result, { category, amount }) => {
          if (!result[category])
          result[category] = {
            category,
              amountLastMonth: 0
            };
          result[category].amountLastMonth += amount;
          return result;
        },
        {}
      )
      );
    const cashInLastMonth = Object.values(
      lastMonthCashInTransactions.reduce(
        (result, { category, amount }) => {
          if (!result[category])
            result[category] = {
              category,
              amountLastMonth: 0
            };
          result[category].amountLastMonth += amount;
          return result;
        },
        {}
      )
    );
        
    cashIn =  _.map(cashIn,(obj) => {
        return _.assign(obj, _.find(cashInLastMonth, {
            category: obj.category
        }));
    });


    cashOut =  _.map(cashOut, (obj) => {
        return _.assign(obj, _.find(cashOutLastMonth, {
            category: obj.category
        }));
    });

  }

  return {
    cashFlow: cashFlow,
    loaded: loaded,
    monthStartBalance: balance,
    totalCashIn: totalCashIn,
    totalCashOut: Math.abs(totalCashOut),
    cashOfToday: balance + totalCashIn + totalCashOut,
    cashIn: cashIn,
    cashOut: cashOut,
    datePeriod : datePeriod
  };
};

const mapDispatchesToProps = dispatch => {
  return {
    getCashFlowDetails: data => dispatch(getCashFlow(data)),
    getMonthStartBalance: data => dispatch(getMonthStartBalance(data)),
    getAllTransactions: data => dispatch(getAllTransactions(data))
  };
};

export default connect(mapStateToProps, mapDispatchesToProps)(TrendsContainer);
