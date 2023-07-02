// import React, { useState } from 'react';
// import axios from 'axios';

function UserComponent({user, hideUser}) {
//   const [user, setUser] = useState([]);
  
//   const localUserParam = (user) => {
//     console.log('Logged in as:', user);
//     userParam(user);
//   }


//   const fetchUser = async (id) => {
//     try {
//       // Wykonaj żądanie HTTP, aby pobrać dane użytkownika
//       const response = await axios.get(`http://localhost:5052/api/User/${id}`);
//       const userData = response.data;
//     //   localUserParam(user);
//       // Zaktualizuj stan komponentu, przypisując dane użytkownika
//       setUser(userData);
//     } catch (error) {
//       console.log('Błąd podczas pobierania danych użytkownika:', error);
//     }
//   };
  
  
//     console.log("AAA");
//     console.log(userParam);
//     console.log(user);
//     fetchUser()
    

 

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div id='uservision'>
        
        <button className="close-login" onClick={hideUser()}>X</button>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Wyświetl inne parametry użytkownika */}
    </div>
    
  );
}

export default UserComponent;