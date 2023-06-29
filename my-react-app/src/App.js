import React from 'react';
import './App.css';
function App() {
return (
  <div className="header-section">
  <div className="nav"> 
      <div className="container1">
          <nav role="navigation">
              <img src="/home/images/logo.png" loading="lazy" width="150" alt="SocksBoxLogo" className="image-logo"></img>
                  <a href="/home/homebase.html" aria-current="page" className="menu current ">Home</a> 
                  <a href="/sub-sites/aboutus.html" className="menu ">About US</a>
                  <a href="/products" className="menu ">PRODUCTS</a>
                  <a href="/cart" className="menu ">CART</a>
                  <a href="#" onclick="showLogin()" className="menu contact ">LOG IN</a>
              <div className="menu-container">
                  <img src="/home/images/menu.jpg" alt="Menu" style="width:70px;height:70px;" className="image-menu drop"></img>
                  <ul className="menu-list dropdown">
                      <li><a href="/" aria-current="page" className="menu current dropdown">Home</a></li> 
                      <li><a href="/sub-sites/aboutus.html" className="menu dropdown">About US</a></li>
                      <li><a href="/products" className="menu dropdown">PRODUCTS</a></li>
                      <li><a href="/cart" className="menu dropdown">CART</a></li>
                      <li><a href="#" onclick="showLogin()" className="menu contact dropdown">LOG IN</a></li>
                  </ul>
              </div> 
          </nav>      
  </div>
</div></div>
);}
export default App;