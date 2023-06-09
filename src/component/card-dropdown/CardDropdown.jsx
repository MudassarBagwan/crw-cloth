
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import Button from '../Button/Button';
import CartItem from '../cart-item/CartItem';

import {CartDropdownContainer,
  EmptyMessage,
  CartItems,} from './carddropdown.style'


const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const naigate= useNavigate();

  const goToCheckOutHandler =()=>{
    naigate('/checkout')
  }


  return (
  <CartDropdownContainer>
    <CartItems>
    {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}

</CartItems>

    <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
);}


export default CartDropdown;