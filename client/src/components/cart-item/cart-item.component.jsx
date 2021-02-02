import React from 'react';
import { CartItemContainer, CartItemImageContainer, CartItemDetailsContainer, CartItemName, CartItemPrice } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImageContainer>
      <img src={ imageUrl } alt="item" />
    </CartItemImageContainer>
    <CartItemDetailsContainer>
      <CartItemName>{ name }</CartItemName>
      <CartItemPrice>{ quantity } x ${ price }</CartItemPrice>
    </CartItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;