import React from "react";
import { FormattedNumber } from "react-intl";

export const AmountAxisLabel = (props) => {
    const { x, y, payload } = props;

    let unit = "";
    let value = payload.value;
    if (Math.abs(value) >= 1000) {
        unit = "k";
        value /= 1000;
    }
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
                <FormattedNumber
                    value={value}
                    style={`currency`}
                    currency="USD"
                    minimumFractionDigits={0}
                    maximumFractionDigits={0}
                />
                {unit}
            </text>
        </g>
    );
};

export const AmountStock = (props) => {

    if (props.amount > 0) {
        if (props.title.toLowerCase().includes('in')) {
            return (
                <div className="cash-in">
                    {props.children}
                </div>
            )
        }
        else if (props.title.toLowerCase().includes('out')) {
            return (
                <div className="cash-out">
                    {props.children}
                </div>
            )
        }
    }

    return (
        <div>
            {props.children}
        </div>
    )

}


export const CustomizedDateAxisTick = (props) => {
    const { x, y, payload, index } = props;

    const date = new Date(payload.value);
    let label = payload.value;

    if (!isNaN(date.getDate())) {
        if(date.getDate() === 1 || index === 0) {
            label = date.toLocaleDateString("en-US", { month: "short", day: "numeric"}).toLocaleUpperCase();
        }
        else {
            label = date.toLocaleDateString("en-US", { day: "numeric"}).toLocaleUpperCase();
        }
    }
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
                {label}
            </text>
        </g>
    );
};