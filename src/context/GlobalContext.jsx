import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
	const [pizzaData, setPizzaData] = useState([]);
	const [cart, setCart] = useState({}); // Now cart is an object
	const [cartTotal, setCartTotal] = useState(0);

	const updateCartTotal = () => {
		const total = Object.values(cart).reduce(
			(acc, item) => acc + item.total,
			0
		);
		setCartTotal(total);
	};

	useEffect(() => {
		updateCartTotal();
	}, [cart]);

	const toggleCart = (pizza) => {
		const existingItem = cart[pizza.id];

		if (existingItem) {
			setCart((prevCart) => ({
				...prevCart,
				[pizza.id]: {
					...existingItem,
					amount: existingItem.amount + 1,
					total: existingItem.total + pizza.price,
				},
			}));
			toast.success(`Agregaste una pizza ${pizza.name} tu carrito`);
		} else {
			setCart((prevCart) => ({
				...prevCart,
				[pizza.id]: {
					id: pizza.id,
					name: pizza.name,
					price: pizza.price,
					total: pizza.price,
					img: pizza.img,
					amount: 1,
				},
			}));
			toast.success(`Agregaste una pizza ${pizza.name} tu carrito`);
		}
	};

	const removeOneFromCart = (pizza) => {
		const existingItem = cart[pizza.id];

		if (existingItem) {
			// If the pizza is in the cart, update the amount and total
			setCart((prevCart) => {
				const updatedCart = { ...prevCart };

				if (existingItem.amount === 1) {
					// If it's the last pizza, remove it from the cart
					delete updatedCart[pizza.id];
					toast.warn(`Quitaste una pizza ${pizza.name} tu carrito`);
				} else {
					// Otherwise, decrement the amount and update the total
					updatedCart[pizza.id] = {
						...existingItem,
						amount: existingItem.amount - 1,
						total: existingItem.total - pizza.price,
					};
					toast.warn(`Quitaste una pizza ${pizza.name} tu carrito`);
				}

				return updatedCart;
			});
		}
	};

	const clearCart = () => {
		setCart({});
		toast.warn("Tu carrito esta vacio");
	};

	const state = {
		pizzaData,
		cart,
		cartTotal,
		toggleCart,
		removeOneFromCart,
		setPizzaData,
		clearCart,
	};

	return (
		<GlobalContext.Provider value={state}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
