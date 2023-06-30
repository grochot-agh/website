import React, { useEffect } from 'react';
import './Cart.css';
import $ from 'jquery';

function Cart() {
  useEffect(() => {
    document.title = 'SOCKS BOX - Policy Privacy'; // Ustawienie tytułu strony
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

  function showLogin() {
    document.getElementById('login2').style.display = 'block';
  }

  function hideLogin() {
    document.getElementById('login2').style.display = 'none';
  }

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
      <head>
        <title>Your Cart</title>
      </head>
      <body>
        {/* LOGIN */}
        <div id="login2">
          <button class="close-login2" onClick={hideLogin}>X</button>
          <h2>LOG IN TO SOCKS BOX</h2>
          <form action="/login_site/redirect.php" method="POST" enctype="multipart/form-data">
            <label for="mail2"><div class="ml2">Email:</div></label>
            <input type="text" id="mail2" name="mail" required /><br /><br />

            <label for="password2"><div class="psw2">Password:</div></label>
            <input type="password" id="password2" name="password" required /><br /><br />
            <input type="submit" id="submit" value="Log In" />
          </form>
          <a href="/registration"><br />New here? Create an account!</a>
        </div>
        <div class="header-section2">
          <div class="nav2">
            <div class="container12">
              <nav role="navigation">
                <img src="photos/logo.png" loading="lazy" width="150" alt="SocksBoxLogo" class="image-logo2" />
                <a href="/" class="menu2">Home</a>
                <a href="/about" class="menu2 ">About US</a>
                <a href="/products" class="menu2">PRODUCTS</a>
                <a href="/cart" aria-current="page" class="menu2 current2">CART</a>
                <a href="#" onClick={showLogin} class="menu2 contact2">LOG IN</a>
                {/* <img src="/home/images/user.png" class="menu user_image" alt="user_image"> */}
                <div class="menu-container2">
                  <img src="photos/menu.jpg" alt="Menu" style={{ width: '70px', height: '70px' }} class="image-menu2 drop2" />
                  <ul class="menu-list dropdown2">
                    <li><a href="/" class="menu2 dropdown2">Home</a></li>
                    <li><a href="/about" class="menu2 dropdown2">About US</a></li>
                    <li><a href="/products" class="menu2 dropdown2">PRODUCTS</a></li>
                    <li><a href="/cart" aria-current="page" class="menu2 current2 dropdown2">CART</a></li>
                    <li><a href="#" onClick={showLogin} class="menu2 contact2 dropdown2">LOG IN</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div class="top_container2">
          <img src="./images/shopping-cart.gif" alt="Animacja GIF" id="cart_logo2" />
          <h4>Browse through your purchases:</h4>
          {/* HERE CODE FOR CART PRODUCTS SHOW */}
          <h5>Your shopping cart is currently empty. Add something to it using the "PRODUCTS" tab.</h5>
        </div>
        <div class="footer-section2">
          <div class="logo-text2">&copy; SOCKS BOX 2023</div>
          <a href="#" class="menu2 footer-link2 contact2" onClick={showContact}>Contact</a>
          <a href="/policy" class="menu2 footer-link2">Policy privacy</a>
        </div>
        <div id="contactWindow2">
          <button class="close-button2" onClick={hideContact}>X</button>
          <h3>If you have any questions contact us!</h3>
          <p>You can write to us on Facebook, Instagram, or even Snapchat :D</p>
          <b>@SocksBoxSocialMedia</b>
          <p>If you prefer emails: <b><a href="mailto:socksbox.contact@gmail.com">socksbox.contact@gmail.com</a></b></p>
          <br />
          <p>You can also call us at <b>100-200-300</b></p>
          <p>We make sure to check new messages as quick as we can :D</p>
        </div>
      </body>
    </div>
  );
}

export default Cart;
