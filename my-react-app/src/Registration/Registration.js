import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Registration.css';
import $ from 'jquery';
import { useHistory } from 'react-router-dom';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend
    axios.post('http://localhost:5052/api/User', formData)
      .then(response => {
        console.log('User added:', response.data);
        // Do something after successful user addition, such as updating the UI or displaying a success message

        // Clear the form data after successful submission
        setFormData({
          name: '',
          surname: '',
          age: '',
          email: '',
          password: ''
        });

        // Redirect to the Home page
        window.location.href = '/';
      })
      .catch(error => {
        console.error('Error adding user:', error);
        // Handle the error, display an error message, etc.
      });
  };






  useEffect(() => {
    document.title = 'SOCKS BOX - Registration'; // Ustawienie tytułu strony
  }, []);

  const handleHamburgerClick = () => {
    $('.drop5').click(function () {
      $('.dropdown5').toggle();
    });
  };

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1180) {
      const dropdownElement = document.querySelector('.menu-container5');
      if (dropdownElement) {
        dropdownElement.style.display = 'none';
      }
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth < 1180) {
      const dropdownElement = document.querySelector('.menu-container5');
      if (dropdownElement) {
        dropdownElement.style.display = 'block';
      }
    }
  });

  function showLogin() {
    document.getElementById('login5').style.display = 'block';
  }

  function hideLogin() {
    document.getElementById('login5').style.display = 'none';
  }

  function showContact() {
    document.getElementById('contactWindow5').style.display = 'block';
  }

  function hideContact() {
    document.getElementById('contactWindow5').style.display = 'none';
  }

  useEffect(() => {
    handleHamburgerClick();
    return () => {
      // Usunięcie event listenera
      $('.drop5').off('click');
    };
  }, []);

  return (
    <div>
      {/* LOGIN */}
      <div id="login5">
        <button className="close-login5" onClick={hideLogin}>X</button>
        <h2>LOG IN TO SOCKS BOX</h2>
        <form action="#" method="POST" encType="multipart/form-data">
          <label htmlFor="mail5">
            <div className="ml5">Email:</div>
          </label>
          <input type="text" id="mail5" name="mail" required /><br /><br />

          <label htmlFor="password5">
            <div className="psw5">Password:</div>
          </label>
          <input type="password" id="password5" name="password" required /><br /><br />
          <input type="submit" id="submit5" value="Log In" />
        </form>
        <a href="/registration">
          <br />New here? Create an account!
        </a>
      </div>
      <div className="header-section5">
        <div className="nav5">
          <div className="container15">
            <nav role="navigation">
              <img src="/images/logo.png" width="150" alt="SocksBoxLogo" className="image-logo5" />
              <a href="/" aria-current="page" className="menu5 current5">
                Home
              </a>
              <a href="/about" className="menu5">
                About US
              </a>
              <a href="/products" className="menu5">
                PRODUCTS
              </a>
              <a href="/cart" className="menu5">
                CART
              </a>
              <a href="#" onClick={showLogin} className="menu5 contact5">
                LOG IN
              </a>
              <div className="menu-container5">
                <img src="/images/menu.jpg" alt="Menu" style={{ width: '70px', height: '70px' }} className="image-menu5 drop5" />
                <ul className="menu-list5 dropdown5">
                  <li>
                    <a href="/" aria-current="page" className="menu5 current5 dropdown5">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="menu5 dropdown5">
                      About US
                    </a>
                  </li>
                  <li>
                    <a href="/products" className="menu5 dropdown5">
                      PRODUCTS
                    </a>
                  </li>
                  <li>
                    <a href="/cart" className="menu5 dropdown5">
                      CART
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={showLogin} className="menu5 contact5 dropdown5">
                      LOG IN
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      
      <div className="registration5">
        <div id="text_register5">Create new account to join us!</div>
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="name5">First Name:<br /></label>
          <input type="text" name="name" id="name5" value={formData.name} onChange={handleChange} required/><br /><br />

          <label htmlFor="surname5">Surname:<br /></label>
          <input type="text" name="surname" id="surname5" value={formData.surname} onChange={handleChange} required /><br /><br />

          <label htmlFor="age5">Age:<br /></label>
          <input type="number" name="age" id="age5" min="0" max="99" value={formData.age} onChange={handleChange} required /><br /><br />
          <label htmlFor="email15">Email:<br /></label>
          <input type="email" name="email" id="email15" value={formData.email} onChange={handleChange} required /><br /><br />

          <label htmlFor="password15">Password:<br /></label>
          <input type="password" name="password" id="password15" value={formData.password} onChange={handleChange} required /><br /><br />

          <input type="submit" id="submit15" value="Register" />
          <div id="accept_text5">
            <br /><br />By clicking the "Register" button, you accept the terms and conditions of the SocksBox service.
            In order to ensure that you have access to all the opportunities provided by your participation in the
            loyalty program, we will process your personal data in accordance with the SocksBox privacy policy.
          </div>
        </form>
      </div>

      <div className="footer-section5">
        <div className="logo-text5">&copy; SOCKS BOX 2023</div>
        <a href="#" className="menu5 footer-link5 contact5" onClick={showContact}>
          Contact
        </a>
        <a href="/policy" className="menu5 footer-link5">
          Privacy policy
        </a>
      </div>
      <div id="contactWindow5">
        <button className="close-button5" onClick={hideContact}>
          X
        </button>

        <h3>If you have any questions contact us!</h3>
        <p>You can write to us on facebook, instagram or even snapchat :D</p>
        <b>@SocksBoxSocialMedia</b>
        <p>
          If you prefer emails: <b><a href="mailto:socksbox.contact@gmail.com">socksbox.contact@gmail.com</a></b>
        </p>
        <br />
        <p>You can also call us at <b>100-200-300</b></p>
        <p>We make sure to check new messages as quick as we can :D</p>
      </div>
    </div>
  </div>
  );
}

export default Registration;
