import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import AccountComponent from "./AccountComponent";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { getAllAccounts} from "../../../redux/actions/accountAction";
import "./account.scss";

class AccountContainer extends Component {

  componentDidMount() {
    if(this.props.accountSize === 0){
      this.props.getAllAccounts({});
    }
  }

  render() {

    const {checking, savings} = this.props;
    return (
      <Card>
        <Card.Header>
          <div className="row no-gutters">
            <div className="col-11">Business Bank Account</div>
            <div className="col-1 text-right">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="pt-0">
          <ListGroup variant="flush">
            {checking.map(account => (
              <AccountComponent key={account.id} data={account} />
            ))}
          </ListGroup>
        </Card.Body>
    
        <Card.Header>
        <hr className="top-border" />
          <div className="row no-gutters">
            <div className="col-11">Savings Bank Account</div>
            <div className="col-1 text-right">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
        </Card.Header>

        <Card.Body className="pt-0">
          <ListGroup variant="flush">
            {savings.map(account => (
              <AccountComponent key={account.id} data={account} />
            ))}
          </ListGroup>
        </Card.Body>

        <Card.Footer className="text-center">
          <Card.Link className="font-weight-bold h6" href="#">
            Add Accounts
          </Card.Link>
        </Card.Footer>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllAccounts : (data) => dispatch(getAllAccounts(data))
  }
}

const mapStateToProps = state => {
  let accounts =  state.accountsReducer.accounts;
  let checkingAccounts = accounts.filter(account => account.type === 1);
  let savingsAccounts = accounts.filter(account => account.type === 2);

  return {
    accountSize: accounts.length,
    checking: checkingAccounts,
    savings: savingsAccounts,
  }
}

AccountContainer.propTypes = {
  getAllAccounts: PropTypes.func.isRequired,
  checking: PropTypes.array.isRequired,
  savings: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
