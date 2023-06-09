import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../Context/CartContext'
import { CartIconContainer, ItemCount } from './carticon.style'

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen,cartCount} =useContext(CartContext);
    const toogleIsCartopen=()=> setIsCartOpen(!isCartOpen);



  return (
    <CartIconContainer onClick={toogleIsCartopen}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;