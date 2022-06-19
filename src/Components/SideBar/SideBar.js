import React from "react";
import { MdOutlineLineStyle } from "react-icons/md";
import { MdOutlineTimeline } from "react-icons/md";
import { MdOutlineTrendingUp } from "react-icons/md";
import { MdOutlineStorefront } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineBarChart } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { MdError } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import "./SideBar.css";

const SideBar = () => {
	return (
		<div className="sideBar ">
			<div className="sideBarWrapper">
				<div className="sideBarMenu mb-3">
					<h3 className="sideBarTitle ">Dashboard</h3>
					<ul className="sideBarList">
						<li className="sideBarListItem active">
							<MdOutlineLineStyle className="sideBarIcon" />
							Home
						</li>
						<li className="sideBarListItem">
							<MdOutlineTimeline className="sideBarIcon" />
							Analytics
						</li>
						<li className="sideBarListItem">
							<MdOutlineTrendingUp className="sideBarIcon" />
							Sales
						</li>
					</ul>
				</div>
				<div className="sideBarMenu mb-3">
					<h3 className="sideBarTitle ">Quick Menu</h3>
					<ul className="sideBarList">
						<li className="sideBarListItem active">
							<FaRegUser className="sideBarIcon" />
							Users
						</li>
						<li className="sideBarListItem">
							<MdOutlineStorefront className="sideBarIcon" />
							Products
						</li>
						<li className="sideBarListItem">
							<MdOutlineAttachMoney className="sideBarIcon" />
							Transactions
						</li>
						<li className="sideBarListItem">
							<MdOutlineBarChart className="sideBarIcon" />
							Reports
						</li>
					</ul>
				</div>
				<div className="sideBarMenu mb-3">
					<h3 className="sideBarTitle ">Notification</h3>
					<ul className="sideBarList">
						<li className="sideBarListItem active">
							<MdMailOutline className="sideBarIcon" />
							Mail
						</li>
						<li className="sideBarListItem">
							<MdOutlineDynamicFeed className="sideBarIcon" />
							Feedback
						</li>
						<li className="sideBarListItem">
							<MdOutlineMessage className="sideBarIcon" />
							Message
						</li>
					</ul>
				</div>
				<div className="sideBarMenu mb-3">
					<h3 className="sideBarTitle ">Stuff</h3>
					<ul className="sideBarList">
						<li className="sideBarListItem active">
							<MdWorkOutline className="sideBarIcon" />
							Manage
						</li>
						<li className="sideBarListItem">
							<MdOutlineTimeline className="sideBarIcon" />
							Analytics
						</li>
						<li className="sideBarListItem">
							<MdError className="sideBarIcon" />
							Report
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
