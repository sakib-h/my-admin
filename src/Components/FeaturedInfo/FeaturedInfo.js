import React from "react";
import { MdArrowDownward } from "react-icons/md";
import { MdArrowUpward } from "react-icons/md";
import "./FeaturedInfo.css";

const FeaturedInfo = () => {
	return (
		<div className="featured">
			<div className="featuredItem">
				<h1 className="featuredTitle">Revenue</h1>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">$2,415</span>
					<span className="featuredMoneyRate">-11.4</span>
					<MdArrowDownward className="featuredIcon negative" />
				</div>
				<span className="featuredSub">Compared to last month</span>
			</div>

			<div className="featuredItem">
				<h1 className="featuredTitle">Sales</h1>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">$4,415</span>
					<span className="featuredMoneyRate">-1.4</span>
					<MdArrowDownward className="featuredIcon negative" />
				</div>
				<span className="featuredSub">Compared to last month</span>
			</div>

			<div className="featuredItem">
				<h1 className="featuredTitle">Cost</h1>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">$2,415</span>
					<span className="featuredMoneyRate">+2.5</span>
					<MdArrowUpward className="featuredIcon" />
				</div>
				<span className="featuredSub">Compared to last month</span>
			</div>
		</div>
	);
};

export default FeaturedInfo;
