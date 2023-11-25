import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../assets/PizzaCard.css";
import { formatPrice } from "../utils/MyUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
const PizzaCard = ({ pizza }) => {
	const { name, img, ingredients, price } = pizza;
	const { toggleCart, cart, removeOneFromCart } = useContext(GlobalContext);

	const isPizzaInCart = Object.values(cart).some(
		(cartPizza) => cartPizza.id === pizza.id
	);

	const handleToggleCart = (e) => {
		e.stopPropagation(); // Prevent the click event from reaching the outer div
		toggleCart(pizza);
	};
	const handleRemoveFromCart = (e) => {
		e.stopPropagation(); // Prevent the click event from reaching the outer div
		removeOneFromCart(pizza);
	};

	return (
		<div className="pizza-card">
			<img src={img} alt={name} />
			<div className="pizza-details">
				<h2>{name}</h2>
				<ul className="card-ul">
					{ingredients.map((ingredient, index) => (
						<li key={index}>
							<FontAwesomeIcon
								className="pizza-icon"
								icon={faPizzaSlice}
							/>{" "}
							{ingredient}
						</li>
					))}
				</ul>
				<h3>Precio: ${formatPrice(price)}</h3>
				<div className="btn-container">
					<button className="btn-card-add" onClick={handleToggleCart}>
						agregar
					</button>
					<button
						className="btn-card-remove"
						onClick={handleRemoveFromCart}
					>
						quitar
					</button>
				</div>
			</div>
		</div>
	);
};

export default PizzaCard;
