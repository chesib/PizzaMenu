import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";

import NotFound from "../views/NotFound";
import PizzaDetails from "../views/PizzaDetails";
import Carrito from "../views/Carrito";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/compras/:details" element={<PizzaDetails />} />
			<Route path="/carrito" element={<Carrito />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default Router;
