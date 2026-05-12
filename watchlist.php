<?php
session_start();
include "db.php";
global $conn;

if (!isset($_SESSION["user_id"])) {
    header("Location: login.php");
    exit();
}

$userId = $_SESSION["user_id"];
$username = $_SESSION["username"];
$displayUsername = ucfirst($username);
$message = "";

$userSql = "SELECT profile_image FROM users WHERE id='$userId'";
$userResult = mysqli_query($conn, $userSql);
$userData = mysqli_fetch_assoc($userResult);

$profileImage = "uploads/anon.webp";

if ($userData && $userData["profile_image"] != "") {
    $profileImage = $userData["profile_image"];
}

function getWatchImage($title) {
    $title = strtolower(trim($title));

    if ($title == "friends") {
        return "images/Friends.jpg";
    } elseif ($title == "how i met your mother") {
        return "images/HowIMetYourMother.jpg";
    } elseif ($title == "inception") {
        return "images/inception.jpg";
    } elseif ($title == "mad max") {
        return "images/madMax.jpg";
    } elseif ($title == "the crown") {
        return "images/TheCrown.jpg";
    } elseif ($title == "the dark knight") {
        return "images/TheDarkKnight.jpg";
    } elseif ($title == "the notebook") {
        return "images/TheNoteBook.jpg";
    } elseif ($title == "vampire diaries") {
        return "images/vampireDiaries.jpg";
    } elseif ($title == "sullivans crossing") {
        return "images/sullivansCrossing.jpg";
    } elseif ($title == "grey's anatomy" || $title == "greys anatomy") {
        return "images/greysAnatomy.jpg";
    } elseif ($title == "prison break") {
        return "images/prisonBreak.jpg";
    } elseif ($title == "shameless") {
        return "images/shameless.jpg";
    } elseif ($title == "fauda") {
        return "images/fauda.jpg";
    } elseif ($title == "gossip girl") {
        return "images/gossipGirl.jpg";
    } elseif ($title == "gilmore girls") {
        return "images/gilmoreGirls.jpg";
    } elseif ($title == "suits") {
        return "images/suits.jpg";
    } elseif ($title == "bridgerton") {
        return "images/bridgerton.jpg";
    } elseif ($title == "lucifer") {
        return "images/lucifer.jpg";
    } elseif ($title == "zohan") {
        return "images/zohan.jpg";
    } elseif ($title == "vikings") {
        return "images/vikings.jpg";
    } elseif ($title == "wednesday") {
        return "images/wednesday.jpg";
    } elseif ($title == "letters to juliet") {
        return "images/lettersForJuliet.jpeg";
    } elseif ($title == "made of honor") {
        return "images/madeOfHonor.jpg";
    } elseif ($title == "spiderman") {
        return "images/spiderman.jpg";
    } elseif ($title == "annie") {
        return "images/annie.jpg";
    } elseif ($title == "black mirror") {
        return "images/blackMirror.jpg";
    } elseif ($title == "stranger things") {
        return "images/strangerThings.jpg";
    } elseif ($title == "forrest gump") {
        return "images/forrestGump.jpg";
    } elseif ($title == "breaking bad") {
        return "images/breakingBad.jpg";
    } elseif ($title == "mission impossible") {
        return "images/missionImpossible.jpg";
    } elseif ($title == "gladiator") {
        return "images/gladiator.jpg";
    } elseif ($title == "the last kingdom") {
        return "images/theLastKingdom.jpg";
    } elseif ($title == "the night agent") {
        return "images/theNightAgent.jpg";
    } elseif ($title == "jack ryan") {
        return "images/jackRyan.jpg";
    } elseif ($title == "interstellar") {
        return "images/interstellar.jpg";
    } elseif ($title == "the matrix") {
        return "images/theMatrix.jpg";
    } elseif ($title == "avatar") {
        return "images/avatar.jpg";
    } elseif ($title == "me before you") {
        return "images/meBeforeYou.jpg";
    } elseif ($title == "emily in paris") {
        return "images/emilyInParis.jpg";
    } elseif ($title == "virgin river") {
        return "images/virginRiver.jpg";
    } elseif ($title == "the proposal") {
        return "images/theProposal.jpg";
    } elseif ($title == "white chicks") {
        return "images/whiteChicks.jpg";
    } elseif ($title == "the big bang theory") {
        return "images/theBigBangTheory.jpg";
    } elseif ($title == "brooklyn nine nine") {
        return "images/brooklynNineNine.jpg";
    }

    return "images/cinema.jpg";
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["add_item"])) {
        $title = trim($_POST["title"]);
        $type = $_POST["type"];
        $genre = $_POST["genre"];
        $status = $_POST["status"];
        $watchDate = $_POST["watch_date"];
        $currentEpisode = $_POST["current_episode"];

        if ($title == "") {
            $message = "Please enter a title.";
        } else {
            if ($watchDate == "") {
                $watchDateValue = "NULL";
            } else {
                $watchDateValue = "'" . $watchDate . "'";
            }

            if ($currentEpisode == "") {
                $currentEpisodeValue = "NULL";
            } else {
                $currentEpisodeValue = $currentEpisode;
            }

            $sql = "INSERT INTO watchlist (user_id, title, type, genre, status, watch_date, current_episode)
                    VALUES ('$userId', '$title', '$type', '$genre', '$status', $watchDateValue, $currentEpisodeValue)";

            if (mysqli_query($conn, $sql)) {
                $message = "Item added to your watchlist.";
            } else {
                $message = "Error: " . mysqli_error($conn);
            }
        }
    }

    if (isset($_POST["delete_item"])) {
        $itemId = $_POST["item_id"];

        $sql = "DELETE FROM watchlist 
                WHERE id='$itemId' AND user_id='$userId'";

        if (mysqli_query($conn, $sql)) {
            $message = "Item removed from your watchlist.";
        } else {
            $message = "Error: " . mysqli_error($conn);
        }
    }

    if (isset($_POST["change_status"])) {
        $itemId = $_POST["item_id"];
        $currentStatus = $_POST["current_status"];

        if ($currentStatus == "Planned") {
            $newStatus = "Watching";
        } elseif ($currentStatus == "Watching") {
            $newStatus = "Completed";
        } else {
            $newStatus = "Planned";
        }

        $sql = "UPDATE watchlist 
                SET status='$newStatus' 
                WHERE id='$itemId' AND user_id='$userId'";

        if (mysqli_query($conn, $sql)) {
            $message = "Status changed successfully.";
        } else {
            $message = "Error: " . mysqli_error($conn);
        }
    }
}

$itemsSql = "SELECT * FROM watchlist WHERE user_id='$userId'";
$itemsResult = mysqli_query($conn, $itemsSql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Watchlist - MoodFlix</title>
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
            <li><a href="team.html">Team</a></li>
        </ul>
    </nav>

    <h1>Watchlist</h1>

    <div class="user-profile-header">
        <p>Welcome, <?php echo htmlspecialchars($displayUsername); ?></p>
        <img src="<?php echo htmlspecialchars($profileImage); ?>" alt="Profile image" class="user-profile-image">
        <p>Track what you're watching and update your personal list.</p>
        <a href="logout.php" class="logout-button">Logout</a>
    </div>
</header>

<main>

    <section class="watchlist-section">
        <h2>My Watchlist</h2>
        <p class="watchlist-note">Add, remove, and organize movies or series by watching status.</p>

        <div class="add-watchlist-box">
            <h3>Add New Item</h3>

            <form method="post" action="watchlist.php#saved-watchlist">
                <div class="add-watchlist-grid">

                    <div class="watchlist-field">
                        <label for="title">Title:</label>
                        <input list="titleOptions" type="text" id="title" name="title" placeholder="Choose or type a title" required>
                    </div>

                    <datalist id="titleOptions">
                        <option value="Friends">
                        <option value="How I Met Your Mother">
                        <option value="Inception">
                        <option value="Mad Max">
                        <option value="The Crown">
                        <option value="The Dark Knight">
                        <option value="The Notebook">
                        <option value="Vampire Diaries">
                        <option value="Sullivans Crossing">
                        <option value="Grey's Anatomy">
                        <option value="Prison Break">
                        <option value="Shameless">
                        <option value="Fauda">
                        <option value="Gossip Girl">
                        <option value="Gilmore Girls">
                        <option value="Suits">
                        <option value="Bridgerton">
                        <option value="Lucifer">
                        <option value="Zohan">
                        <option value="Vikings">
                        <option value="Wednesday">
                        <option value="Letters to Juliet">
                        <option value="Made of Honor">
                        <option value="Spiderman">
                        <option value="Annie">
                        <option value="Black Mirror">
                        <option value="Stranger Things">
                        <option value="Forrest Gump">
                        <option value="Breaking Bad">
                        <option value="Mission Impossible">
                        <option value="Gladiator">
                        <option value="The Last Kingdom">
                        <option value="The Night Agent">
                        <option value="Jack Ryan">
                        <option value="Interstellar">
                        <option value="The Matrix">
                        <option value="Avatar">
                        <option value="Me Before You">
                        <option value="Emily in Paris">
                        <option value="Virgin River">
                        <option value="The Proposal">
                        <option value="White Chicks">
                        <option value="The Big Bang Theory">
                        <option value="Brooklyn Nine Nine">
                    </datalist>

                    <div class="watchlist-field">
                        <label for="type">Type:</label>
                        <select id="type" name="type" required>
                            <option value="Movie">Movie</option>
                            <option value="Series">Series</option>
                        </select>
                    </div>

                    <div class="watchlist-field">
                        <label for="genre">Genre:</label>
                        <select id="genre" name="genre" required>
                            <option value="Comedy">Comedy</option>
                            <option value="Drama">Drama</option>
                            <option value="Action">Action</option>
                            <option value="Science Fiction">Science Fiction</option>
                            <option value="Romance">Romance</option>
                        </select>
                    </div>

                    <div class="watchlist-field">
                        <label for="status">Watching status:</label>
                        <select id="status" name="status" required>
                            <option value="Planned">Planned</option>
                            <option value="Watching">Watching</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                    <div class="watchlist-field">
                        <label for="watch_date">Watch date:</label>
                        <input type="date" id="watch_date" name="watch_date">
                        <small>For series: start date. For movies: watched date.</small>
                    </div>

                    <div class="watchlist-field">
                        <label for="current_episode">Current episode:</label>
                        <input type="number" id="current_episode" name="current_episode" min="0" placeholder="For series only">
                        <small>Use this field only when the item is a series.</small>
                    </div>
                </div>

                <button type="submit" name="add_item">Add to Watchlist</button>
            </form>

            <p id="watchlistMessage"><?php echo $message; ?></p>
        </div>

        <h2 id="saved-watchlist">Your Saved Watchlist</h2>

        <div class="watchlist-table-box">
            <table class="watchlist-table">
                <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Genre</th>
                    <th>Status</th>
                    <th>Watch Date</th>
                    <th>Episode</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                <?php
                if (mysqli_num_rows($itemsResult) > 0) {
                    while ($row = mysqli_fetch_assoc($itemsResult)) {
                        $image = getWatchImage($row["title"]);
                        $statusClass = strtolower($row["status"]);

                        echo "<tr>";

                        echo "<td>";
                        echo "<img src='" . $image . "' alt='" . htmlspecialchars($row["title"]) . " poster' class='watchlist-table-image'>";
                        echo "</td>";

                        echo "<td>" . htmlspecialchars(ucwords($row["title"])) . "</td>";
                        echo "<td>" . htmlspecialchars($row["type"]) . "</td>";
                        echo "<td>" . htmlspecialchars($row["genre"]) . "</td>";

                        echo "<td>";
                        echo "<span class='watch-status " . $statusClass . "'>" . htmlspecialchars($row["status"]) . "</span>";
                        echo "</td>";

                        if ($row["watch_date"] != "") {
                            echo "<td>" . htmlspecialchars($row["watch_date"]) . "</td>";
                        } else {
                            echo "<td>-</td>";
                        }

                        if ($row["current_episode"] != "" && $row["current_episode"] != 0) {
                            echo "<td>" . htmlspecialchars($row["current_episode"]) . "</td>";
                        } else {
                            echo "<td>-</td>";
                        }

                        echo "<td class='watchlist-actions'>";

                        echo "<form method='post' action='watchlist.php#saved-watchlist'>";
                        echo "<input type='hidden' name='item_id' value='" . $row["id"] . "'>";
                        echo "<input type='hidden' name='current_status' value='" . htmlspecialchars($row["status"]) . "'>";
                        echo "<button type='submit' name='change_status'>Change status</button>";
                        echo "</form>";

                        echo "<form method='post' action='watchlist.php#saved-watchlist'>";
                        echo "<input type='hidden' name='item_id' value='" . $row["id"] . "'>";
                        echo "<button type='submit' name='delete_item'>Remove</button>";
                        echo "</form>";

                        echo "</td>";

                        echo "</tr>";
                    }
                } else {
                    echo "<tr>";
                    echo "<td colspan='8'>Your watchlist is empty.</td>";
                    echo "</tr>";
                }
                ?>
                </tbody>
            </table>
        </div>
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