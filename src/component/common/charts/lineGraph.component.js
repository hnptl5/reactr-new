import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {AmountAxisLabel} from "../helpers";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    let percent;
    if(payload === null){
      percent = 0;
    }
    else {
      if(payload[1].value > payload[0].value) {
        percent = Math.round(
          ((payload[1].value - payload[0].value) / payload[0].value) * 100
        );
      }
      else {
        percent = Math.round(
          ((payload[0].value - payload[1].value) / payload[1].value) * 100
        );
      }
    }
    return (
      <div className="bg-white border rounded p-2">
        <p className="font-weight-bold">
          $
          {payload !== null ? payload[1].value.toLocaleString(navigator.language, {
            minimumFractionDigits: 0
          }) : 0 }
        </p>
        {percent > 0 ? (
          <p className="desc"> {percent}% higher than last year.</p>
        ) : (
          <p className="desc"> {percent}% lower than last year.</p>
        )}
      </div>
    );
  }

  return null;
};

class LineGraphComponent extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={this.props.data}
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
        >
          <CartesianGrid stroke="#fff" />
          <XAxis dataKey="name" interval={0}/>
          <YAxis axisLine={false} tick={<AmountAxisLabel />} tickMargin={30}/>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            name="Last Year"
            type="monotone"
            dataKey="lastYear"
            stroke="#b2b2b2"
            strokeWidth="3"
          />
          <Line
            name="Current Year"
            type="monotone"
            dataKey="current"
            stroke="#009b7a"
            strokeWidth="3"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}


LineGraphComponent.propTypes = {
  data: PropTypes.array.isRequired
}

export default LineGraphComponent;