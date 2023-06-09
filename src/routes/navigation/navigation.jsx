import { Fragment,useContext } from "react";
import { Outlet  } from "react-router-dom";
import { ReactComponent as CrwLogo } from "../../assets/crown.svg";

import CartIcon from "../../component/cart-icon/carticon";
import CardDropdown from "../../component/card-dropdown/CardDropdown";
import { CartContext } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContex";
import { signOutUser } from "../../utils/firebase/firebase.util"
import { NavigationContainer,NavLinks,
  NavLink,
  LogoContainer, } from "./navigation.styles";


const Navigation =()=>{


    const { currentUser,  } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);


   
    return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer  className="logo-container" to='/'>
        <CrwLogo className="logo"/>
            
            </LogoContainer >
        <NavLinks>
        <NavLink  to='/shop'>SHOP</NavLink >
        {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              {' '}
              SIGN OUT{' '}
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
        
          <CartIcon />

        </NavLinks>
        {isCartOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
    )
  }

  export default Navigation;
