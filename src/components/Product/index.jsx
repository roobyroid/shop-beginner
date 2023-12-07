import React, { useContext } from 'react';
import { ShopContext } from './../../context/context-shop';

import './index.css';

export const Product = (props) => {
	const { id, productName, price, productImage } = props.data;
	const { cartItems, addToCart } = useContext(ShopContext);
	const cartItemAmount = cartItems[id];
	return (
		<div className="product">
			<img src={productImage} alt={productName} />
			<div className="description">
				<p>
					<b>{productName}</b>
				</p>
				<p>${price}</p>
			</div>
			<button className="addToCartBttn" onClick={() => addToCart(id)}>
				Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
			</button>
		</div>
	);
};
