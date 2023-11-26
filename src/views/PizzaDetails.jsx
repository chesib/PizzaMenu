// PizzaDetails.js
import React, { useState, useContext } from "react";
import "../assets/PizzaDetails.css";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Header from "../components/Header";
import { formatPrice } from "../utils/MyUtils";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
const PizzaDetails = () => {
	const { details } = useParams();
	const { pizzaData, toggleCart, cart, removeOneFromCart } =
		useContext(GlobalContext);
	const [showIngredients, setShowIngredients] = useState(false);

	const pizza = pizzaData.find((pizza) => pizza.id === details);

	const handleToggleIngredients = () => {
		setShowIngredients(!showIngredients);
	};

	if (!pizza) {
		return <div>Pizza not found!</div>;
	}

	const handleToggleCart = () => {
		toggleCart(pizza);
	};

	const handleRemoveFromCart = () => {
		removeOneFromCart(pizza);
	};

	return (
		<>
			<Header />
			<div className="details-container">
				<div className="ingredients-container">
					<Link to="/" className="enlace-atras">
						Atrás <span> 🔙</span>
					</Link>
					<h2 className="pizza-name">{pizza.name}</h2>
					<button
						className="button-delete"
						role="button"
						onClick={handleToggleIngredients}
					>
						{showIngredients ? "- Ingredientes" : "+ Ingredientes"}
					</button>

					<CSSTransition
						in={showIngredients}
						timeout={300}
						classNames="ingredients-dropdown"
						unmountOnExit
					>
						<ul>
							{pizza.ingredients.map((ingredient, index) => (
								<li key={index}>{ingredient}</li>
							))}
						</ul>
					</CSSTransition>
				</div>
				<img src={pizza.img} alt={pizza.name} />
				<div className="btn-container">
					<p>{pizza.desc}</p>
				</div>
				<p>Precio: ${formatPrice(pizza.price)}</p>
				<div className="btn-container">
					<button
						className="button-delete"
						onClick={handleToggleCart}
					>
						agregar
					</button>
					<button
						className="button-delete"
						onClick={handleRemoveFromCart}
					>
						quitar
					</button>
				</div>
			</div>
		</>
	);
};

export default PizzaDetails;
