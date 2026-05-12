// Home page functions :
function toggleMenu() {
    let navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

function askVisitorName() {
    let visitorName = window.prompt("Please enter your name:", "Guest");
    let greeting = document.getElementById("visitorGreeting");

    if (visitorName === null || visitorName === "") {
        greeting.innerText = "Welcome to MoodFlix!";
    } else {
        greeting.innerText = "Welcome to MoodFlix, " + visitorName + "!";
    }
}

function giveRecommendation() {
    let mood = document.getElementById("moodSelect").value;
    let time = document.getElementById("timeSelect").value;
    let result = document.getElementById("result");

    if (mood === "" || time === "") {
        result.innerText = "Please choose both mood and available time.";
        return;
    }
    if (mood === "happy" && time === "short") {
        result.innerText = "We recommend a short comedy episode!";
    } else if (mood === "sad" && time === "medium") {
        result.innerText = "We recommend an emotional drama movie.";
    } else if (mood === "excited" && time === "long") {
        result.innerText = "We recommend an action-packed thriller series!";
    } else if (mood === "relaxed") {
        result.innerText = "We recommend a calm feel-good movie.";
    } else {
        result.innerText = "We recommend exploring our featured categories!";
    }
}

// Personal info page
function toggleContactInfo() {
    let contactBox = document.getElementById("contactBox");
    let button = document.getElementById("contactToggleBtn");

    contactBox.classList.toggle("hidden-box");
    if (contactBox.classList.contains("hidden-box")) {
        button.innerText = "Show Contact Details";
    } else {
        button.innerText = "Hide Contact Details";
    }
}

function sendEmail() {
    window.location.href = "mailto:oferavioz1234@gmail.com?subject=MoodFlix Project";
}

// Team page
function showTeamContact() {
    let box = document.getElementById("teamContactBox");
    let button = document.getElementById("teamContactBtn");

    box.classList.toggle("hidden-box");
    if (box.classList.contains("hidden-box")) {
        button.innerText = "Show Contact Info";
    } else {
        button.innerText = "Hide Contact Info";
    }
}

// Recommendations
function showMovieInfo(movieName) {
    let movieInfo = document.getElementById("movieInfo");

    movieInfo.innerText = "You selected: " + movieName + ". This recommendation was chosen especially for MoodFlix users.";
}

// Search
let moodflixContent = [
    // Comedy movies
    { title: "You Don't Mess with the Zohan", genre: "comedy", type: "movie", language: "english", duration: "medium", rating: 5.6 },
    { title: "Made of Honor", genre: "comedy", type: "movie", language: "english", duration: "medium", rating: 5.8 },
    { title: "Annie", genre: "comedy", type: "movie", language: "english", duration: "medium", rating: 4.7 },
    { title: "The Proposal", genre: "comedy", type: "movie", language: "english", duration: "medium", rating: 6.7 },
    { title: "White Chicks", genre: "comedy", type: "movie", language: "english", duration: "medium", rating: 5.8 },

    // Comedy series
    { title: "Friends", genre: "comedy", type: "series", language: "english", duration: "medium", rating: 9.6 },
    { title: "How I Met Your Mother", genre: "comedy", type: "series", language: "english", duration: "medium", rating: 8.4 },
    { title: "Shameless", genre: "comedy", type: "series", language: "english", duration: "medium", rating: 8.5 },
    { title: "The Big Bang Theory", genre: "comedy", type: "series", language: "english", duration: "medium", rating: 8.1 },
    { title: "Brooklyn Nine-Nine", genre: "comedy", type: "series", language: "english", duration: "medium", rating: 8.4 },

    // Drama movies
    { title: "The Notebook", genre: "drama", type: "movie", language: "english", duration: "medium", rating: 7.8 },
    { title: "La La Land", genre: "drama", type: "movie", language: "english", duration: "medium", rating: 4.2 },
    { title: "Forrest Gump", genre: "drama", type: "movie", language: "english", duration: "long", rating: 8.8 },

    // Drama series
    { title: "The Crown", genre: "drama", type: "series", language: "english", duration: "long", rating: 8.6 },
    { title: "Grey's Anatomy", genre: "drama", type: "series", language: "english", duration: "long", rating: 7.6 },
    { title: "Sullivan's Crossing", genre: "drama", type: "series", language: "english", duration: "medium", rating: 6.9 },
    { title: "Suits", genre: "drama", type: "series", language: "english", duration: "medium", rating: 8.4 },
    { title: "Breaking Bad", genre: "drama", type: "series", language: "english", duration: "long", rating: 9.5 },

    // Action movies
    { title: "The Dark Knight", genre: "action", type: "movie", language: "english", duration: "long", rating: 9.0 },
    { title: "Mad Max: Fury Road", genre: "action", type: "movie", language: "english", duration: "medium", rating: 8.1 },
    { title: "Spider-Man", genre: "action", type: "movie", language: "english", duration: "medium", rating: 7.4 },
    { title: "Mission Impossible", genre: "action", type: "movie", language: "english", duration: "medium", rating: 7.1 },
    { title: "Gladiator", genre: "action", type: "movie", language: "english", duration: "long", rating: 8.5 },

    // Action series
    { title: "Prison Break", genre: "action", type: "series", language: "english", duration: "medium", rating: 8.3 },
    { title: "Fauda", genre: "action", type: "series", language: "hebrew", duration: "medium", rating: 9.2 },
    { title: "Vikings", genre: "action", type: "series", language: "english", duration: "long", rating: 8.5 },
    { title: "The Last Kingdom", genre: "action", type: "series", language: "english", duration: "long", rating: 8.5 },
    { title: "The Night Agent", genre: "action", type: "series", language: "english", duration: "medium", rating: 6.7 },
    { title: "Jack Ryan", genre: "action", type: "series", language: "english", duration: "medium", rating: 8.0 },

    // Science fiction movies
    { title: "Inception", genre: "science fiction", type: "movie", language: "english", duration: "long", rating: 9.5 },
    { title: "Interstellar", genre: "science fiction", type: "movie", language: "english", duration: "long", rating: 6.7 },
    { title: "The Matrix", genre: "science fiction", type: "movie", language: "english", duration: "medium", rating: 8.7 },
    { title: "Avatar", genre: "science fiction", type: "movie", language: "english", duration: "long", rating: 7.9 },

    // Science fiction series
    { title: "Lucifer", genre: "science fiction", type: "series", language: "english", duration: "medium", rating: 8.1 },
    { title: "Wednesday", genre: "science fiction", type: "series", language: "english", duration: "medium", rating: 8.1 },
    { title: "Black Mirror", genre: "science fiction", type: "series", language: "english", duration: "medium", rating: 8.7 },
    { title: "Stranger Things", genre: "science fiction", type: "series", language: "english", duration: "medium", rating: 8.7 },

    // Romance movies
    { title: "The Notebook", genre: "romance", type: "movie", language: "english", duration: "medium", rating: 7.8 },
    { title: "Letters to Juliet", genre: "romance", type: "movie", language: "english", duration: "medium", rating: 4.5 },
    { title: "Made of Honor", genre: "romance", type: "movie", language: "english", duration: "medium", rating: 5.8 },
    { title: "Me Before You", genre: "romance", type: "movie", language: "english", duration: "medium", rating: 9.3 },

    // Romance series
    { title: "Gossip Girl", genre: "romance", type: "series", language: "english", duration: "medium", rating: 7.5 },
    { title: "Gilmore Girls", genre: "romance", type: "series", language: "english", duration: "medium", rating: 8.2 },
    { title: "Bridgerton", genre: "romance", type: "series", language: "english", duration: "medium", rating: 7.4 },
    { title: "The Vampire Diaries", genre: "romance", type: "series", language: "english", duration: "medium", rating: 7.7 },
    { title: "Emily in Paris", genre: "romance", type: "series", language: "english", duration: "medium", rating: 6.9 },
    { title: "Virgin River", genre: "romance", type: "series", language: "english", duration: "medium", rating: 7.4 }
];

function searchContent() {
    let genre = document.getElementById("searchGenre").value;
    let type = document.getElementById("searchType").value;
    let duration = document.getElementById("searchDuration").value;
    let language = document.getElementById("searchLanguage").value;
    let rating = document.getElementById("searchRating").value;
    let resultsBox = document.getElementById("searchResults");

    let results = [];

    for (let i = 0; i < moodflixContent.length; i++) {
        let item = moodflixContent[i];
        let ratingMatch = false;

        if (rating === "") {
            ratingMatch = true;
        } else if (rating === "1-5" && item.rating >= 1 && item.rating <= 5) {
            ratingMatch = true;
        } else if (rating === "5.1-7" && item.rating >= 5.1 && item.rating <= 7) {
            ratingMatch = true;
        } else if (rating === "7.1-9" && item.rating >= 7.1 && item.rating < 9) {
            ratingMatch = true;
        } else if (rating === "9" && item.rating >= 9) {
            ratingMatch = true;
        }

        if ((genre === "" || item.genre === genre) &&
            (type === "" || item.type === type) &&
            (duration === "" || item.duration === duration) &&
            (language === "" || item.language === language) &&
            ratingMatch) {
            results.push(item);
        }
    }

    if (results.length === 0) {
        resultsBox.innerHTML = "<p>No matching recommendations were found. Try different filters.</p>";
        return;
    }

    let output = "<h3>Search Results</h3>";

    for (let i = 0; i < results.length; i++) {
        output += "<div class='search-result-card'>";
        output += "<h3>" + results[i].title + "</h3>";
        output += "<p>Category: " + results[i].genre + "</p>";
        output += "<p>Type: " + results[i].type + "</p>";
        output += "<p>Duration: " + results[i].duration + "</p>";
        output += "<p>Language: " + results[i].language + "</p>";
        output += "<p>Rating: ⭐ " + results[i].rating + "</p>";
        output += "</div>";
    }

    resultsBox.innerHTML = output;
}

// Contact
function showContactMessage() {
    let status = document.getElementById("contactStatus");

    if (status) {
        status.innerText = "Your email application will open so you can send the message.";
    }

    return true;
}

function sendMovieRequest() {
    let email = document.getElementById("requestEmail").value;
    let title = document.getElementById("requestTitle").value;
    let type = document.getElementById("requestType").value;
    let link = document.getElementById("requestLink").value;
    let reason = document.getElementById("requestReason").value;
    let message = document.getElementById("requestMessage");

    if (email === "" || title === "" || link === "" || reason === "") {
        message.innerText = "Please fill in all request fields.";
        return;
    }

    message.innerText = "Thank you! Your request for " + title + " was sent to the MoodFlix team.";

    document.getElementById("requestEmail").value = "";
    document.getElementById("requestTitle").value = "";
    document.getElementById("requestType").value = "Movie";
    document.getElementById("requestLink").value = "";
    document.getElementById("requestReason").value = "";
}

// WatchList
let watchlistItems = [
    {
        title: "Inception",
        genre: "Science Fiction",
        type: "Movie",
        status: "Planned",
        image: "images/inception.jpg"
    },
    {
        title: "Friends",
        genre: "Comedy",
        type: "Series",
        status: "Watching",
        image: "images/Friends.jpg"
    },
    {
        title: "The Crown",
        genre: "Drama",
        type: "Series",
        status: "Completed",
        image: "images/TheCrown.jpg"
    },
    {
        title: "The Dark Knight",
        genre: "Action",
        type: "Movie",
        status: "Planned",
        image: "images/TheDarkKnight.jpg"
    }
];

function displayWatchlist() {
    let grid = document.getElementById("watchlistGrid");

    if (!grid) {
        return;
    }

    let output = "";

    for (let i = 0; i < watchlistItems.length; i++) {
        let item = watchlistItems[i];
        let statusClass = "planned";

        if (item.status === "Watching") {
            statusClass = "watching";
        } else if (item.status === "Completed") {
            statusClass = "completed";
        }

        output += "<div class='watchlist-card'>";
        output += "<img src='" + item.image + "' alt='" + item.title + " poster'>";
        output += "<h3>" + item.title + "</h3>";
        output += "<p>" + item.genre + " · " + item.type + "</p>";
        output += "<span class='watch-status " + statusClass + "'>" + item.status + "</span>";
        output += "<button onclick='changeWatchStatus(" + i + ")'>Change Status</button>";
        output += "<button onclick='removeWatchlistItem(" + i + ")'>Remove</button>";
        output += "</div>";
    }

    grid.innerHTML = output;
}

function addWatchlistItem() {
    let title = document.getElementById("watchTitle").value;
    let type = document.getElementById("watchType").value;
    let genre = document.getElementById("watchGenre").value;
    let status = document.getElementById("watchStatusInput").value;
    let message = document.getElementById("watchlistMessage");

    if (title === "") {
        message.innerText = "Please enter a title before adding an item.";
        return;
    }

    if (title === "") {
        message.innerText = "Please enter a title before adding an item.";
        return;
    }

    let image = getWatchlistImage(title);

    if (image === "") {
        message.innerText = "This title does not exist in MoodFlix. Please enter a title from the recommendations list.";
        return;
    }

    let newItem = {
        title: title,
        genre: genre,
        type: type,
        status: status,
        image: image
    };

    watchlistItems.push(newItem);

    document.getElementById("watchTitle").value = "";
    message.innerText = title + " was added to your watchlist.";

    displayWatchlist();
}

function getWatchlistImage(title) {
    let cleanTitle = title.toLowerCase();

    if (cleanTitle === "friends") {
        return "images/Friends.jpg";
    } else if (cleanTitle === "how i met your mother") {
        return "images/HowIMetYourMother.jpg";
    } else if (cleanTitle === "the crown") {
        return "images/TheCrown.jpg";
    } else if (cleanTitle === "the dark knight") {
        return "images/TheDarkKnight.jpg";
    } else if (cleanTitle === "inception") {
        return "images/inception.jpg";
    } else if (cleanTitle === "mad max" || cleanTitle === "mad max: fury road") {
        return "images/madMax.jpg";
    } else if (cleanTitle === "the notebook") {
        return "images/TheNoteBook.jpg";
    } else if (cleanTitle === "la la land") {
        return "images/lalaland.jpg";
    } else if (cleanTitle === "vampire diaries" || cleanTitle === "the vampire diaries") {
        return "images/vampireDiaries.jpg";
    } else if (cleanTitle === "grey's anatomy" || cleanTitle === "greys anatomy") {
        return "images/greysAnatomy.jpg";
    } else if (cleanTitle === "sullivan's crossing" || cleanTitle === "sullivans crossing") {
        return "images/sullivansCrossing.jpg";
    } else if (cleanTitle === "prison break") {
        return "images/prisonBreak.jpg";
    } else if (cleanTitle === "shameless") {
        return "images/shameless.jpg";
    } else if (cleanTitle === "fauda") {
        return "images/fauda.jpg";
    } else if (cleanTitle === "gossip girl") {
        return "images/gossipGirl.jpg";
    } else if (cleanTitle === "gilmore girls") {
        return "images/gilmoreGirls.jpg";
    } else if (cleanTitle === "suits") {
        return "images/suits.jpg";
    } else if (cleanTitle === "bridgerton") {
        return "images/bridgerton.jpg";
    } else if (cleanTitle === "lucifer") {
        return "images/lucifer.jpg";
    } else if (cleanTitle === "zohan" || cleanTitle === "you don't mess with the zohan") {
        return "images/zohan.jpg";
    } else if (cleanTitle === "vikings") {
        return "images/vikings.jpg";
    } else if (cleanTitle === "wednesday") {
        return "images/wednesday.jpg";
    } else if (cleanTitle === "letters to juliet") {
        return "images/lettersForJuliet.jpeg";
    } else if (cleanTitle === "made of honor") {
        return "images/madeOfHonor.jpg";
    } else if (cleanTitle === "spider-man" || cleanTitle === "spiderman") {
        return "images/spiderman.jpg";
    } else if (cleanTitle === "annie") {
        return "images/annie.jpg";
    } else if (cleanTitle === "black mirror") {
        return "images/blackMirror.jpg";
    } else if (cleanTitle === "stranger things") {
        return "images/strangerThings.jpg";
    } else if (cleanTitle === "forrest gump") {
        return "images/forrestGump.jpg";
    } else if (cleanTitle === "breaking bad") {
        return "images/breakingBad.jpg";
    } else if (cleanTitle === "mission impossible") {
        return "images/missionImpossible.jpg";
    } else if (cleanTitle === "gladiator") {
        return "images/gladiator.jpg";
    } else if (cleanTitle === "the last kingdom") {
        return "images/theLastKingdom.jpg";
    } else if (cleanTitle === "the night agent") {
        return "images/theNightAgent.jpg";
    } else if (cleanTitle === "jack ryan") {
        return "images/jackRyan.jpg";
    } else if (cleanTitle === "interstellar") {
        return "images/interstellar.jpg";
    } else if (cleanTitle === "the matrix") {
        return "images/theMatrix.jpg";
    } else if (cleanTitle === "avatar") {
        return "images/avatar.jpg";
    } else if (cleanTitle === "me before you") {
        return "images/meBeforeYou.jpg";
    } else if (cleanTitle === "emily in paris") {
        return "images/emilyInParis.jpg";
    } else if (cleanTitle === "virgin river") {
        return "images/virginRiver.jpg";
    } else if (cleanTitle === "the proposal") {
        return "images/theProposal.jpg";
    } else if (cleanTitle === "white chicks") {
        return "images/whiteChicks.jpg";
    } else if (cleanTitle === "the big bang theory") {
        return "images/theBigBangTheory.jpg";
    } else if (cleanTitle === "brooklyn nine-nine" || cleanTitle === "brooklyn nine nine") {
        return "images/brooklynNineNine.jpg";
    }

    return "";
}

function removeWatchlistItem(index) {
    let message = document.getElementById("watchlistMessage");
    let removedTitle = watchlistItems[index].title;

    watchlistItems.splice(index, 1);

    message.innerText = removedTitle + " was removed from your watchlist.";

    displayWatchlist();
}

function changeWatchStatus(index) {
    let message = document.getElementById("watchlistMessage");

    if (watchlistItems[index].status === "Planned") {
        watchlistItems[index].status = "Watching";
    } else if (watchlistItems[index].status === "Watching") {
        watchlistItems[index].status = "Completed";
    } else {
        watchlistItems[index].status = "Planned";
    }

    message.innerText = "Watchlist status updated successfully.";

    displayWatchlist();
}

window.onload = function () {
    displayWatchlist();
};

// Reviews
let selectedHighlightRange = "";
let selectedHighlightColor = "#dda0dd";

let reviewsList = [
    {
        name: "Ofer",
        title: "Inception",
        type: "Movie",
        rating: 5,
        text: "A smart and exciting movie with a very creative story."
    },
    {
        name: "Daniel",
        title: "Friends",
        type: "Series",
        rating: 5,
        text: "A funny and comforting series that is always fun to watch."
    },
    {
        name: "Maya",
        title: "The Crown",
        type: "Series",
        rating: 4,
        text: "A beautiful drama series with strong acting and interesting characters."
    },
    {
        name: "Sara",
        title: "The Dark Knight",
        type: "Movie",
        rating: 5,
        text: "A powerful action movie with great acting and an unforgettable villain."
    },
    {
        name: "Noa",
        title: "Bridgerton",
        type: "Series",
        rating: 4,
        text: "A romantic and colorful series with beautiful costumes and dramatic stories."
    }
];

function updateRatingValue() {
    let ratingInput = document.getElementById("reviewRating");
    let ratingValue = document.getElementById("ratingValue");

    if (ratingInput && ratingValue) {
        ratingValue.innerText = ratingInput.value;
    }
}

function createStars(rating) {
    let stars = "";

    for (let i = 0; i < rating; i++) {
        stars += "⭐";
    }

    return stars;
}

function isRatingInSelectedRange(rating) {
    let ratingNumber = Number(rating);

    if (selectedHighlightRange === "") {
        return false;
    }

    if (selectedHighlightRange === "0-1") {
        return ratingNumber >= 0 && ratingNumber <= 1;
    } else if (selectedHighlightRange === "2") {
        return ratingNumber === 2;
    } else if (selectedHighlightRange === "3") {
        return ratingNumber === 3;
    } else if (selectedHighlightRange === "4") {
        return ratingNumber === 4;
    } else if (selectedHighlightRange === "5") {
        return ratingNumber === 5;
    }

    return false;
}

function applyReviewHighlight() {
    let rangeSelect = document.getElementById("highlightRatingRange");
    let colorInput = document.getElementById("highlightReviewColor");
    let message = document.getElementById("highlightMessage");

    selectedHighlightRange = rangeSelect.value;
    selectedHighlightColor = colorInput.value;

    if (selectedHighlightRange === "") {
        message.innerText = "Review highlight was removed.";
    } else {
        message.innerText = "Reviews rated " + selectedHighlightRange + " are now highlighted.";
    }

    displayReviews();
}

function displayReviews() {
    let container = document.getElementById("reviewsContainer");
    let totalReviews = document.getElementById("totalReviews");
    let averageRating = document.getElementById("averageRating");

    if (!container) {
        return;
    }

    let output = "";
    let sum = 0;

    for (let i = 0; i < reviewsList.length; i++) {
        let review = reviewsList[i];
        let ratingNumber = Number(review.rating);
        let stars = createStars(ratingNumber);
        let highlightStyle = "";

        if (isRatingInSelectedRange(ratingNumber)) {
            highlightStyle = " style='border-left: 8px solid " + selectedHighlightColor + ";'";
        }

        sum += ratingNumber;

        output += "<div class='review-card'" + highlightStyle + ">";
        output += "<div class='review-card-header'>";
        output += "<div>";
        output += "<h3>" + review.name + "</h3>";
        output += "<h4>on " + review.title + " · " + review.type + "</h4>";
        output += "</div>";
        output += "<div class='review-stars'>" + stars + "</div>";
        output += "</div>";
        output += "<p><strong>Rating:</strong> " + ratingNumber + "/5</p>";
        if (review.dateTime) {
            output += "<p><strong>Watched at:</strong> " + review.dateTime.replace("T", " ") + "</p>";
        }
        output += "<p>" + review.text + "</p>";
        output += "</div>";
    }

    container.innerHTML = output;

    if (totalReviews) {
        totalReviews.innerText = reviewsList.length;
    }

    if (averageRating) {
        averageRating.innerText = (sum / reviewsList.length).toFixed(1);
    }
}

function openReviewGuidelines() {
    let guideWindow = window.open("", "_blank");

    guideWindow.document.write("<html>");
    guideWindow.document.write("<head>");
    guideWindow.document.write("<title>MoodFlix Review Guidelines</title>");
    guideWindow.document.write("</head>");
    guideWindow.document.write("<body style='font-family: Arial, sans-serif; background-color: #111; color: white; padding: 30px;'>");
    guideWindow.document.write("<h1 style='color: plum;'>MoodFlix Review Guidelines</h1>");
    guideWindow.document.write("<p>Use this guide before writing a movie or series review.</p>");
    guideWindow.document.write("<ul>");
    guideWindow.document.write("<li>Write the movie or series title clearly.</li>");
    guideWindow.document.write("<li>Choose whether the content is a movie or a series.</li>");
    guideWindow.document.write("<li>Select a rating from 0 to 5.</li>");
    guideWindow.document.write("<li>Write what you liked or did not like.</li>");
    guideWindow.document.write("<li>Avoid spoilers when possible.</li>");
    guideWindow.document.write("</ul>");
    guideWindow.document.write("</body>");
    guideWindow.document.write("</html>");
}

function addReview() {
    let name = document.getElementById("reviewName").value;
    let title = document.getElementById("reviewTitle").value;
    let type = document.getElementById("reviewType").value;
    let rating = document.getElementById("reviewRating").value;
    let reviewDateTime = document.getElementById("reviewDateTime").value;
    let text = document.getElementById("reviewText").value;
    let message = document.getElementById("reviewMessage");

    if (name === "" || title === "" || text === "") {
        message.innerText = "Please fill in all review fields.";
        return;
    }

    let image = getWatchlistImage(title);

    if (image === "") {
        message.innerText = title + " does not exist in MoodFlix. Please enter a title from the recommendations list.";
        return;
    }

    let newReview = {
        name: name,
        title: title,
        type: type,
        rating: Number(rating),
        dateTime: reviewDateTime,
        text: text,
    };

    reviewsList.push(newReview);

    document.getElementById("reviewName").value = "";
    document.getElementById("reviewTitle").value = "";
    document.getElementById("reviewRating").value = "3";
    document.getElementById("ratingValue").innerText = "3";
    document.getElementById("reviewText").value = "";
    document.getElementById("reviewDateTime").value = "";

    message.innerText = "Your review was added successfully.";

    displayReviews();
}

window.addEventListener("load", function () {
    let ratingInput = document.getElementById("reviewRating");

    if (ratingInput) {
        ratingInput.addEventListener("input", updateRatingValue);
    }

    updateRatingValue();
    displayReviews();
});


// Home page video
function autoPlayVideoOnScroll() {
    let video = document.getElementById("moodflixVideo");

    if (!video) {
        return;
    }

    let videoPosition = video.getBoundingClientRect();
    let screenHeight = window.innerHeight;

    if (videoPosition.top < screenHeight && videoPosition.bottom > 0) {
        video.play();
    } else {
        video.pause();
    }
}

window.addEventListener("scroll", autoPlayVideoOnScroll);
window.addEventListener("load", autoPlayVideoOnScroll);

// LOGIN auth
function validateLoginForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        window.alert("Please enter both username and password.");
        return false;
    }

    return true;
}