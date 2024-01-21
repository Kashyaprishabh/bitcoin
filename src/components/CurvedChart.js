import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';


const CurvedChart = ({currentData}) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        data={currentData.graph}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid stroke="transparent" />
        <XAxis dataKey="name" hide={true} />
        <YAxis hide={true} />
        <Tooltip />
        <Area type="monotone" dataKey="$" stroke= {currentData.stroke} fill= {currentData.fill} /> 
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CurvedChart;
