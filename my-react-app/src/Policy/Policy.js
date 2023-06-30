import React, { useEffect } from 'react';
import './Policy.css';
import $ from 'jquery';

function Policy() {
  useEffect(() => {
    document.title = 'SOCKS BOX - Policy Privacy'; // Ustawienie tytułu strony
  }, []);

  const handleHamburgerClick = () => {
    $('.drop3').click(function () {
      $('.dropdown3').toggle();
    });
  };

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1180) {
      const dropdownElement = document.querySelector('.menu-container3');
      if (dropdownElement) {
        dropdownElement.style.display = 'none';
      }
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth < 1180) {
      const dropdownElement = document.querySelector('.menu-container3');
      if (dropdownElement) {
        dropdownElement.style.display = 'block';
      }
    }
  });

  function showLogin() {
    document.getElementById('login3').style.display = 'block';
  }

  function hideLogin() {
    document.getElementById('login3').style.display = 'none';
  }

  function showContact() {
    document.getElementById('contactWindow3').style.display = 'block';
  }

  function hideContact() {
    document.getElementById('contactWindow3').style.display = 'none';
  }

  useEffect(() => {
    handleHamburgerClick();
    return () => {
      // Usunięcie event listenera
      $('.drop3').off('click');
    };
  });

  return (
    <div>
      
        <title>Policy Privacy</title>
     
     
        <div id="login3">
          <button className="close-login3" onClick={hideLogin}>
            X
          </button>
          <h2>LOG IN TO SOCKS BOX</h2>
          <form action="/login_site/redirect.php" method="POST" encType="multipart/form-data">
            <label htmlFor="mail3">
              <div className="ml3">Email:</div>
            </label>
            <input type="text" id="mail3" name="mail" required />
            <br />
            <br />

            <label htmlFor="password3">
              <div className="psw3">Password:</div>
            </label>
            <input type="password" id="password3" name="password" required />
            <br />
            <br />
            <input type="submit" id="submit3" value="Log In" />
          </form>
          <a href="/registration"><br />New here? Create an account!</a>

        </div>
        <div className="header-section3">
          <div className="nav3">
            <div className="container13">
              <nav role="navigation">
                <img src="/photos/logo.png" width="150" alt="SocksBoxLogo" className="image-logo3" />
                <a href="/" className="menu3">
                  Home
                </a>
                <a href="/about" className="menu3">
                  About US
                </a>
                <a href="/products" className="menu3">
                  PRODUCTS
                </a>
                <a href="/cart" className="menu3">
                  CART
                </a>
                <a href="#" onClick={showLogin} className="menu3 contact3">
                  LOG IN
                </a>

                <div className="menu-container3">
                  <img src="/photos/menu.jpg" alt="Menu" style={{ width: '70px', height: '70px' }} className="image-menu3 drop3" />
                  <ul className="menu-list3 dropdown3">
                    <li>
                      <a href="/" aria-current="page" className="menu3 dropdown3">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="menu3 dropdown3">
                        About US
                      </a>
                    </li>
                    <li>
                      <a href="/products" className="menu3 dropdown3">
                        PRODUCTS
                      </a>
                    </li>
                    <li>
                      <a href="/cart" className="menu3 dropdown3">
                        CART
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={showLogin} className="menu3 contact3 dropdown3">
                        LOG IN
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        
        <h1 className="heading3">Policy Privacy</h1>
        <div className="section3 main-section3 home-page3">
          <div>
            <p className="container23">
              The SOCKS BOX website is owned by SOCKS BOX company, which is the administrator of your personal data.
              <br />
              Before using the SOCKS BOX website, please read this Privacy Policy.
              <br />
              We care about your personal data and are committed to ensuring its confidentiality and protection.
              <br />
              In our website we are using the photos from the Internet.
            </p>
          </div>
        </div>
      </div>
        <div className="footer-section3">
          <div className="logo-text3">&copy;SOCKS BOX 2023</div>
          <a href="#" className="menu3 footer-link3 contact3" onClick={showContact}>
            Contact
          </a>
          <a href="/policy" aria-current="page" className="menu3 footer-link3 current3">
            Policy privacy
          </a>
        </div>
        <div id="contactWindow3">
          <button className="close-button3" onClick={hideContact}>
            X
          </button>

          <h3>If you have any questions contact us!</h3>
          <p>You can write to us on Facebook, Instagram, or even Snapchat :D</p>
          <b>@SocksBoxSocialMedia</b>
          <p>If you prefer emails: <b><a href="mailto:socksbox.contact@gmail.com">socksbox.contact@gmail.com</a></b></p>
          <br />
          <p>You can also call us at <b>100-200-300</b></p>
          <p>We make sure to check new messages as quickly as we can :D</p>
        </div>
      
    </div>
  );
}

export default Policy;
