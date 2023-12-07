import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
	const cart = {};
	for (let i = 1; i < PRODUCTS.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

export const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] !== 0) {
				let productInfo = PRODUCTS.find(
					(product) => product.id === Number(item)
				);
				totalAmount += cartItems[item] * productInfo.price;
			}
		}
		return totalAmount;
	};

	const addToCart = (itemId) =>
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

	const removeFromCart = (itemId) =>
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

	const changeItemsCart = (newValue, itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: newValue }));
	};

	const contextValue = {
		cartItems,
		addToCart,
		removeFromCart,
		changeItemsCart,
		getTotalCartAmount,
	};

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};
