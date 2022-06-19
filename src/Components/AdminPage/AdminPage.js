import React from "react";
import TopBar from "../TopBar/Topbar";
import SideBar from "../SideBar/SideBar";

const AdminPage = () => {
	return (
		<div>
			<TopBar />
			<div className="bodyContainer flex">
				<SideBar />
				<h6>other pages</h6>
			</div>
		</div>
	);
};

export default AdminPage;
