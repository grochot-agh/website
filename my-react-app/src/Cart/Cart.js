import React, { useEffect, useState } from 'react';
import './Cart.css';
import $ from 'jquery';
import Login from '../Login/Login';
import axios from 'axios';

function Cart() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [cartId, setCartId] = useState(null);
  const [userData, setUserData] = useState(null);
  
  // useEffect(() => {
  //   const fetchCartData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:5052/api/Cart/1`);
  //       const cart = response.data;
  //       setCartItems(cart.items);
  //       console.log(cart);
  //     } catch (error) {
  //       console.log('Error fetching cart data:', error);
  //     }
  //   };

  //   fetchCartData();
  // }, [cartId]);
  const handleLogin = (email) => {
    setIsLoginVisible(false);
    setIsLogged(true);
    console.log(isLogged);
    setLoggedInUser(email);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loggedInUser', email);
    

    
    
  };
 

  const handleLogout = () => {
    setIsLogged(false);
    setLoggedInUser('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
  };
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (isLoggedIn && loggedInUser) {
      setIsLogged(true);
      setLoggedInUser(loggedInUser);
      
    }
  }, []);
  useEffect(() => {
    const loginElement = document.getElementById('login');
    if (isLoginVisible && loginElement) {
      loginElement.style.display = 'block';
    } else if (!isLoginVisible && loginElement) {
      loginElement.style.display = 'none';
    }
  }, [isLoginVisible]);

  const showLogin = () => {
    setIsLoginVisible(true);
  };

  const hideLogin = () => {
    setIsLoginVisible(false);
  };
  // const fetchCartData = async (event) => {
  //   event.preventDefault();      
  //     // Jeśli znaleziono użytkownika, pobieramy jego identyfikator
  //     try{
  //       const user = response.data.find((user) => user.email === email);

  //       if (user) {
  //           const cartId = user.cartId;
  //           console.log('Znaleziono cartid użytkownika. ID:', cartId);
  //           const cartResponse = await axios.get(`http://localhost:5052/api/Cart/${cartId}`);
  //           console.log('Koszyk:', cartResponse.data);
  //       } else {
  //           console.log('Nie znaleziono koszyka');
  //       }

      

  //   } catch (error) {
  //     console.log('Błąd uwierzytelnienia użytkownika:', error);
  //   }
  // };
  
  
  useEffect(() => {
    document.title = 'SOCKS BOX - Cart'; // Ustawienie tytułu strony
  }, []);

  const handleHamburgerClick = () => {
    $('.drop2').click(function () {
      $('.dropdown2').toggle();
    });
  };

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1180) {
      const dropdownElement = document.querySelector('.menu-container2');
      if (dropdownElement) {
        dropdownElement.style.display = 'none';
      }
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth < 1180) {
      const dropdownElement = document.querySelector('.menu-container2');
      if (dropdownElement) {
        dropdownElement.style.display = 'block';
      }
    }
  });

  

  function showContact() {
    document.getElementById('contactWindow2').style.display = 'block';
  }

  function hideContact() {
    document.getElementById('contactWindow2').style.display = 'none';
  }

  useEffect(() => {
    handleHamburgerClick();
    return () => {
      // Usunięcie event listenera
      $('.drop2').off('click');
    };
  }, []);

  return (
    <div>
      
        <title>Your Cart</title>
      
      
        {/* LOGIN */}
        {isLoginVisible && <Login hideLogin={hideLogin} handleLogin={handleLogin}/>}
      
        <div className="header-section2">
          <div className="nav2">
            <div className="container12">
              <nav role="navigation">
                <img src="photos/logo.png" loading="lazy" width="150" alt="SocksBoxLogo" className="image-logo2" />
                <a href="/" className="menu2">Home</a>
                <a href="/about" className="menu2 ">About US</a>
                <a href="/products" className="menu2">PRODUCTS</a>
                <a href="/cart" aria-current="page" className="menu2 current2">CART</a>
                {isLogged ? (
                <button onClick={handleLogout} className="menu contact">
                LOG OUT
                </button>
                ):(
                <button onClick={showLogin} className="menu contact"> 
                LOG IN
                </button>
                )}
              {isLogged && (
                <span className="menu user_image user">
                  {loggedInUser}
                  <img src="/images/user.png" width="55vw" alt="User" className="menu user_image" />
                </span>
              )}
                <div className="menu-container2">
                  <img src="photos/menu.jpg" alt="Menu" style={{ width: '70px', height: '70px' }} className="image-menu2 drop2" />
                  <ul className="menu-list dropdown2">
                    <li><a href="/" className="menu2 dropdown2">Home</a></li>
                    <li><a href="/about" className="menu2 dropdown2">About US</a></li>
                    <li><a href="/products" className="menu2 dropdown2">PRODUCTS</a></li>
                    <li><a href="/cart" aria-current="page" className="menu2 current2 dropdown2">CART</a></li>
                    <li>{isLogged ? (
                    <button onClick={handleLogout} className="menu2 contact2 dropdown2">
                    LOG OUT
                    </button>
                  ):(<button onClick={showLogin} className= "menu2 contact2 dropdown2">
                    LOG IN
                  </button>
                  )}</li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="top_container2">
          <img src="./images/shopping-cart.gif" alt="Animacja GIF" id="cart_logo2" />
          <h4>Browse through your purchases:</h4>
          {/* HERE CODE FOR CART PRODUCTS SHOW */}
          <h5>Your shopping cart is currently empty. Add something to it using the "PRODUCTS" tab.</h5>
        </div>
        <div className="footer-section2">
          <div className="logo-text2">&copy; SOCKS BOX 2023</div>
          <button className="menu2 footer-link2 contact2" onClick={showContact}>Contact</button>
          <a href="/policy" className="menu2 footer-link2">Policy privacy</a>
        </div>
        <div id="contactWindow2">
          <button className="close-button2" onClick={hideContact}>X</button>
          <h3>If you have any questions contact us!</h3>
          <p>You can write to us on Facebook, Instagram, or even Snapchat :D</p>
          <b>@SocksBoxSocialMedia</b>
          <p>If you prefer emails: <b><a href="mailto:socksbox.contact@gmail.com">socksbox.contact@gmail.com</a></b></p>
          <br />
          <p>You can also call us at <b>100-200-300</b></p>
          <p>We make sure to check new messages as quick as we can :D</p>
        </div>
      
    </div>
  );
}

export default Cart;
