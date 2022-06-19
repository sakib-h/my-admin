import React from "react";
import "./Widgets.css";
import { MdVisibility } from "react-icons/md";
import user1 from "../../Resources/images/user-1.jpg";
const WidgetsSM = () => {
	return (
		<div className="widgets widgets-sm">
			<div className="widgetTittle">New Join Members</div>
			<ul className="widgetListItem">
				<li className="widgetListItem">
					<img src={user1} alt="" className="avatar" />
					<div className="widgetUser">
						<div className="userName">Anna Koller</div>
						<div className="userTitle">Software Engineer</div>
					</div>
					<div className="widgetButton">
                        <MdVisibility/>
                    </div>
				</li>
			</ul>
		</div>
	);
};

export default WidgetsSM;
