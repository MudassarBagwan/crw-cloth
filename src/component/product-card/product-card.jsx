import {ProductCartContainer,
  Footer,
  Name,
  Price,} from './product-card.style'
import Button,{BUTTON_TYPES_CLASS} from '../Button/Button';

import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';  



const Productcard = ({product}) => {

    const {name,price,imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);



  return (
    <ProductCartContainer>
       <img src={imageUrl} alt={`${name}`}/>

    <Footer>
        <Name>{name}</Name>
        <Price>₹{price}</Price>


    </Footer>
    <Button buttontype={BUTTON_TYPES_CLASS.inverted} onClick={addProductToCart} >Add to Card </Button>

    </ProductCartContainer>
  )
}

export default Productcard;