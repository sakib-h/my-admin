import React from "react";
import { MdOutlineLineStyle } from "react-icons/md";
import { MdOutlineTimeline } from "react-icons/md";
import { MdOutlineTrendingUp } from "react-icons/md";
import "./SideBar.css";

const SideBar = () => {
	return (
		<div className="sideBar ">
			<div className="sideBarWrapper">
				<div className="sideBarMenu mb-5">
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
			</div>
		</div>
	);
};

export default SideBar;
