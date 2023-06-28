<?php
function validate($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);

    if (empty($data)) {
      return false;
    }

    $max_length = 255; 
    if (strlen($data) > $max_length) {
      return false;
    }

    return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $id = validate($_POST["id"]);
  $age = validate($_POST["age"]);
  $name = validate($_POST["name"]);
  $surname = validate($_POST["surname"]);
  $password = validate($_POST["password"]);
  $email = validate($_POST["email"]);

  if ($id === false || $age === false || $name === false || $surname === false || $password === false || $email === false) {
    echo "Błędne dane.";
    exit;
  }

  $host = "localhost";
  $dbUsername = "nazwa_uzytkownika";
  $dbPassword = "haslo";
  $dbName = "nazwa_bazy_danych";

  $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
  if ($conn->connect_error) {
    die("Błąd połączenia z bazą danych: " . $conn->connect_error);
  }

  $emailCheckQuery = "SELECT * FROM users WHERE email = '$email'";
  $emailCheckResult = $conn->query($emailCheckQuery);
  if ($emailCheckResult->num_rows > 0) {
    echo "Użytkownik o podanym adresie e-mail już istnieje.";
    header("Location: register.php");
    exit;
  }

  $sql = "INSERT INTO users (age, name, surname, password, email) VALUES ('$age', '$name', '$surname', '$password', '$email')";

  if ($conn->query($sql) === TRUE) {
    echo "Użytkownik został zarejestrowany.";
  } else {
    echo "Błąd podczas rejestracji użytkownika: " . $conn->error;
  }

  $conn->close();
  header("Location: main.php");
}
?>
