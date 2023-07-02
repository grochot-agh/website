import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import '../Login/Login.css';
import $ from 'jquery';
import Login from '../Login/Login';


function AboutUs() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  

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
  


    useEffect(() => {
      document.title = 'SOCKS BOX - AboutUs'; // Set the document title
    }, []);
  
  
    const handleHamburgerClick = () => {
      $('.drop1').click(function () {
        $('.dropdown1').toggle();
      });
      
    };
    window.addEventListener('resize', function() {
      if (window.innerWidth > 1180) {
          const dropdownElement = document.querySelector('.menu-container1');
          if (dropdownElement) {
            dropdownElement.style.display='none';
          }
      }
    });
    window.addEventListener('resize', function() {
      if (window.innerWidth < 1180) {
          const dropdownElement = document.querySelector('.menu-container1');
          if (dropdownElement) {
            dropdownElement.style.display='block';
          }
      }
    });
  
  
    function showContact() {
      document.getElementById('contactWindow1').style.display = 'block';
    }
  
    function hideContact() {
      document.getElementById('contactWindow1').style.display = 'none';
    }
    useEffect(() => {
      handleHamburgerClick();
      return () => {
        // Usunięcie event listenera
        $('.drop1').off('click');
      };
    });
    return (
        <div>
          <title>About Us</title>
          {isLoginVisible && <Login hideLogin={hideLogin} handleLogin={handleLogin}/>}
          <div className="header-section1">
            <div className="nav1">
              <div className="container11">
                <nav role="navigation">
                  <img src="/images/logo.png" loading="lazy" width="150" alt="SocksBoxLogo" className="image-logo1" />
                  <a href="/" aria-current="page" className="menu1">
                    Home
                  </a>
                  <a href="/about" className="menu1  current1">
                    About US
                  </a>
                  <a href="/products" className="menu1">
                    PRODUCTS
                  </a>
                  <a href="/cart" className="menu1">
                    CART
                  </a>
                  {isLogged ? (
                <button onClick={handleLogout} className="menu1 contact1">
                LOG OUT
                </button>
                ):(
                <button onClick={showLogin} className="menu1 contact1"> 
                LOG IN
                </button>
                )}
              {isLogged && (
                <span className="menu1 user_image1 user1">
                  {loggedInUser}
                  <img src="/images/user.png" width="55vw" alt="User" className="menu1 user_image1" />
                </span>
              )}
                  <div className="menu-container1">
                    <img src="/images/menu.jpg" alt="Menu" style={{ width: '70px', height: '70px' }} className="image-menu1 drop1" />
                    <ul className="menu-list1 dropdown1">
                      <li>
                        <a href="/"  className="menu1 dropdown1">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/about"aria-current="page" className="menu1  current1 dropdown1">
                          About US
                        </a>
                      </li>
                      <li>
                        <a href="/products" className="menu1 dropdown1">
                          PRODUCTS
                        </a>
                      </li>
                      <li>
                        <a href="/cart" className="menu1 dropdown1">
                          CART
                        </a>
                      </li>
                      <li>
                      {isLogged ? (
                    <button onClick={handleLogout} className="menu1 contact1 dropdown1">
                    LOG OUT
                    </button>
                  ):(<button onClick={showLogin} className= "menu1 contact1 dropdown1">
                    LOG IN
                  </button>
                  )}
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <h1 className="heading1">About Us</h1>
            <div className="section1 main-section1 home-page1">
              <div>
                <p className="container21">
                  <i>
                    <b>THE BEGINNING</b>
                  </i>{' '}
                  <br />
                  <br />
                  Our story began 10 years ago when we met at the AGH University in Cracow. Each of us had different interests, so we didn't become friends at the beginning. We met during sports events organized by our university. Specifically, it was basketball that connected us, and the fact that we loved to play in our free time. It was a form of escape from everyday activities for us. We started meeting regularly and played so many matches. Our team was getting bigger all the time, but some people also left us. Despite this, only 4 people remained constantly in the team.
                  <br />
                </p>
                <p className="p11">
                  <br />
                  <b>And that's us.</b>
                  <br />
                  <br />
                  Kate Alex Sebastian and Wiki
                  <br />
                  <br />
                  <img src="/photos/us.jpg" className="photo11" width="70%" height="35%" alt="Team" />
                </p>
    
                <p className="container21">
                  Maybe you wonder what prompted us to create an online store with socks. Several factors contributed to this. Every team member in the squad really appreciated the comfort, whether during everyday or sports activities. The basic garment was shoes. However, we couldn't afford to create a brand offering comfortable footwear at that time. This idea was way over our student budget. But yet we wanted to create something of our own, and we were talking about it more and more during games. A lot of concepts came up at that time, but we couldn't decide on anything. Most of the topics were connected with comfort and an interesting look. We noticed that one of the most important things is the appearance because it's what attracts you - our customers, in the first moment. We wanted to create something unique, something that could surprise the surroundings.
                  <br />
                </p>
    
                <p className="p11">
                  <img src="/photos/kosz3.jpg" className="photo11" width="70%" height="35%" alt="Socks" />
                </p>
    
                <p className="container21">
                  So that's how we decided on socks. But not just whatever socks. Our products have durability certificates, so you can forget about unwanted holes in your socks after a month. Thanks to special materials, you will not feel discomfort at high temperatures but also during winter. We want to present you the product with which we are fully satisfied as active people. We know how important it is to feel good during the day, which is why we have created a place where everyone can find something for themselves (and for every occasion).
                  <br />
                  <br />
                  We value every opinion and try to get the most out of each one. We are constantly developing, and our heads are full of new ideas.
                  <br />
                  <br />
                  Stay with us and wait for more!
                  <br />
                  <br />
                  New designs appear every day!
                  <br />
                </p>
              </div>
            </div>
            <div className="footer-section1">
              <div className="logo-text1">&copy;SOCKS BOX 2023</div>
              <button href="#" className="menu1 footer-link1 contact1" onClick={showContact}>
                Contact
              </button>
              <a href="/policy" className="menu1 footer-link1">
                Policy privacy
              </a>
            </div>
            <div id="contactWindow1">
              <button className="close-button1" onClick={hideContact}>
                X
              </button>
    
              <h3>If you have any questions, contact us!</h3>
              <p>You can write to us on Facebook, Instagram, or even Snapchat :D</p>
              <b>@SocksBoxSocialMedia</b>
              <p>
                If you prefer emails: <b><a href="mailto:socksbox.contact@gmail.com">socksbox.contact@gmail.com</a></b>
              </p>
              <br />
              <p>You can also call us at <b>100-200-300</b></p>
              <p>We make sure to check new messages as quickly as we can :D</p>
            </div>
          </div>
         
        </div>
      );
    };
    
    export default AboutUs;
    
    
    
    
    
    
    
    