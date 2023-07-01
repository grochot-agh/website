import React, { useEffect, useState } from 'react';
import './Home.css';
import $ from 'jquery';
import axios from 'axios';



const BotpressChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
    script.async = true;

    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: 'How can we help you?',
        botConversationDescription: 'Socks-seller-bot',
        botId: '823f5d7e-9836-4a05-b5ee-980b0c0bef4d',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v0',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '823f5d7e-9836-4a05-b5ee-980b0c0bef4d',
        botName: 'Shop assistant',
        useSessionStorage: true,
        enableConversationDeletion: true
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="botpress-webchat" />;
};


function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5052/api/User/${email}/${password}`);
      const data = await response.json();
      console.log(response);
      if (response.ok) {
        console.log(data.id);
        setUserId(data.id);
        setError('');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Wystąpił błąd podczas komunikacji z serwerem.');
    }
  };



  useEffect(() => {
    document.title = 'SOCKS BOX - Home'; // Set the document title
  }, []);


  const handleHamburgerClick = () => {
    $('.drop').click(function () {
      $('.dropdown').toggle();
    });
    
  };
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1180) {
        const dropdownElement = document.querySelector('.menu-container');
        if (dropdownElement) {
          dropdownElement.style.display='none';
        }
    }
  });
  window.addEventListener('resize', function() {
    if (window.innerWidth < 1180) {
        const dropdownElement = document.querySelector('.menu-container');
        if (dropdownElement) {
          dropdownElement.style.display='block';
        }
    }
  });

  function showLogin() {
    document.getElementById('login').style.display = 'block';
  }

  function hideLogin() {
    document.getElementById('login').style.display = 'none';
  }

  function showContact() {
    document.getElementById('contactWindow').style.display = 'block';
  }

  function hideContact() {
    document.getElementById('contactWindow').style.display = 'none';
  }
  useEffect(() => {
    handleHamburgerClick();
    return () => {
      // Usunięcie event listenera
      $('.drop').off('click');
    };
  });
  

  return (
    <div>
      <title>SOCKS BOX - Home</title>
      <div id="login">
        <button className="close-login" onClick={hideLogin}>X</button>
        <h2>LOG IN TO SOCKS BOX</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="mail"><div className="ml">Email:</div></label>
          <input type="text" id="mail" name="mail" required /><br /><br />

          <label htmlFor="password"><div className="psw">Password:</div></label>
          <input type="password" id="password" name="password" required /><br /><br />
          <input type="submit" id="submit" value="Log In" />
        </form>
        <a href="/registration"><br />New here? Create an account!</a>
      </div>
      <div className="header-section">
        <div className="nav">
          <div className="container1">
            <nav role="navigation">
              <img src="/images/logo.png" loading="lazy" width="150" alt="SocksBoxLogo" className="image-logo" />
              <a href="/" aria-current="page" className="menu current ">Home</a>
              <a href="/about" className="menu ">About US</a>
              <a href="/products" className="menu ">PRODUCTS</a>
              <a href="/cart" className="menu ">CART</a>
              <button onClick={showLogin} className="menu contact">LOG IN</button>
              <span className="menu user_image user">KasiaKasia StachStach
                <img src="/images/user.png" width="55vw" alt="User" className="menu user_image" /> </span>
              <div className="menu-container">
                <img src="/images/menu.jpg" alt="Menu" style={{ width: '70px', height: '70px' }} className="image-menu drop" />
                <ul className="menu-list dropdown">
                  <li><a href="/" aria-current="page" className="menu current dropdown">Home</a></li>
                  <li><a href="/about" className="menu dropdown">About US</a></li>
                  <li><a href="/products" className="menu dropdown">PRODUCTS</a></li>
                  <li><a href="/cart" className="menu dropdown">CART</a></li>
                  <li><button onClick={showLogin} className="menu contact dropdown">LOG IN</button></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <h1 className="heading">Welcome to our socks world!</h1>
        <div className="section main-section">
          <div className="container2">
            <div>
              <img src="/images/1.jpg" loading="lazy" width="441" height="280" sizes="(max-width: 479px) 98vw, 441px" alt="Socks 1" className="image-1" />
              <img src="/images/2.jpg" loading="lazy" width="332" height="280" sizes="(max-width: 479px) 96vw, 332px" alt="Socks 2" className="image-2" />
              <img src="/images/3.jpg" loading="lazy" width="332" height="280" alt="Socks 3" className="image-3" />
              <img src="/images/4.jpg" loading="lazy" width="464" height="280" sizes="(max-width: 479px) 98vw, 464px" alt="Socks 4" className="image-4" />
              <div className="tile-text">
                <em className="italic-text">NEW <br />PROJECTS<br />EVERYDAY</em>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className="logo-text">&copy;SOCKS BOX 2023</div>
          <button className="menu footer-link contact" onClick={showContact}>Contact</button>
          <a href="/policy" className="menu footer-link">Privacy policy</a>
        </div>
      </div>
      <div id="contactWindow">
        <button className="close-button" onClick={hideContact}>X</button>

        <h3>If you have any questions contact us!</h3>
        <p>You can write to us on Facebook, Instagram, or even Snapchat :D</p>
        <b>@SocksBoxSocialMedia</b>
        <p>If you prefer emails: <b><a href="mailto:socksbox.contact@gmail.com">socksbox.contact@gmail.com</a></b></p>
        <br />
        <p>You can also call us at <b>100-200-300</b></p>
        <p>We make sure to check new messages as quickly as we can :D</p>
      </div>
      <BotpressChat />
    </div>
  );
}

export default Home;