<?php
session_start();
include "db.php";
global $conn;

$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST["username"]);
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);
    $birthDate = $_POST["birth_date"];
    $profileImage = "";

    if ($username == "" || $email == "" || $password == "" || $birthDate == "") {
        $message = "Please fill in all fields.";
    } else {
        $checkSql = "SELECT * FROM users WHERE username='$username' OR email='$email'";
        $checkResult = mysqli_query($conn, $checkSql);

        if (mysqli_num_rows($checkResult) > 0) {
            $message = "Username or email already exists.";
        } else {

            if (isset($_FILES["profile_image"]) && $_FILES["profile_image"]["name"] != "") {
                $imageName = basename($_FILES["profile_image"]["name"]);
                $targetPath = "uploads/" . time() . "_" . $imageName;

                if (move_uploaded_file($_FILES["profile_image"]["tmp_name"], $targetPath)) {
                    $profileImage = $targetPath;
                } else {
                    $message = "Profile image upload failed.";
                }
            }

            if ($message == "") {
                $insertSql = "INSERT INTO users (username, email, password, birth_date, profile_image)
                              VALUES ('$username', '$email', '$password', '$birthDate', '$profileImage')";

                if (mysqli_query($conn, $insertSql)) {
                    $message = "Registration completed successfully. You can now log in.";
                } else {
                    $message = "Error: " . mysqli_error($conn);
                }
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Register - MoodFlix</title>
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

    <h1>Create Account</h1>
    <p>Register to save your personal MoodFlix watchlist.</p>
</header>

<main>

    <section class="auth-section">
        <h2>Register</h2>

        <form class="auth-form" action="register.php" method="post" enctype="multipart/form-data">
            <div class="form-row">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Choose username" required>
            </div>

            <div class="form-row">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter email" required>
            </div>

            <div class="form-row">
                <label for="birth_date">Date of birth:</label>
                <input type="date" id="birth_date" name="birth_date" required>
            </div>

            <div class="form-row">
                <label for="profile_image">Profile image:</label>
                <input type="file" id="profile_image" name="profile_image" accept="image/*" onchange="showSelectedImageMessage()">
                <small id="profileImageMessage"></small>
            </div>

            <div class="form-row">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Choose password" required oninput="checkPasswordStrength()">
                <small id="passwordStrengthMessage"></small>
            </div>

            <div class="form-buttons">
                <input type="submit" value="Register">
            </div>
        </form>

        <p class="auth-message"><?php echo $message; ?></p>

        <p class="auth-link">
            Already have an account?
            <a href="login.php">Login here</a>
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