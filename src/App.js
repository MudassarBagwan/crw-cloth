
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import { Routes, Route} from "react-router-dom";
import Authentication from './routes/authentication/Authentication'
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";



const App =() => {

   return(
   <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route index element={<Home />}/>
    <Route path ='shop/*' element={<Shop />}/>
    <Route path ='auth' element={<Authentication />}/>
    <Route path ='checkout' element={<Checkout/>}/>
    </Route>
   </Routes>
   ) 
   



}

export default App;