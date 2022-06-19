import React from "react";
import Charts from "../../Components/Charts/Charts";
import FeaturedInfo from "../../Components/FeaturedInfo/FeaturedInfo";
import { userData } from "../../Data/UserData";

const Home = () => {
	return (
		<div className="home ">
			<h2>
				<FeaturedInfo />
				<Charts data={userData} title="User Analytics" />
			</h2>
		</div>
	);
};

export default Home;
