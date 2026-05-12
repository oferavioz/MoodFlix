<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mood Result - MoodFlix</title>
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

    <h1>Your MoodFlix Result</h1>
    <p>Your personalized recommendation is ready.</p>
</header>

<main>

    <section class="php-result-box">

        <?php
        function chooseRecommendation($mood, $type, $genre) {
            $recommendations = array(
                "happy_movie_comedy" => array(
                    "title" => "The Proposal",
                    "image" => "images/theProposal.jpg",
                    "duration" => "108 minutes",
                    "description" => "A romantic comedy about an unexpected engagement, work pressure, and surprising feelings."
                ),

                "happy_series_comedy" => array(
                    "title" => "Friends",
                    "image" => "images/Friends.jpg",
                    "duration" => "22 minutes per episode",
                    "description" => "A classic comedy series about friendship, love, and everyday life in New York."
                ),

                "emotional_movie_romance" => array(
                    "title" => "Me Before You",
                    "image" => "images/meBeforeYou.jpg",
                    "duration" => "110 minutes",
                    "description" => "A touching romantic drama about love, personal growth, and life-changing choices."
                ),

                "emotional_series_romance" => array(
                    "title" => "Bridgerton",
                    "image" => "images/bridgerton.jpg",
                    "duration" => "About 60 minutes per episode",
                    "description" => "A romantic period drama about society, family, secrets, and complicated love stories."
                ),

                "excited_movie_action" => array(
                    "title" => "The Dark Knight",
                    "image" => "images/TheDarkKnight.jpg",
                    "duration" => "152 minutes",
                    "description" => "An intense action movie about justice, chaos, and the fight against crime."
                ),

                "excited_series_action" => array(
                    "title" => "Prison Break",
                    "image" => "images/prisonBreak.jpg",
                    "duration" => "About 45 minutes per episode",
                    "description" => "An action-packed series about escape plans, danger, loyalty, and survival."
                ),

                "relaxed_movie_romance" => array(
                    "title" => "Letters to Juliet",
                    "image" => "images/lettersForJuliet.jpeg",
                    "duration" => "105 minutes",
                    "description" => "A romantic movie about lost love, old letters, and a journey through Italy."
                ),

                "relaxed_series_romance" => array(
                    "title" => "Gilmore Girls",
                    "image" => "images/gilmoreGirls.jpg",
                    "duration" => "About 45 minutes per episode",
                    "description" => "A warm series about family, friendships, love, and small-town life."
                ),

                "excited_movie_science fiction" => array(
                    "title" => "Inception",
                    "image" => "images/inception.jpg",
                    "duration" => "148 minutes",
                    "description" => "A mind-bending science fiction thriller about dreams, memory, and reality."
                ),

                "excited_series_science fiction" => array(
                    "title" => "Stranger Things",
                    "image" => "images/strangerThings.jpg",
                    "duration" => "About 50 minutes per episode",
                    "description" => "A science fiction mystery series about friendship, danger, and supernatural events."
                ),

                "emotional_movie_drama" => array(
                    "title" => "Forrest Gump",
                    "image" => "images/forrestGump.jpg",
                    "duration" => "142 minutes",
                    "description" => "A moving drama about life, love, history, and seeing the world in a unique way."
                ),

                "emotional_series_drama" => array(
                    "title" => "The Crown",
                    "image" => "images/TheCrown.jpg",
                    "duration" => "About 55 minutes per episode",
                    "description" => "A dramatic series about royal life, power, responsibility, and personal struggles."
                )
            );

            $key = $mood . "_" . $type . "_" . $genre;

            if (isset($recommendations[$key])) {
                return $recommendations[$key];
            }

            if ($type == "movie") {
                return array(
                    "title" => "Inception",
                    "image" => "images/inception.jpg",
                    "duration" => "148 minutes",
                    "description" => "A mind-bending science fiction thriller about dreams, memory, and reality."
                );
            }

            return array(
                "title" => "Friends",
                "image" => "images/Friends.jpg",
                "duration" => "22 minutes per episode",
                "description" => "A classic comedy series about friendship, love, and everyday life in New York."
            );
        }

        function getTimeText($timeCode, $type) {
            if ($type == "movie") {
                if ($timeCode == "short") {
                    return "up to 2 hours";
                } elseif ($timeCode == "medium") {
                    return "about 2 hours";
                } else {
                    return "more than 2 hours";
                }
            } else {
                if ($timeCode == "short") {
                    return "up to 1 hour";
                } elseif ($timeCode == "medium") {
                    return "1-2 hours";
                } else {
                    return "more than 2 hours";
                }
            }
        }

        $userName = $_POST["userName"];
        $userMood = $_POST["userMood"];
        $availableTime = $_POST["availableTime"];
        $preferredType = $_POST["preferredType"];
        $preferredGenre = $_POST["preferredGenre"];

        $cleanName = trim($userName);
        $displayName = ucwords(strtolower($cleanName));
        $nameLength = strlen($cleanName);

        $recommendation = chooseRecommendation($userMood, $preferredType, $preferredGenre);
        $timeText = getTimeText($availableTime, $preferredType);

        if ($availableTime == "short") {
            $watchMinutes = 60;
        } elseif ($availableTime == "medium") {
            $watchMinutes = 120;
        } else {
            $watchMinutes = 180;
        }

        $watchHours = $watchMinutes / 60;

        $moodMessages = array(
            "happy" => "You seem to be in the mood for something fun and light.",
            "emotional" => "You seem ready for a deeper and more meaningful story.",
            "excited" => "You seem ready for action, suspense, and energy.",
            "relaxed" => "You seem to prefer a calm and comfortable viewing experience."
        );

        echo "<h2>Hello " . htmlspecialchars($displayName) . "!</h2>";

        echo "<p class='result-intro'>Based on your answers, MoodFlix recommends:</p>";

        echo "<div class='recommendation-result'>";
        echo "<h3>" . $recommendation["title"] . "</h3>";
        echo "<img src='" . $recommendation["image"] . "' alt='" . $recommendation["title"] . " poster'>";
        echo "<p class='recommendation-description'>" . $recommendation["description"] . "</p>";
        echo "<p><strong>Duration:</strong> " . $recommendation["duration"] . "</p>";
        echo "<p><strong>Your available time:</strong> " . $watchHours . " hours</p>";
        echo "</div>";

        echo "<h3>Why this recommendation?</h3>";

        echo "<button type='button' class='back-button' onclick='toggleMoodExplanation()'>Show Explanation</button>";
        echo "<div id='moodExplanationBox' class='hidden-box'>";

        echo "<ul>";
        foreach ($moodMessages as $mood => $message) {
            if ($mood == $userMood) {
                echo "<li>" . $message . "</li>";
            }
        }
        echo "<li>This recommendation matches your preferred category and content type.</li>";
        echo "<li>The available time was adjusted according to whether you chose a movie or a series.</li>";
        echo "</ul>";
        ?>

        <a href="recommendations.html" class="back-button">Try Again</a>

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