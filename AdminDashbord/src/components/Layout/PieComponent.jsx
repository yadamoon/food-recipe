import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'

const data = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 300 },
  { name: 'D', value: 200 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      className="hover:opacity-75 "
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}
const PieComponent = () => {
  return (
    <div className="  justify-center items-center  grid grid-cols-2">
      <div className=" col-span-2">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                className="p-10 "
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <br />
      <div className="col-span-2">
        <div className="grid grid-cols-4 ">
          {data.map((list, index) => (
            <div className="">
              <p className=" text-teal-600 col-span-1   ">
                <span> {list.name}</span>
              </p>
            </div>
          ))}
          {COLORS.map((list, index) => (
            <div
              key={index}
              className="border w-5 h-4 justify-center items-center text-center "
              style={{ backgroundColor: list }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default PieComponent
