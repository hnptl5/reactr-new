import React, { useState } from "react";
import PropTypes from "prop-types";
import Summary from "./Summary";
import TransactionList from "./TransactionList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const TransactionsHeader = props => {
  let { startDate = 0, endDate = 0 } = props.transactionsPeriod;

  startDate = new Date(startDate);
  endDate = new Date(endDate);

  let month = startDate.toLocaleDateString("en-US", { month: "long" });
  let startDay = startDate.toLocaleDateString("en-US", { day: "numeric" });
  let endDay = endDate.toLocaleDateString("en-US", { day: "numeric" });
  let year = startDate.toLocaleDateString("en-US", { year: "numeric" });

  return (
    <Row style={{ padding: 15, flexWrap: "nowrap" }} >
      <Col md={8} className="transactions-date-range" >
        {`${month} ${startDay}-${endDay}, ${year}`}
      </Col>
      <Col md={4} className="text-right">
        <Button variant="info" className="transactions-button">
          Add New
          <i className="fa fa-plus" style={{ marginLeft: 5 }} />
        </Button>
        <i className="far fa-bell" style={{ marginLeft: 20 }} />
      </Col>
    </Row>
  );
};

const sortTransactionsArray = (transactions, eventKey) => {
  switch (eventKey) {
    case "Sort List By":
      return transactions;
    case "By Date":
      return transactions.sort((t1, t2) => {
        const a = new Date(t1["timestamp"]);
        const b = new Date(t2["timestamp"]);
        return a > b ? -1 : a < b ? 1 : 0;
      });
    case "By Category":
      return transactions;
    case "By Vendor":
      return transactions;
    case "By Amount (High to Low)":
      return transactions.sort((t1, t2) => {
        const a = t1["amount"];
        const b = t2["amount"];
        return a > b ? -1 : a < b ? 1 : 0;
      });
    case "By Amount (Low to High)":
      return transactions.sort((t1, t2) => {
        const a = t1["amount"];
        const b = t2["amount"];
        return a < b ? -1 : a > b ? 1 : 0;
      });
    default:
      return transactions;
  }
};

const TransactionsComponent = props => {
  const {
    cashInTransactions,
    cashInAggregate,
    cashOutTransactions,
    cashOutAggregate,
    transactionsPeriod,
    monthStartBalance
  } = props;
  const [numCashInTransactions, setNumCashInTransactions] = useState(5);
  const [numCashOutTransactions, setNumCashOutTransactions] = useState(5);
  const [cashInSort, setCashInSort] = useState("Sort List By");
  const [cashOutSort, setCashOutSort] = useState("Sort List By");
  return (
    <Container fluid>
      <TransactionsHeader transactionsPeriod={transactionsPeriod} />
      <Summary cashIn={cashInAggregate} cashOut={cashOutAggregate} monthStartBalance={monthStartBalance} />
      <br />
      <TransactionList
        title="Cash In"
        aggregate={cashInAggregate}
        transactions={
          sortTransactionsArray(cashInTransactions, cashInSort).slice(0,numCashInTransactions)
        }
        addTransactions={() =>
          setNumCashInTransactions(numCashInTransactions + 5)
        }
        sort={cashInSort}
        sortTransactions={eventKey => setCashInSort(eventKey)}
        allTransactionsDisplayed={
          cashInTransactions.length > numCashInTransactions
        }
        sign="+"
      />
      <br />
      <TransactionList
        title="Cash Out"
        aggregate={cashOutAggregate}
        transactions={
          sortTransactionsArray(cashOutTransactions, cashOutSort).slice(0, numCashOutTransactions)
        }
        addTransactions={() =>
          setNumCashOutTransactions(numCashOutTransactions + 5)
        }
        sort={cashOutSort}
        sortTransactions={eventKey => setCashOutSort(eventKey)}
        allTransactionsDisplayed={
          cashOutTransactions.length > numCashOutTransactions
        }
        sign="-"
      />
    </Container>
  );
};

TransactionsComponent.propTypes = {
  cashInTransactions: PropTypes.array.isRequired,
  cashOutTransactions: PropTypes.array.isRequired,
  cashInAggregate: PropTypes.number.isRequired,
  cashOutAggregate: PropTypes.number.isRequired,
};


export default TransactionsComponent;
