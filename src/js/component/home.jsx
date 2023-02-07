import React from "react";
import NavBar from "./NavBar.jsx";
import TopSection from "./TopSection.jsx";
import Card from "./Card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<div className="container">				
				<TopSection />
				<Card />
			</div>
		</div>
	);
};

export default Home;
