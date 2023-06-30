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

$host = "localhost";
$dbUsername = "nazwa_uzytkownika";
$dbPassword = "haslo";
$dbName = "nazwa_bazy_danych";

$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
if ($conn->connect_error) {
  die("Błąd połączenia z bazą danych: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = validate($_POST["mail"]);
  $password = validate($_POST["password"]);

  if ($email === false || $password === false) {
    echo "Nieprawidłowe dane.";
    exit;
  }

  $sql = "SELECT * FROM uzytkownicy WHERE email = '$email' AND haslo = '$password'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    header("Location: /home/homebase.html");
    exit();
  } else {
    echo "Nieprawidłowy email lub hasło.";
  }
}

$conn->close();
?>
