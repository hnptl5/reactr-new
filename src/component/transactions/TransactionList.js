import React from "react";
import PropTypes from "prop-types";
import { FormattedDate, FormattedNumber } from "react-intl";
import {AmountStock} from "../common/helpers";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import Table from "react-bootstrap/Table";

const Item = props => {
  const { timestamp, notes, amount, category } = props.transaction;

  const categoryOptions = [
    { value: "Food Products", label: "Food Products" },
    { value: "Equipment", label: "Equipment" },
    { value: "Gas", label: "Gas" },
    { value: "Maintenance", label: "Maintenance" },
    { value: "Payroll", label: "Payroll" },
    { value: "Utilities", label: "Utilities" }
  ];

  return (
    <tr>
      <td style={{width: "10%" }}>
        <div className="transactions-table-item-date">
          <FormattedDate value={timestamp} day="2-digit" month="2-digit" />
        </div>
      </td>
      <td style={{width: "55%" }}>
        <div className="transactions-table-item-notes">
          {notes}
        </div>
      </td>
      <td style={{width: "20%" }}>
        <div className="container">
          <div className="row">
            <div className="col transactions-table-item-dropdown">
              <Dropdown as={ButtonGroup} style={{ display: "flex" }}>
                <Button
                  variant="outline-primary"
                  className="border-right-0"
                  size="sm"
                  style={{ borderRadius: "6px 0 0 6px" }}
                >
                  Check
                </Button>
                <Dropdown.Toggle
                  split
                  className="border-left-radius-0"
                  variant="outline-primary"
                  id="dropdown-custom-2"
                  size="sm"
                  style={{ borderRadius: "0 6px 6px 0" }}
                />
                <Dropdown.Menu>
                  {categoryOptions.map(option => {
                    return (
                      <Dropdown.Item
                        key={option.value}
                        eventKey={option.value}
                        active={option.value === category}
                      >
                        {option.label}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          
            <div className="col transactions-table-item-icon">
              <i className="fa fa-edit fa-2x" />
            </div>
          </div>
        </div>
      </td>
      <td style={{ width: "15%" }}>
        <div className="transactions-table-item-amount">
          {props.sign}
          <FormattedNumber value={amount} style={`currency`} currency="USD" />
        </div>
      </td>
    </tr>
  );
};

const TransactionList = props => {
  const {
    title,
    aggregate,
    transactions,
    addTransactions,
    sort,
    sortTransactions
  } = props;
  const sortOptions = [
    { value: "By Date", label: "By Date" },
    { value: "By Category", label: "By Category" },
    { value: "By Vendor", label: "By Vendor" },
    { value: "By Amount (High to Low)", label: "By Amount (High to Low)" },
    { value: "By Amount (Low to High)", label: "By Amount (Low to High)" }
  ];

  const handleSelect = eventKey => {
    sortTransactions(eventKey);
  };

  const handleClick = event => {
    event.preventDefault();
    addTransactions();
  };

  let list = [];

  if (transactions && transactions.length > 0) {
    list = transactions.map(transaction => {
      return (
        <Item
          key={transaction.id}
          transaction={transaction}
          sign={props.sign}
        />
      );
    });
  }

  return (
    <div>
      <Card>
        <Table className="t-list-table">
          <thead>
            <tr>
              <th>
                <div className="transactions-table-head">
                  {title}
                </div>
              </th>
              <th></th>
              <th className="text-right">
                <div className="transactions-table-head">
                  <AmountStock title={title} amount={aggregate}>
                    {props.sign}
                    <FormattedNumber
                      value={aggregate}
                      style={`currency`}
                      currency="USD"
                    />
                  </AmountStock>
                </div>
              </th>
              <th className="border-left text-center">
                <div className="transactions-table-sort">
                  <NavDropdown title={sort} id="nav-dropdown">
                    <NavDropdown.Item disabled eventKey="Sort List By">
                      Sort List By
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    {sortOptions.map(option => {
                      return (
                        <NavDropdown.Item
                          key={option.value}
                          eventKey={option.value}
                          active={option.value === sort}
                          onSelect={handleSelect}
                        >
                          {option.label}
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </Table>
        {props.allTransactionsDisplayed && (
          <Card.Footer className="text-center">
            <Card.Link href="" className="h6" onClick={handleClick}>
              see more
              <i className="fa fa-chevron-down pl-2" />
            </Card.Link>
          </Card.Footer>
        )}
      </Card>
    </div>
  );
};

TransactionList.propTypes = {
  title: PropTypes.string.isRequired,
  aggregate: PropTypes.number.isRequired,
  transactions: PropTypes.array.isRequired,
  sort: PropTypes.string.isRequired,
  allTransactionsDisplayed: PropTypes.bool.isRequired,

};

export default TransactionList;
