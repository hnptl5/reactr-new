import React from "react";
import PropTypes from "prop-types";
import TrendsList from "./TrendsList";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import StackBarChart from "../../component/common/charts/stackedBarChart";
import { AmountStock } from "../common/helpers";
import { FormattedNumber } from "react-intl";

const TrendsComponent = props => {
  const {
    datePeriod,
    monthStartBalance,
    cashFlow,
    totalCashIn,
    totalCashOut,
    cashOfToday,
    onSelectDays,
    selected
  } = props;
  const month = new Date(0).toLocaleDateString("en-US", { month: "long" });
  let startDate = new Date(datePeriod.startDate);

  let dateDisplay =
    startDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    }) + " - Today";
  return (
    <div>
      <div className="clearfix pb-4">
        <h5 className="w-75 float-left font-weight-bold">Cash Flow Trends</h5>
      </div>
      <Card>
        <Card.Header className="row no-gutters">
          <div className="col-2">Cash In &amp; Cash Out</div>
          <div className="col-5 text-muted">{dateDisplay}</div>
          <div className="col text-center d-flex align-items-center ">
            <NavDropdown title={selected + " Days"} id="nav-dropdown">
              <NavDropdown.Item
                eventKey={14}
                active={selected === 14}
                onSelect={onSelectDays}
              >
                14 Days
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey={30}
                active={selected === 30}
                onSelect={onSelectDays}
              >
                30 Days
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className="col">
            <select className="custom-select border-0">
              <option>Compare</option>
            </select>
          </div>
          <div className="col">
            <select className="custom-select border-0">
              <option>Other</option>
            </select>
          </div>
        </Card.Header>
        <Card.Body>
          <StackBarChart data={cashFlow}></StackBarChart>
        </Card.Body>
        <Card.Footer>
          <Table borderless style={{ marginBottom: 0 }} className="text-center">
            <thead>
              <tr>
                <td className="summary">
                  <div className="summary-header">{month} Starting Balance</div>
                  <div className="summary-footer">
                    <AmountStock title="" amount={monthStartBalance}>
                      <FormattedNumber
                        value={monthStartBalance}
                        style={`currency`}
                        currency="USD"
                      />
                    </AmountStock>
                  </div>
                </td>
                <td className="border-left summary">
                  <div className="summary-header">Cash In</div>
                  <div className="summary-footer">
                    <AmountStock title="cash-in" amount={totalCashIn}>
                      +
                      <FormattedNumber
                        value={totalCashIn}
                        style={`currency`}
                        currency="USD"
                      />
                    </AmountStock>
                  </div>
                </td>
                <td className="border-left summary">
                  <div className="summary-header">Cash Out</div>
                  <div className="summary-footer">
                    <AmountStock title="cash-out" amount={totalCashOut}>
                      -
                      <FormattedNumber
                        value={totalCashOut}
                        style={`currency`}
                        currency="USD"
                      />
                    </AmountStock>
                  </div>
                </td>
                <td className="border-left summary">
                  <div className="summary-header">Cash On Hand Today</div>
                  <div className="summary-footer">
                    <AmountStock title="" amount={cashOfToday}>
                      <FormattedNumber
                        value={cashOfToday}
                        style={`currency`}
                        currency="USD"
                      />
                    </AmountStock>
                  </div>
                </td>
              </tr>
            </thead>
          </Table>
        </Card.Footer>
      </Card>
      <br />
      <Row>
        <Col md={6}>
          <Card>
            <TrendsList title="Cash In" list={props.cashIn} />
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <TrendsList title="Cash Out" list={props.cashOut} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

TrendsComponent.propTypes = {
  datePeriod : PropTypes.shape({
    startDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
  }),
  monthStartBalance: PropTypes.number.isRequired,
  cashFlow: PropTypes.array.isRequired,
  totalCashIn: PropTypes.number.isRequired,
  totalCashOut: PropTypes.number.isRequired,
  cashOfToday: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
}

export default TrendsComponent;
