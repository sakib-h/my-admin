import React from "react";
import "./Widgets.css";
import { MdVisibility } from "react-icons/md";
import user1 from "../../Resources/images/user-1.jpg";
import user2 from "../../Resources/images/user-2.jpg";
import user3 from "../../Resources/images/user-3.jpg";
import user4 from "../../Resources/images/user-4.jpg";
import user5 from "../../Resources/images/user-5.jpg";
const WidgetsSM = () => {
	return (
		<div className="widgets widgets-sm">
			<div className="widgetTittle">New Join Members</div>
			<ul className="widgetListItem">
				<li className="widgetListItem flex justify-between items-center mb-3">
					<img src={user1} alt="" className="avatar" />
					<div className="widgetSmUser flex flex-col">
						<div className="userName">Anna Koller</div>
						<div className="userTitle">Software Engineer</div>
					</div>
					<div className="widgetButton">
						<MdVisibility className="widgetIcon" />
						<button>Display</button>
					</div>
				</li>

				<li className="widgetListItem flex justify-between items-center mb-3">
					<img src={user2} alt="" className="avatar" />
					<div className="widgetSmUser flex flex-col">
						<div className="userName">Anna Koller</div>
						<div className="userTitle">Software Engineer</div>
					</div>
					<div className="widgetButton">
						<MdVisibility className="widgetIcon" />
						<button>Display</button>
					</div>
				</li>

				<li className="widgetListItem flex justify-between items-center mb-3">
					<img src={user3} alt="" className="avatar" />
					<div className="widgetSmUser flex flex-col">
						<div className="userName">Anna Koller</div>
						<div className="userTitle">Software Engineer</div>
					</div>
					<div className="widgetButton">
						<MdVisibility className="widgetIcon" />
						<button>Display</button>
					</div>
				</li>

				<li className="widgetListItem flex justify-between items-center mb-3">
					<img src={user4} alt="" className="avatar" />
					<div className="widgetSmUser flex flex-col">
						<div className="userName">Anna Koller</div>
						<div className="userTitle">Software Engineer</div>
					</div>
					<div className="widgetButton">
						<MdVisibility className="widgetIcon" />
						<button>Display</button>
					</div>
				</li>

				<li className="widgetListItem flex justify-between items-center mb-3">
					<img src={user5} alt="" className="avatar" />
					<div className="widgetSmUser flex flex-col">
						<div className="userName ">Anna Koller</div>
						<div className="userTitle ">Software Engineer</div>
					</div>
					<div className="widgetButton">
						<MdVisibility className="widgetIcon" />
						<button>Display</button>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default WidgetsSM;
