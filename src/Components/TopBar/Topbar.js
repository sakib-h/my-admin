import React from "react";
import { FaRegBell } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import Badge from "@mui/material/Badge";
import "./TopBar.css";
import profilePic from "../../Resources/images/profile-pic.jpeg";

const TopBar = () => {
	return (
		<div className="topBar ">
			<div className="topBarWrapper  ">
				<div className="topLeft">
					<h1 className="logo">POWER X GYM</h1>
				</div>
				<div className="topRight">
					<div className="topBarIcons">
						<div className="iconContainer px-5">
							<Badge
								badgeContent={4}
								max={999}
								color="primary"
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								className="cursor-pointer"
							>
								<FaRegBell className="text-[1.2rem] " />
							</Badge>
						</div>
						<div className="iconContainer px-5">
							<Badge
								badgeContent={4}
								max={999}
								color="primary"
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								className="cursor-pointer"
							>
								<GrLanguage className="text-[1.2rem] " />
							</Badge>
						</div>
						<div className="iconContainer px-5 cursor-pointer">
							<FiSettings className="text-[1.4rem] " />
						</div>
						<div className="profilePic">
							<img src={profilePic} alt="" className="avatar" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
