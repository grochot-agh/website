// Importujemy potrzebne moduły
import React, { useState } from 'react';
import axios from 'axios';

function Login({ hideLogin, handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const localHandleLogin = (email) => {
    console.log('Logged in as:', email);
    handleLogin(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Wysyłamy żądanie do serwera w celu znalezienia identyfikatora użytkownika
      const response = await axios.get('http://localhost:5052/api/User', {
        params: {
          email,
          password,
        },
      });
      
      // Jeśli znaleziono użytkownika, pobieramy jego identyfikator
        const user = response.data.find((user) => user.email === email && user.password === password);

        if (user) {
            const userId = user.id;
            console.log('Znaleziono użytkownika. ID:', userId);

            localHandleLogin(email);
            hideLogin();
            const userResponse = await axios.get(`http://localhost:5052/api/User/${userId}`);
            console.log('Dane użytkownika:', userResponse.data);
        } else {
            console.log('Nie znaleziono użytkownika o podanym e-mailu i haśle.');
        }

      

    } catch (error) {
      console.log('Błąd uwierzytelnienia użytkownika:', error);
    }
  };
  

  return (
    <div id="login">
      <button className="close-login" onClick={hideLogin}>X</button>
      <h2>LOG IN TO SOCKS BOX</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mail">
          <div className="ml">Email:</div>
        </label>
        <input
          type="text"
          id="mail"
          name="mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        /><br /><br />

        <label htmlFor="password">
          <div className="psw">Password:</div>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        /><br /><br />
        <input type="submit" id="submit" value="Log In" />
      </form>
      <a href="/registration"><br />New here? Create an account!</a>
    </div>
  );
}

export default Login;
