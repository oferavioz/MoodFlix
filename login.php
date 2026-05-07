<?php
session_start();
include "db.php";
global $conn;

$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);

    if ($username == "" || $password == "") {
        $message = "Please fill in all fields.";
    } else {
        $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) == 1) {
            $user = mysqli_fetch_assoc($result);

            $_SESSION["user_id"] = $user["id"];
            $_SESSION["username"] = $user["username"];

            header("Location: watchlist.php");
            exit();
        } else {
            $message = "Incorrect username or password.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login - MoodFlix</title>
    <link rel="stylesheet" href="MoodFlixCSS.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>

<header>
    <nav class="navbar">
        <div class="logo">
            <a href="index.html">
                <img src="images/Logo.png" alt="MoodFlix Logo">
            </a>
        </div>

        <button class="menu-toggle" onclick="toggleMenu()">☰</button>

        <ul class="nav-links" id="navLinks">
            <li><a href="index.html">Home</a></li>
            <li><a href="recommendations.html">Recommendations</a></li>
            <li><a href="search.html">Search</a></li>
            <li><a href="watchlist.php">Watchlist</a></li>
            <li><a href="reviews.html">Reviews</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="login.php">Login</a></li>
            <li><a href="team.html">Team</a></li>
        </ul>
    </nav>

    <h1>Login</h1>
    <p>Log in to manage your personal MoodFlix watchlist!</p>
</header>

<main>

    <section class="auth-section">
        <form class="auth-form" action="login.php" method="post">
            <div class="form-row">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter username" required>
            </div>

            <div class="form-row">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter password" required>
            </div>

            <div class="form-buttons">
                <input type="submit" value="Login">
            </div>
        </form>

        <p class="auth-message"><?php echo $message; ?></p>

        <p class="auth-link">
            New user?
            <a href="register.php">Create an account</a>
        </p>
    </section>

</main>

<footer class="site-footer">
    <div class="footer-column footer-brand">
        <div class="footer-logo">
            <img src="images/Logo.png" alt="MoodFlix Logo">
        </div>
        <p>A smart movie and TV recommendation platform.
            <br>Built as a college software engineering project.
        </p>
    </div>

    <div class="footer-column">
        <h3>Quick Links</h3>
        <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="recommendations.html">Recommendations</a></li>
            <li><a href="search.html">Search</a></li>
            <li><a href="watchlist.php">Watchlist</a></li>
            <li><a href="reviews.html">Reviews</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="login.php">Login</a></li>
            <li><a href="team.html">Team</a></li>
        </ul>
    </div>

    <div class="footer-column">
        <h3>Contact</h3>
        <p>Email: moodflix@gmail.com</p>
        <p>Phone: +972 54-782-9888</p>
        <p>© 2026 MoodFlix — All rights reserved</p>
    </div>
</footer>

<script src="MoodFlixJS.js"></script>

</body>
</html>