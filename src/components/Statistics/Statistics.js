import React from "react";
import "./Statistics.css"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";


const Statistics = () => {
  const data = [
    {
      id: 1,
      name: "React",
      logo: "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
      total: 8,
    },
    {
      id: 2,
      name: "JavaScript",
      logo: "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
      total: 9,
    },
    {
      id: 4,
      name: "CSS",
      logo: "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
      total: 8,
    },
    {
      id: 5,
      name: "Git",
      logo: "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
      total: 11,
    },
  ];
    
    return (
      <div className="style">
        <h3>Total Quiz</h3>
        <ResponsiveContainer width="80%" aspect={3}>

        <LineChart
          width={450}
          height={350}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
        </LineChart>
        </ResponsiveContainer>

      </div>
    );
};

export default Statistics;