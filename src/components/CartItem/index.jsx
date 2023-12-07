import React, { useContext } from 'react';
import { ShopContext } from '../../context/context-shop';

import './index.css';

export const CartItem = (props) => {
	const { id, productName, price, productImage } = props.data;
	const {
		cartItems,
		addToCart,
		removeFromCart,
		changeItemsCart,
		getTotalCartAmount,
	} = useContext(ShopContext);
	return (
		<div className="cartItem">
			<img src={productImage} alt={productName} />
			<div className="description">
				<p>
					<b>{productName}</b>
				</p>
				<p>${price}</p>
				<div className="countHandler">
					<button onClick={() => removeFromCart(id)}> - </button>
					<input
						type="text"
						value={cartItems[id]}
						onChange={(event) =>
							changeItemsCart(Number(event.target.value), id)
						}
					/>
					<button onClick={() => addToCart(id)}> + </button>
				</div>
			</div>
		</div>
	);
};
