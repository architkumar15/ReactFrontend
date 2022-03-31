import './App.css';
import Home from './AuthComponent/HomeScreen/Homescreen';
import ResponsiveAppBar from './Dashboard/header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './AuthComponent/Register/register';
import UpdateUser from './AuthComponent/UpdateUser/updateProfile';
import CreateUser from './AuthComponent/CreateUser/CreateUser';
import UserDetails from "./AuthComponent/UserDetails/UserDetails";
import Test from './AuthComponent/CreateUser/test';
import Order from "./workplace/order";
import ProductDetails from './workplace/product';
import ProductRegister from './AuthComponent/ProductRegister/productRegister';
import Operation from './workplace/Operation'


function App() {
  return (
    <div >
      <ResponsiveAppBar />
      <BrowserRouter>
      <Routes>
          <Route path="/" index element={<Home/>} /> 
          <Route path="/Register" element={<Register/>} />
          <Route path="/UpdateUser" element={<UpdateUser />} />
          <Route path='/CreateUser' element={<CreateUser />} /> 
          <Route path="/UserDetails" element={<UserDetails/>}/>
          <Route path="/Test" element={<Test/>}/>
          <Route path="/Operation" element={<Operation/>}/>
          <Route path="/ProductDetails" element={<ProductDetails/>}/>
          <Route path="/Product" element={<ProductRegister/>}/>
          <Route path="/Order" element={<Order/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
