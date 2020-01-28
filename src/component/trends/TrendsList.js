import React from "react";
import { FormattedNumber } from "react-intl";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import './trends.scss';

const COLORS = ["#FFC857", "#009B7A", "#034DA0", "#0391B3"];

const getDiffContent = (amountDiff) => {
    let content = null;

    if (amountDiff > 0) {

        content = (
            <div>
                <i className="fa fa-arrow-up font-weight-bold"> </i>
                    <FormattedNumber value={amountDiff} style={`currency`} currency="USD" minimumFractionDigits={0} maximumFractionDigits={0} />
                
            </div>
        )
    } else if (amountDiff < 0) {
        content = (
            <div>          
                <i className="fa fa-arrow-down font-weight-bold"> </i>
                <FormattedNumber value={Math.abs(amountDiff)} style={`currency`} currency="USD" minimumFractionDigits={0} maximumFractionDigits={0} />
                
            </div>
        )
    } else {
        content = (
            <div>
                <FormattedNumber value={amountDiff} style={`currency`} currency="USD" minimumFractionDigits={0} maximumFractionDigits={0} />
            </div>
        )
    }

    return (content);
}

const Item = props => {
    const { category, amountCurrMonth, amountLastMonth } = props.item;

    return (
        <tr>
            <td className="category-td">
                <div className="category-div" style={{ backgroundColor: COLORS[props.index % COLORS.length] }} />
                {category}
            </td>
            <td>
                <FormattedNumber value={amountCurrMonth} style={`currency`} currency="USD" minimumFractionDigits={0} maximumFractionDigits={0} />
            </td>
            <td>
                <FormattedNumber value={amountLastMonth} style={`currency`} currency="USD" minimumFractionDigits={0} maximumFractionDigits={0} />

            </td> 
            <td> {getDiffContent(amountCurrMonth - amountLastMonth)}</td>
        </tr>
    );
};

const TrendsList = props => {
    const { title, list } = props;

    let contents = [];

    if (list && list.length > 0) {
        contents = list.map((item, index) => {
            return (
                <Item key={index + 1} item={item} index={index} />
            );
        });
    }

    return (
        <div>
            <Card>
                <Table size={"xl"} className="t-list-table text-left">
                    <thead>
                        <tr>
                            <th>
                                <div className="transactions-table-head">
                                    {title}
                                </div>
                            </th>
                            <th></th>
                            <th></th>
                            <th className="text-right">
                                <div className="transactions-table-head">
                                    <i className="fas fa-ellipsis-h" aria-hidden="true" />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th style={{ width: "20%" }}>Category</th>
                            <th style={{ width: "30%" }}>Received This Month</th>
                            <th style={{ width: "30%" }}>Received Last Month</th>
                            <th style={{ width: "20%" }}></th>
                        </tr>
                    </thead>
                    <tbody  className="category-font">{contents}</tbody>
                </Table>
            </Card>
        </div>
    );
};

// TransactionList.propTypes = {
//   title: PropTypes.string.isRequired,
//   aggregate: PropTypes.number.isRequired,
//   transactions: PropTypes.array.isRequired,
//   sort: PropTypes.string.isRequired,
//   allTransactionsDisplayed: PropTypes.bool.isRequired,

// };

export default TrendsList;
