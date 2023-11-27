import React, { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import { GlobalContext } from "../context/GlobalContext";
import PizzaCard from "../components/PizzaCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	const [error, setError] = useState(false);
	const { setPizzaData, pizzaData, toggleCart, cart } =
		useContext(GlobalContext);

	useEffect(() => {
		const getData = async (signal) => {
			try {
				const res = await fetch("/pizzas.json", { signal });
				const json = await res.json();

				setError(false);
				setPizzaData(json);
			} catch (error) {
				console.log(error);
				setError(true);
			}
		};
		const controller = new AbortController();
		const signal = controller.signal;

		getData(signal);

		return () => {
			controller.abort();
		};
	}, []);

	const handleCardClick = (pizzaId) => {
		// Use navigate to programmatically navigate to the details route
		navigate(`/compras/${pizzaId}`);
	};

	return (
		<div>
			<Header />
			<div className="pizza-container">
				{error ? (
					<p>
						Error al cargar los datos. Por favor, intenta de nuevo
						más tarde.
					</p>
				) : (
					pizzaData.map((pizza) => (
						<div
							key={pizza.id}
							onClick={() => handleCardClick(pizza.id)}
						>
							{/* Use onClick to call handleCardClick */}
							<PizzaCard pizza={pizza} />
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Home;
