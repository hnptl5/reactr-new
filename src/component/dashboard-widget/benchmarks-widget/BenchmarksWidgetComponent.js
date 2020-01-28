import React from "react";
import PropTypes from "prop-types";
import { FormattedNumber } from "react-intl";
import { BarChart, Bar, XAxis, YAxis, LabelList, ResponsiveContainer } from "recharts";

const CustomizedLabel = props => {
  const { y, value, width } = props;
  return (
    <g>
      <text x={width > 100 ? width - 50 : 70} y={y + 15} fontWeight="bold">
        <tspan>
          <FormattedNumber
            value={value}
            style={`currency`}
            currency="USD"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
        </tspan>
      </text>
    </g>
  );
};


const BenchmarksWidgetComponent = props => {
    let benchmarkData = [];
    if(props.industryBenchmark !== undefined){
      benchmarkData = 
        [{
          name: props.industryBenchmark["name"],
          name2: "You",
          value: props.industryBenchmark["peerValue"],
          value2: props.industryBenchmark["organizationValue"]
        }];
    }

    return (
      <ResponsiveContainer width="100%" height={100}>
        <BarChart
          layout="vertical"
          data={benchmarkData}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10
          }}
          barCategoryGap={-10}
        >
          <XAxis tick={false} type="number" hide/>
          <YAxis type="category" axisLine={false} tickLine={false} hide />
          <Bar dataKey="value" radius={[0, 3, 3, 0]} fill="#fff">
            <LabelList dataKey="name" position="insideLeft" fontWeight="bold" />
            <LabelList dataKey="value" content={CustomizedLabel} />
          </Bar>
          <Bar dataKey="value" radius={[0, 3, 3, 0]} fill="#009B7A" />
          <Bar dataKey="value2" radius={[0, 3, 3, 0]} fill="#fff">
            <LabelList dataKey="name2" position="insideLeft" fontWeight="bold" />
            <LabelList dataKey="value2" content={CustomizedLabel} />
          </Bar>
          <Bar dataKey="value2" radius={[0, 3, 3, 0]} fill="#025744" />
        </BarChart>
        </ResponsiveContainer>
      )
};

BenchmarksWidgetComponent.propTypes = {
  industryBenchmark: PropTypes.object.isRequired
}

export default BenchmarksWidgetComponent;
