import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './Products.css';
import axios from 'axios';
import Login from '../Login/Login';


function Products() {
  const [socks, setSocks] = useState([]);
  const [cartSocks, setCartSocks] = useState([]);
  const [selectedSock, setSelectedSock] = useState(null); 
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [loggedInUserObject, setLoggedInUserObject] = useState([]);


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
    localStorage.removeItem('user');
  };
  const handleUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  }
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loggedInUser = localStorage.getItem('loggedInUser');
    let userText = localStorage.getItem('user');
    let userObj = JSON.parse(userText);
    setLoggedInUserObject(userObj);
    
    if (isLoggedIn && loggedInUser ) {
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
  const addToCart = (sockId) => {
    const userId = loggedInUserObject.id;
    

   
    // Wywołanie API do dodania skarpetki do koszyka
    axios
      .post( `http://localhost:5052/api/CartDTO/?id=${userId}&sockid=${sockId}`)
      .then(response => {
        const addedSock = response.data;
        setCartSocks([...cartSocks, addedSock]);
      })
      .catch(error => {
        console.error('Error adding sock to cart:', error);
      });
  };
  useEffect(() => {
    document.title = 'SOCKS BOX - Products'; // Set the document title

    // Fetch socks from API using Axios
    axios
      .get('http://localhost:5052/api/Sock')
      .then(response => {
        setSocks(response.data);
      })
      .catch(error => {
        console.error('Error fetching socks:', error);
      });
  }, []);

  const handleHamburgerClick = () => {
    $('.drop4').click(function() {
      $('.dropdown4').toggle();
    });
  };

  window.addEventListener('resize', function() {
    if (window.innerWidth > 1180) {
      const dropdownElement = document.querySelector('.menu-container4');
      if (dropdownElement) {
        dropdownElement.style.display = 'none';
      }
    }
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth < 1180) {
      const dropdownElement = document.querySelector('.menu-container4');
      if (dropdownElement) {
        dropdownElement.style.display = 'block';
      }
    }
  });

  function showContact() {
    document.getElementById('contactWindow4').style.display = 'block';
  }

  function hideContact() {
    document.getElementById('contactWindow4').style.display = 'none';
  }
  function showProductInfo(sock) {
    // Pobranie informacji o skarpecie na podstawie jej ID
    axios
      .get(`http://localhost:5052/api/Sock/${sock.id}`)
      .then(response => {
        const sockData = response.data;
        setSelectedSock(sockData); // Ustawienie pobranych danych w stanie komponentu
        document.getElementById('productInfo').style.display = 'block';
      })
      .catch(error => {
        console.error('Error fetching sock data:', error);
      });
  }

  

  function hideProductInfo() {
    document.getElementById('productInfo').style.display = 'none';
  }

  useEffect(() => {
    handleHamburgerClick();
    return () => {
      // Usunięcie event listenera
      $('.drop4').off('click');
    };
  });
  const sockLengthMap = {
    0: "Ankle",
    1: "Crew",
    2: "Knee High",
    3: "Tight High"
  };
  
   
  return (
    <div>
      {isLoginVisible && <Login hideLogin={hideLogin} handleLogin={handleLogin} handleUser={handleUser}/>}
      
      <div className="header-section4">
        <div className="nav4">
          <div className="container14">
            <nav role="navigation">
              <img src="photos/logo.png" loading="lazy" width="150" alt="SocksBoxLogo" className="image-logo" />
              <a href="/" className="menu4">
                Home
              </a>
              <a href="/about" className="menu4">
                About US
              </a>
              <a href="/products" aria-current="page" className="menu4 current4">
                PRODUCTS
              </a>
              <a href="/cart" className="menu4">
                CART
              </a>
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
              <div className="menu-container4">
                <img src="photos/menu.jpg" alt="Menu" style={{ width: '70px', height: '70px' }} className="image-menu4 drop4" />
                <ul className="menu-list4 dropdown4">
                  <li>
                    <a href="/" className="menu4 dropdown4">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="menu4 dropdown4">
                      About US
                    </a>
                  </li>
                  <li>
                    <a href="/products" aria-current="page" className="menu4 current4 dropdown4">
                      PRODUCTS
                    </a>
                  </li>
                  <li>
                    <a href="/cart" className="menu4 dropdown4">
                      CART
                    </a>
                  </li>
                  <li>
                  {isLogged ? (
                    <button onClick={handleLogout} className="menu4 contact4 dropdown4">
                    LOG OUT
                    </button>
                  ):(<button onClick={showLogin} className= "menu4 contact4 dropdown4">
                    LOG IN
                  </button>
                  )}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="top_container4">
        <h4>PRODUCTS:</h4>
        <div className="container24">
          <div className="product-grid">
            {socks.map(sock => (
              <div key={sock.id} className="product-card column">
                <h5 className="product-name">{sock?.name}</h5>
                <img src={sock?.image} alt={sock?.name} className="product-image column" onClick={() => showProductInfo(sock)} />
                <p className="product-price">Price: {sock?.price} PLN</p>
                <div id="productInfo">
                  <button className="close-button4 info" onClick={hideProductInfo}>X</button>
                  <br />
                  <h5 className="product-name info">{selectedSock?.name}</h5>
                  <img src={selectedSock?.image} alt={selectedSock?.name} className="product-image info" />
                  <div className="product-info">
                  Length: {sockLengthMap[selectedSock?.length]}
                    <br />
                    Color: {selectedSock?.color}
                    <br />
                    Material: {selectedSock?.material}
                    <br />
                    Price: {selectedSock?.price} PLN
                  </div>
                  <button className="add-product info" >Add product</button>
                  <br />
                </div>
                <button className="add-product" onClick={() => addToCart(sock?.id)}>Add product</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-section4">
        <div className="logo-text4">&copy; SOCKS BOX 2023</div>
        <button href="#" className="menu4 footer-link4 contact4" onClick={showContact}>
          Contact
        </button>
        <a href="/policy" className="menu4 footer-link4">
          Policy privacy
        </a>
      </div>
      <div id="contactWindow4">
        <button className="close-button4" onClick={hideContact}>
          X
        </button>
        <h3>If you have any questions contact us!</h3>
        <p>You can write to us on Facebook, Instagram, or even Snapchat :D</p>
        <b>@SocksBoxSocialMedia</b>
        <p>
          If you prefer emails: <b><a href="mailto:socksbox.contact@gmail.com">socksbox.contact@gmail.com</a></b>
        </p>
        <br />
        <p>You can also call us at <b>100-200-300</b></p>
        <p>We make sure to check new messages as quick as we can :D</p>
      </div>
    </div>
  );
}

export default Products;