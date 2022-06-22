import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import user1 from "../../Resources/images/user-1.jpg";
import { MdOutlineDeleteOutline } from "react-icons/md";
import "./UserList.css";
import { Link } from "react-router-dom";
const UserList = () => {
	const columns = [
		{ field: "id", headerName: "ID", width: 85 },
		{
			field: "user",
			headerName: "User",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="userList flex items-center justify-evenly">
						<img
							src={params.row.avatar}
							alt=""
							className="avatar"
						/>
						{params.row.userName}
					</div>
				);
			},
		},

		{
			field: "email",
			headerName: "email",
			width: 200,
		},
		{
			field: "status",
			headerName: "Status",
			width: 160,
		},
		{
			field: "transaction",
			headerName: "Transaction",
			width: 150,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<div className="w-full flex items-center">
						<Link to={"id/" + params.row.id}>
							<button className="button mr-5">Edit</button>
						</Link>
						<MdOutlineDeleteOutline className="Icon text-[#eb4d4b]" />
					</div>
				);
			},
			sortable: false,
		},
	];

	const rows = [
		{
			id: 1,
			userName: "John Snow",
			avatar: user1,
			email: "jhon@gmail.com",
			status: "active",
			transaction: "$120",
		},
		{
			id: 2,
			userName: "John Snow",
			avatar: user1,
			email: "jhon@gmail.com",
			status: "active",
			transaction: "$120",
		},
		{
			id: 3,
			userName: "John Snow",
			avatar: user1,
			email: "jhon@gmail.com",
			status: "active",
			transaction: "$120",
		},
		{
			id: 4,
			userName: "John Snow",
			avatar: user1,
			email: "jhon@gmail.com",
			status: "active",
			transaction: "$120",
		},
		{
			id: 5,
			userName: "John Snow",
			avatar: user1,
			email: "jhon@gmail.com",
			status: "active",
			transaction: "$120",
		},
		{
			id: 6,
			userName: "John Snow",
			avatar: user1,
			email: "jhon@gmail.com",
			status: "active",
			transaction: "$120",
		},
		{
			id: 7,
			userName: "John Snow",
			avatar: user1,
			email: "jhon@gmail.com",
			status: "active",
			transaction: "$120",
		},
		{
			id: 8,
			userName: "John Snow",
			avatar: user1,
			email: "jhon@gmail.com",
			status: "active",
			transaction: "$120",
		},
		{
			id: 9,
			userName: "John Snow",
			avatar: user1,
			email: "jhon@gmail.com",
			status: "active",
			transaction: "$120",
		},
		{
			id: 10,
			userName: "John Snow",
			avatar: user1,
			email: "jhon@gmail.com",
			status: "active",
			transaction: "$120",
		},
		{
			id: 11,
			userName: "John Snow",
			avatar: user1,
			email: "jhon@gmail.com",
			status: "active",
			transaction: "$120",
		},
		{
			id: 12,
			userName: "John Snow",
			avatar: user1,
			email: "jhon@gmail.com",
			status: "active",
			transaction: "$120",
		},
		{
			id: 13,
			userName: "John Snow",
			avatar: user1,
			email: "jhon@gmail.com",
			status: "active",
			transaction: "$120",
		},
		{
			id: 14,
			userName: "John Snow",
			avatar: user1,
			email: "jhon@gmail.com",
			status: "active",
			transaction: "$120",
		},
		{
			id: 15,
			userName: "John Snow",
			avatar: user1,
			email: "jhon@gmail.com",
			status: "active",
			transaction: "$120",
		},
	];
	return (
		<div className="userList">
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={9}
				rowsPerPageOptions={[5]}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
};

export default UserList;
