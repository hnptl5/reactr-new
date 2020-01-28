import React from 'react';
import Card from 'react-bootstrap/Card';
import { BarChart, Bar, XAxis, YAxis, LabelList } from 'recharts';
import { AmountAxisLabel } from "../common/helpers";


const BenchmarkWidget = (props) => {

    const data = [
        {
        name: 'City',  value: 'Medford, MA', amt: 275000,
        },
        {
          name: 'County',  value: 'Middlesex, MA', amt: 310000,
        },
        {
          name: 'Metro',  value: 'Bost-Camb, MA', amt: 330000,
        },
        {
          name: 'State',  value: 'Massachusetts', amt: 300000,
        },
        {
          name: 'Nation',  value: 'United States', amt: 275000,
        }
      ];

    return (
        <Card>
            <Card.Header>
            Avg Business Annual Revenue
             </Card.Header>
            <BarChart width={400} height={300} layout="vertical" data={data}>
                <XAxis tick={<AmountAxisLabel />} type="number" domain={[0, 'dataMax + 100000']}  padding={{right: 50}} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false}/>
                <Bar dataKey="amt" barSize={15} radius={[0,3,3,0]} fill="#009B7A" >
                    <LabelList dataKey="value" position="right" />
                </Bar>
            </BarChart>
        </Card>
    )
};


export default BenchmarkWidget;