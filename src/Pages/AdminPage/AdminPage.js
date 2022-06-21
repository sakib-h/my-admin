import React from "react";
import TopBar from "../../Components/TopBar/Topbar";
import SideBar from "../../Components/SideBar/SideBar";
import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";
import UserList from "../UserList/UserList";
import Error from "../Error/Error";

const AdminPage = () => {
	return (
		<div>
			<TopBar />
			<div className="bodyContainer flex">
				<SideBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="users" element={<UserList />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</div>
		</div>
	);
};

export default AdminPage;
