import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Shop from './Pages/Shop';
import ShopCatagory from './Pages/ShopCatagory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/bmen.jpg'
import women_banner from './Components/Assets/bwmen.jpg'
import kid_banner from './Components/Assets/bkids.jpg'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Shop/>}/>
        <Route path = '/mens' element = {<ShopCatagory banner={men_banner} catagory="men" />}/>
        <Route path = '/womens' element = {<ShopCatagory banner={women_banner} catagory="women"/>}/>
        <Route path = '/kids' element = {<ShopCatagory  banner={kid_banner} catagory="kid"/>}/>
        <Route path = "/prodect" element = {<Product/>}/>
        <Route path =':productId' elementment={<Product/>}/>
        <Route/>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/login' element = {<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
