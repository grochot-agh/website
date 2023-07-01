import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './Products.css';
import axios from 'axios';

function Products() {
  const [socks, setSocks] = useState([]);
  const [cartSocks, setCartSocks] = useState([]);
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

  function showLogin() {
    document.getElementById('login4').style.display = 'block';
  }

  function hideLogin() {
    document.getElementById('login4').style.display = 'none';
  }

  function showContact() {
    document.getElementById('contactWindow4').style.display = 'block';
  }

  function hideContact() {
    document.getElementById('contactWindow4').style.display = 'none';
  }

  function showProductInfo() {
    document.getElementById('productInfo').style.display = 'block';
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
  // const addToCart = (sockId) => {
  //   axios
  //     .post(`http://localhost:5052/api/Cart/AddSocksToUserCart/${userId}/${sockId}`)
  //     .then(response => {
  //       const addedSock = response.data;
  //       setCartSocks([...cartSocks, addedSock]);
  //     })
  //     .catch(error => {
  //       console.error('Error adding sock to cart:', error);
  //     });
  // };

  return (
    <div>
      <div id="login4">
        <button className="close-login4" onClick={hideLogin}>
          X
        </button>
        <h2>LOG IN TO SOCKS BOX</h2>
        <form action="/login_site/redirect.php" method="POST" encType="multipart/form-data">
          <label htmlFor="mail4">
            <div className="ml4">Email:</div>
          </label>
          <input type="text" id="mail4" name="mail" required />
          <br />
          <br />

          <label htmlFor="password4">
            <div className="psw4">Password:</div>
          </label>
          <input type="password" id="password4" name="password" required />
          <br />
          <br />
          <input type="submit" id="submit4" value="Log In" />
        </form>
        <a href="/registration">
          <br />New here? Create an account!
        </a>
      </div>
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
              <a href="#" onClick={showLogin} className="menu4 contact4">
                LOG IN
              </a>
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
                    <a href="#" onClick={showLogin} className="menu4 contact4 dropdown4">
                      LOG IN
                    </a>
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
            {/* Render the socks */}
            {socks.map(sock => (
              <div key={sock.id} className="product-card">
                <h5 className="product-name">{sock.name}</h5>
                <img src= {sock.image} alt={sock.name} className="product-image" onClick={showProductInfo} />
                <p className="product-price">Price: {sock.price} PLN</p>
                {/* ..
                ..
                .. */}
                <div id="productInfo">
                  
                  <button className="close-button4" onClick={hideProductInfo}>X</button>
                </div>

                <button className="add-product">Add product</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-section4">
        <div className="logo-text4">&copy; SOCKS BOX 2023</div>
        <a href="#" className="menu4 footer-link4 contact4" onClick={showContact}>
          Contact
        </a>
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