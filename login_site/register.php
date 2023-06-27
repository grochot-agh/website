<!DOCTYPE html>
<html>
<head>
  <title>Rejestracja użytkownika</title>
</head>
<body>
  <h2>Rejestracja użytkownika</h2>

  <form action="redirect.php" method="POST">



    <label for="name">Imię:</label>
    <input type="text" name="name" id="name" required><br><br>

    <label for="surname">Nazwisko:</label>
    <input type="text" name="surname" id="surname" required><br><br>

    <label for="age">Wiek:</label>
    <input type="number" name="age" id="age" required><br><br>

    <label for="email">Adres e-mail:</label>
    <input type="email" name="email" id="email" required><br><br>

    <label for="password">Hasło:</label>
    <input type="password" name="password" id="password" required><br><br>

    <input type="submit" value="Zarejestruj">
  </form>

</body>
</html>
