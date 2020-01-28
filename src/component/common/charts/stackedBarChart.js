import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { FormattedNumber } from "react-intl";
import { AmountAxisLabel, CustomizedDateAxisTick } from "../helpers";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from "recharts";


const CustomTooltip = (props) => {
  const { active, payload, label, separator } = props;

  let content = null;
  let date = new Date(label);
  let dateLabel = label;

  if(!isNaN(date.getDate())){
    dateLabel = date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  }
 
  if (active && !isNaN(date.getDate())) {

    content = (
      <div className="custom-tooltip">
        <p className="date">{dateLabel}</p>
        <p className="cash-in">
          {payload[0].name + separator}
          <FormattedNumber value={payload[0].value} style={`currency`} currency="USD" minimumFractionDigits={0} maximumFractionDigits={0} />
        </p>
        <p className="cash-in">
          {payload[1].name + separator}
          <FormattedNumber value={payload[1].value} style={`currency`} currency="USD" minimumFractionDigits={0} maximumFractionDigits={0} />

        </p>
        <p className="cash-out">
          {payload[2].name + separator}
          <FormattedNumber value={payload[2].value} style={`currency`} currency="USD" minimumFractionDigits={0} maximumFractionDigits={0} />
        </p>
      </div>
    )
  }

  return content;
}

class StackBarChart extends PureComponent {

  render() {

    let jsonStr = JSON.stringify(this.props.data);
    jsonStr = jsonStr.replace(/netCashPosition/g, "Net Balance")
      .replace(/cashInAmount/g, "Cash In")
      .replace(/cashOutAmount/g, "Cash Out");

    let data = JSON.parse(jsonStr);
    return (
      <ResponsiveContainer width='100%' height={300} >
        <ComposedChart data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }} stackOffset="sign">

          <XAxis dataKey="name"  tickLine={false} tick={<CustomizedDateAxisTick />} style={{ width: 10 }} interval={0}/>
          <YAxis axisLine={false} tickLine={false} tick={<AmountAxisLabel />} tickMargin={40} />
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" />
          <Line dataKey="Net Balance" stroke="#009B7A" strokeWidth={3} />
          <Bar dataKey="Cash In" barSize={15} fill="#009B7A" stackId="stack" />
          <Bar dataKey="Cash Out" barSize={15} fill="#FF6C1E" stackId="stack" />
        </ComposedChart>
      </ResponsiveContainer >
    );
  }
}


StackBarChart.propTypes = {
  data: PropTypes.array.isRequired
}

export default StackBarChart;