import React from 'react';
import PropTypes from "prop-types";
import { FormattedNumber } from 'react-intl';
import {AmountStock} from '../common/helpers';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Summary = (props) => {
    const { cashIn, cashOut } = props;
    const balance = props.monthStartBalance;
    const month = new Date(0).toLocaleDateString("en-US", { month: "long" });

    return (
        <div>
            <Card>
                <Table borderless style={{ marginBottom: 0 }} className="text-center">
                    <thead>
                        <tr>
                            <td className="summary">
                                <div className="summary-header">
                                    {month} Starting Balance
                                </div>
                                <div className="summary-footer">
                                    <AmountStock title="" amount={balance !== undefined ? balance.availableBalance : 0}>
                                        <FormattedNumber value={balance !== undefined ? balance.availableBalance : 0} style={`currency`} currency="USD" />
                                    </AmountStock>
                                </div>
                            </td>
                            <td className="border-left summary">
                                <div className="summary-header">
                                    Cash In
                                </div>
                                <div className="summary-footer">
                                    <AmountStock title="cash-in" amount={cashIn}>
                                        +<FormattedNumber value={cashIn} style={`currency`} currency="USD" />
                                    </AmountStock>
                                </div>
                            </td>
                            <td className="border-left summary">
                                <div className="summary-header">
                                    Cash Out
                                </div>
                                <div className="summary-footer">
                                    <AmountStock title="cash-out" amount={cashOut}>
                                        -<FormattedNumber value={cashOut} style={`currency`} currency="USD" />
                                    </AmountStock>
                                </div>
                            </td>
                            <td className="border-left summary">
                                <div className="summary-header">
                                    Cash On Hand Today
                                </div>
                                <div className="summary-footer">
                                    <AmountStock title="" amount={balance !== undefined ? balance.availableBalance + cashIn - cashOut : 0}>
                                        <FormattedNumber value={balance !== undefined ? balance.availableBalance + cashIn - cashOut : 0} style={`currency`} currency="USD" />
                                    </AmountStock>
                                </div>
                            </td>
                        </tr>
                    </thead>
                </Table>
            </Card>
        </div>
    )
}


Summary.propTypes = {
    cashIn: PropTypes.number.isRequired,
    cashOut: PropTypes.number.isRequired
  };

export default Summary;