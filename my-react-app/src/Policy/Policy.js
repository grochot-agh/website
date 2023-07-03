import React, { useEffect, useState } from 'react';
import './Policy.css';
import $ from 'jquery';
import Login from '../Login/Login';
import UserComponent from '../UserComponent/UserComponent';


function Policy() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [isUserVisible, setIsUserVisible] = useState(false);
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
    localStorage.removeItem('loggedInUser')
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
    
    if (isLoggedIn && loggedInUser) {
      setIsLogged(true);
      setLoggedInUser(loggedInUser);
      
    }
  }, []);
  useEffect(()=>{
    const userElement = document.getElementById('userWindow');
    if(isUserVisible)
    {
      userElement.style.display='block';
    }
    else if(!isUserVisible)
    {
      userElement.style.display = 'none';
    }
  });
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
  function showUser() {
    setIsUserVisible(true);
    console.log("showeduser")
    console.log(isUserVisible)
  }
  function hideUser() {
    setIsUserVisible(false);
  }
  
  useEffect(() => {
    document.title = 'SOCKS BOX - Policy Privacy'; 
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


  function showContact() {
    document.getElementById('contactWindow3').style.display = 'block';
  }

  function hideContact() {
    document.getElementById('contactWindow3').style.display = 'none';
  }

  useEffect(() => {
    handleHamburgerClick();
    return () => {
      $('.drop3').off('click');
    };
  });

  return (
    <div>
        <title>Policy Privacy</title>
        {isLoginVisible && <Login hideLogin={hideLogin} handleLogin={handleLogin} handleUser={handleUser}/>}
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
                {isLogged ? (
                <button onClick={handleLogout} className="menu3 contact3">
                LOG OUT
                </button>
                ):(
                <button onClick={showLogin} className="menu3 contact3"> 
                LOG IN
                </button>
                )}
              {isLogged && (
                <span className="menu3 user_image3 user3">
                  {loggedInUser}
                  <img src="/images/user.png" onClick={showUser} width="55vw" alt="User" className="menu3 user_image3" />
                </span>
              )}

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
                    {isLogged ? (
                    <button onClick={handleLogout} className="menu3 contact3 dropdown3">
                    LOG OUT
                    </button>
                  ):(<button onClick={showLogin} className= "menu3 contact3 dropdown3">
                    LOG IN
                  </button>
                  )}
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
          <button href="#" className="menu3 footer-link3 contact3" onClick={showContact}>
            Contact
          </button>
          <a href="/policy" aria-current="page" className="menu3 footer-link3 current3">
            Policy privacy
          </a>
        </div>
        <div id="userWindow">
     {isUserVisible &&< UserComponent user={loggedInUserObject} hideUser={() => hideUser} />}
     </div>
        <div id="contactWindow3">
        <button className="close-button" onClick={hideContact}>X</button>

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
