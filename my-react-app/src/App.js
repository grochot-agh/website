import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home.js';
import AboutUs from './AboutUs/AboutUs.js';
import Policy from './Policy/Policy.js';
import Registration from './Registration/Registration.js';
import Products from './Products/Products.js';
import Cart from './Cart/Cart.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/policy" element={<Policy />} />
        <Route path= "/registration" element = {<Registration/>}/>
        <Route path= "/products" element = {<Products/>}/>
        <Route path= "/cart" element = {<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;
