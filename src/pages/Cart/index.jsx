import React, { useContext } from 'react';
import { PRODUCTS } from './../../products';
import { ShopContext } from './../../context/context-shop';
import { CartItem } from '../../components/CartItem';

import { useNavigate } from 'react-router-dom';

import './index.css';

export const Cart = () => {
	const { cartItems, getTotalCartAmount } = useContext(ShopContext);
	const totalAmount = getTotalCartAmount();
	const navigate = useNavigate();
	return (
		<div className="cart">
			<div>
				<h1>Your Cart Items</h1>
			</div>
			<div className="cartItems">
				{PRODUCTS.map((product) => {
					if (cartItems[product.id] !== 0) {
						return <CartItem data={product} key={product.id} />;
					}
				})}
			</div>

			{totalAmount > 0 ? (
				<div className="checkout">
					<p>Subtotal: ${totalAmount}</p>
					<button onClick={() => navigate('/')}>Continue Shopping</button>
					<button>Order</button>
				</div>
			) : (
				<h2>Cart empty</h2>
			)}
		</div>
	);
};
