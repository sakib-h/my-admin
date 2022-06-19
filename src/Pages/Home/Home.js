import React from "react";
import Charts from "../../Components/Charts/Charts";
import FeaturedInfo from "../../Components/FeaturedInfo/FeaturedInfo";
import WidgetsLG from "../../Components/Widgets/WidgetsLG";
import WidgetsSM from "../../Components/Widgets/WidgetsSM";
import { userData } from "../../Data/UserData";

const Home = () => {
	return (
		<div className="home ">
			<h2>
				<FeaturedInfo />
				<Charts data={userData} title="User Analytics" />
				<div className="homeWidgets">
					<WidgetsSM />
					<WidgetsLG />
				</div>
			</h2>
		</div>
	);
};

export default Home;
