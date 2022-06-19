import React from "react";
import TopBar from "../../Components/TopBar/Topbar";
import SideBar from "../../Components/SideBar/SideBar";
import Home from "../Home/Home";

const AdminPage = () => {
	return (
		<div>
			<TopBar />
			<div className="bodyContainer flex">
				<SideBar />
				<Home />
			</div>
		</div>
	);
};

export default AdminPage;
