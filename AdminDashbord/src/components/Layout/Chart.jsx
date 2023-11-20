import React from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }]

const Chart = () => {
  return (
    <div>
      {/* <LineChart
        width={700}
        height={350}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart> */}
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line
          name="pv of pages"
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
        />
        <Line
          name="uv of pages"
          type="monotone"
          dataKey="uv"
          stroke="#82ca9d"
        />
      </LineChart>
    </div>
  )
}

export default Chart
