import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import { FormattedNumber, FormattedDate } from "react-intl";

const RecurringExpensesComponent = ({ data }) => {
  return (
    <>
      <ListGroup.Item className="px-1 list-group-item d-flex justify-content-between align-items-center">
        <span className="p-2">
          <FormattedDate
            value={data['dueDate']} 
            day="2-digit" 
            month="2-digit" 
          />
        </span>
        <span className="p-2">{data['payTo']['name']}</span>
        <span className="ml-auto p-2">
          <FormattedNumber
            value={data['amount']}
            style={`currency`}
            currency="USD"
            minimumFractionDigits={2}
            maximumFractionDigits={2}
          />
        </span>
        <i className="fas fa-times text-muted"></i>
      </ListGroup.Item>
    </>
  );
};

RecurringExpensesComponent.propTypes = {
  data: PropTypes.object.isRequired
}

export default RecurringExpensesComponent;
