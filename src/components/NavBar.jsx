// Navbar.js
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/Navbar.css"; // Import the CSS file
import { GlobalContext } from "../context/GlobalContext";
import { formatPrice } from "../utils/MyUtils";

const Navbar = () => {
	const { cartTotal } = useContext(GlobalContext);

	return (
		<nav className="navbar">
			<div className="logo-container">
				{/* Add your logo here */}

				<Link to="/">
					<img
						src="https://cdn-icons-png.flaticon.com/512/2794/2794495.png"
						alt="Logo"
						className="logo"
					/>
				</Link>
			</div>{" "}
			<div className="price-list">
				<p className="total-price">Total: ${formatPrice(cartTotal)}</p>
				<ul className="nav-links">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>

					<li>
						<NavLink to="/carrito">carrito</NavLink>
					</li>
				</ul>{" "}
			</div>
		</nav>
	);
};

export default Navbar;
