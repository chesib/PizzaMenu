// Header.js
import React from "react";
import "../assets/Header.css"; // Import the CSS file

const Header = () => {
	return (
		<header className="header">
			<div className="overlay">
				<h1>Pizzeria Mama Mia</h1>
				<p>Tenemos las mejores pizzas del mundo!</p>
			</div>
		</header>
	);
};

export default Header;
