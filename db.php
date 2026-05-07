<?php
$host = "sql303.byethost32.com";
$user = "b32_41391548";
$password = "5sn8j06k";
$database = "b32_41391548_MoodFlix";

$conn = mysqli_connect($host, $user, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>