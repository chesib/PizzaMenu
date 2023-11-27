import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../assets/Carrito.css";
import Header from "../components/Header";
import { formatPrice } from "../utils/MyUtils";

const Carrito = () => {
	const { cart, toggleCart, removeOneFromCart, clearCart } =
		useContext(GlobalContext);

	const calculateTotal = () => {
		return formatPrice(
			Object.values(cart).reduce((total, pizza) => total + pizza.total, 0)
		);
	};
	const handleClearCart = () => {
		clearCart();
	};

	return (
		<>
			<Header />
			<div className="carrito-container">
				<button className="button-delete" onClick={handleClearCart}>
					Vaciar Carrito
				</button>
				<div className="carrito-header"></div>
				{Object.keys(cart).length === 0 ? (
					<p>No hay pizzas en tu carrito.</p>
				) : (
					<div>
						{Object.values(cart).map((pizza) => (
							<div key={pizza.id} className="carrito-item">
								<div className="img-container">
									<img src={pizza.img} alt={pizza.name} />
								</div>
								<div className="carrito-content">
									<h3>{pizza.name}</h3>
									<div className="carrito-details">
										<p>
											Valor: $
											{formatPrice(
												pizza.price * pizza.amount
											)}
										</p>
										<p>Cantidad: {pizza.amount}</p>
										<div className="carrito-buttons">
											<button
												className="button-delete"
												onClick={() =>
													toggleCart(pizza)
												}
											>
												+
											</button>
											<button
												className="button-delete"
												onClick={() =>
													removeOneFromCart(pizza)
												}
											>
												-
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
						<div className="carrito-total">
							<p className="total-carrito">
								Total: ${calculateTotal()}
							</p>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Carrito;
