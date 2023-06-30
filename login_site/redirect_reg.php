// Tworzenie obiektu zawierającego dane użytkownika
const userData = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  password: 'password123'
};

// Wysyłanie żądania POST do API SSMS za pomocą Axios
axios.post('http://localhost:5052/User', userData)
  .then(response => {
    // Obsługa udanego żądania
    console.log('Użytkownik został dodany do bazy danych.', response.data);
    // Tutaj możesz dodać kod obsługujący powodzenie dodawania użytkownika
  })
  .catch(error => {
    // Obsługa błędu
    console.error('Wystąpił błąd podczas dodawania użytkownika do bazy danych.', error);
    // Tutaj możesz dodać kod obsługujący błąd dodawania użytkownika
  });
