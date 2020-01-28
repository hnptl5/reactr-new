import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";

const AccountComponent = ({ data }) => {
  // const accountType = {
  //     1: "Checking Account",
  //     2: "Saving Account"
  // };

  return (
    <ListGroup.Item>
      <div className="row no-gutters">
        <div className="col-9">
          {data.institution.id && (
            <img
              src={"/institution/" + data.institution.id + ".png"}
              className="img-fluid"
              alt={data.institution.displayName}
            />
          )}
          <h6 className="mb-2 font-weight-bold" style={{ fontSize: "0.75rem" }}>
            {data.nickname}
          </h6>
          <h5 className="font-weight-bold">
            $
            {data.availableBalance.toLocaleString(navigator.language, {
              minimumFractionDigits: 2
            })}
          </h5>
        </div>
        <div className="col-3 pt-3 mt-3">
          {data.accountNumber && (
            <span className="font-weight-bold text-muted">
              #{data.accountNumber.substr(data.accountNumber.length - 4, 4)}
            </span>
          )}
        </div>
      </div>
    </ListGroup.Item>
  );
};

AccountComponent.propTypes = {
  data: PropTypes.shape({
    accountNumber: PropTypes.string, //.isRequired,
    availableBalance: PropTypes.number.isRequired,
    institution: PropTypes.shape({
      displayName: PropTypes.string
    }).isRequired,
    presentBalance: PropTypes.number.isRequired,
    type: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired
  }).isRequired
};

export default AccountComponent;
