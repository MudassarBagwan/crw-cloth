

import SignUp from '../../component/sign-up/Signup'
import SignIn from '../../component/sign-in/SignIn'

import { AuthenticationContainer } from  './Autentication.style'


const Authentication = () => {


  return (
    <AuthenticationContainer>
      <SignIn/>
      <SignUp/>
      
     </AuthenticationContainer>
  )
}

export default Authentication;