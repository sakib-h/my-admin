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
import { Link } from "react-router-dom";
const SideBar = () => {
	return (
		<div className="sideBar ">
			<div className="sideBarWrapper">
				<div className="sideBarMenu mb-3">
					<h3 className="sideBarTitle ">Dashboard</h3>
					<Link to="/" className="sideBarListItem active">
						<MdOutlineLineStyle className="sideBarIcon" />
						Home
					</Link>

					<Link to="/analytics" className="sideBarListItem">
						<MdOutlineTimeline className="sideBarIcon" />
						Analytics
					</Link>

					<Link to="/sales" className="sideBarListItem">
						<MdOutlineTrendingUp className="sideBarIcon" />
						Sales
					</Link>
				</div>
				<div className="sideBarMenu mb-3">
					<h3 className="sideBarTitle ">Quick Menu</h3>

					<Link to="/users" className="sideBarListItem active">
						<FaRegUser className="sideBarIcon" />
						Users
					</Link>
					<Link to="/products" className="sideBarListItem">
						<MdOutlineStorefront className="sideBarIcon" />
						Products
					</Link>
					<Link to="/transactions" className="sideBarListItem">
						<MdOutlineAttachMoney className="sideBarIcon" />
						Transactions
					</Link>
					<Link to="/reports" className="sideBarListItem">
						<MdOutlineBarChart className="sideBarIcon" />
						Reports
					</Link>
				</div>
				<div className="sideBarMenu mb-3">
					<h3 className="sideBarTitle ">Notification</h3>

					<Link to="/mail" className="sideBarListItem active">
						<MdMailOutline className="sideBarIcon" />
						Mail
					</Link>
					<Link to="/feedback" className="sideBarListItem">
						<MdOutlineDynamicFeed className="sideBarIcon" />
						Feedback
					</Link>
					<Link to="/message" className="sideBarListItem">
						<MdOutlineMessage className="sideBarIcon" />
						Message
					</Link>
				</div>
				<div className="sideBarMenu mb-3">
					<h3 className="sideBarTitle ">Stuff</h3>

					<Link to="/manage" className="sideBarListItem active">
						<MdWorkOutline className="sideBarIcon" />
						Manage
					</Link>
					<Link to="/analytics" className="sideBarListItem">
						<MdOutlineTimeline className="sideBarIcon" />
						Analytics
					</Link>
					<Link to="/report" className="sideBarListItem">
						<MdError className="sideBarIcon" />
						Report
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
