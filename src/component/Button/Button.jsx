import { BaseButton,GoogleSignInButton,InvertedButton, } from "./button.style"


export  const BUTTON_TYPES_CLASS={
    base:'base',
    google :'google-sign-in',
    inverted:'inverted',

}



const getButton = (buttontype = BUTTON_TYPES_CLASS.base) =>
  ({
    [BUTTON_TYPES_CLASS.base]: BaseButton,
    [BUTTON_TYPES_CLASS.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASS.inverted]: InvertedButton,
  }[buttontype]);


const Button = ({children ,buttontype,...otherProps}) => {
  const CustomButton = getButton(buttontype);
  return <CustomButton {...otherProps}>{children}</CustomButton>;

}

export default Button

