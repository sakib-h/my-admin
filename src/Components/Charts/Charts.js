import React from "react";
import "./Charts.css";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const Charts = ({ data, title }) => {
	return (
		<div className="charts">
			<h3 className="chartTitle">{title}</h3>
			<ResponsiveContainer width="100%" aspect={3 / 1}>
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="5 5" />
					<XAxis dataKey="Month" stroke="#5550bd" />
					<YAxis stroke="#5550bd" />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="Active Users"
						stroke="#5550bd"
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Charts;
