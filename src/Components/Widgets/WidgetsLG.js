import React from "react";
import "./Widgets.css";
import user1 from "../../Resources/images/user-1.jpg";
import user2 from "../../Resources/images/user-2.jpg";
import user3 from "../../Resources/images/user-3.jpg";
import user4 from "../../Resources/images/user-4.jpg";
import user5 from "../../Resources/images/user-5.jpg";
const WidgetsLG = () => {
	const Button = ({ type }) => {
		return <button className={"widgetButton " + type}>{type}</button>;
	};
	return (
		<div className="widgets widgets-lg">
			<div className="widgetTittle">Latest Transactions</div>
			<table className="widgetTable w-full table-auto">
				<tr className="widgetTr ">
					<th className="widgetTh">Customer</th>
					<th className="widgetTh">Date</th>
					<th className="widgetTh">Amount</th>
					<th className="widgetTh">Status</th>
				</tr>

				<tr className="widgetTr">
					<td className="widgetUser flex items-center">
						<img src={user1} alt="" className="avatar mr-2" />
						<div className="userName">Susan Carol</div>
					</td>

					<td className="widgetDate">2 Jun 2022</td>
					<td className="widgetAmount">$122.00</td>
					<td className="widgetStatus">
						<Button type="Approved" />
					</td>
				</tr>

				<tr className="widgetTr">
					<td className="widgetUser flex items-center">
						<img src={user2} alt="" className="avatar mr-2" />
						<div className="userName">Susan Carol</div>
					</td>

					<td className="widgetDate">2 Jun 2022</td>
					<td className="widgetAmount">$122.00</td>
					<td className="widgetStatus">
						<Button type="Declined" />
					</td>
				</tr>

				<tr className="widgetTr">
					<td className="widgetUser flex items-center">
						<img src={user3} alt="" className="avatar mr-2" />
						<div className="userName">Susan Carol</div>
					</td>

					<td className="widgetDate">2 Jun 2022</td>
					<td className="widgetAmount">$122.00</td>
					<td className="widgetStatus">
						<Button type="Pending" />
					</td>
				</tr>

				<tr className="widgetTr">
					<td className="widgetUser flex items-center">
						<img src={user4} alt="" className="avatar mr-2" />
						<div className="userName">Susan Carol</div>
					</td>

					<td className="widgetDate">2 Jun 2022</td>
					<td className="widgetAmount">$122.00</td>
					<td className="widgetStatus ">
						<Button type="Approved" />
					</td>
				</tr>

				<tr className="widgetTr">
					<td className="widgetUser flex items-center">
						<img src={user5} alt="" className="avatar mr-2" />
						<div className="userName">Susan Carol</div>
					</td>

					<td className="widgetDate">2 Jun 2022</td>
					<td className="widgetAmount">$122.00</td>
					<td className="widgetStatus ">
						<Button type="Approved" />
					</td>
				</tr>
			</table>
		</div>
	);
};

export default WidgetsLG;
