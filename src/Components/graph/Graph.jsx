import "./graph.css";
import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";





export default function Graph() {
  const sleep_infos =useSelector(state => state.SleepInfosReducer);
  const data = [
    {
      name: "Sommeil profond",
      sommeil: sleep_infos.deep_sleep,
    },
  
    {
      name: "Sommeil léger",
      sommeil: sleep_infos.light_sleep,
    },
    
    {
      name: "Sommeil paradoxal",
      sommeil: sleep_infos.rem_phase,
    },
  ];

  return ( 
    <article className="widget widget-heart">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sommeil" fill="#82ca9d" />
    </BarChart>
    </article>
  );
}
