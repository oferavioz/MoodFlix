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
        greeting.innerText = "Welcome to MoodFlix, " + visitorName.charAt(0).toUpperCase() + visitorName.slice(1) + "!";
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
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollToCategory(categoryId) {
    let category = document.getElementById(categoryId);

    if (!category) {
        return;
    }

    category.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Search
let moodflixContent = [
    // Comedy movies
    {
        title: "You Don't Mess with the Zohan",
        genre: "comedy",
        type: "movie",
        language: "english",
        duration: "medium",
        displayDuration: "113 minutes",
        rating: 5.6,
        image: "images/zohan.jpg",
        about: "A funny comedy movie about a former agent who starts a new life as a hairstylist.",
        description: "An Israeli special forces soldier fakes his own death and moves to New York City to follow his dream of becoming a hairstylist. The movie mixes action parody, exaggerated comedy, identity change, romance, and absurd situations around his new life."
    },
    {
        title: "Annie",
        genre: "comedy",
        type: "movie",
        language: "english",
        duration: "medium",
        displayDuration: "118 minutes",
        rating: 4.7,
        image: "images/annie.jpg",
        about: "A cheerful musical comedy about hope, family, and a young girl with big dreams.",
        description: "A modern musical comedy-drama about Annie, a young foster child whose life changes after she meets a wealthy businessman. The story focuses on hope, optimism, belonging, family, and believing that life can still surprise you."
    },
    {
        title: "The Proposal",
        genre: "comedy",
        type: "movie",
        language: "english",
        duration: "medium",
        displayDuration: "108 minutes",
        rating: 6.7,
        image: "images/theProposal.jpg",
        about: "A romantic comedy about an unexpected engagement, work, and surprising feelings.",
        description: "A romantic comedy about a demanding editor who convinces her assistant to pretend they are engaged in order to avoid deportation. Their fake relationship slowly reveals real emotions, family tension, and unexpected personal growth."
    },
    {
        title: "White Chicks",
        genre: "comedy",
        type: "movie",
        language: "english",
        duration: "medium",
        displayDuration: "109 minutes",
        rating: 5.8,
        image: "images/whiteChicks.jpg",
        about: "A silly and energetic comedy full of disguises, chaos, and funny moments.",
        description: "Two FBI agents go undercover in an extreme disguise operation after a case goes wrong. The movie is built around mistaken identity, social satire, exaggerated comedy, and chaotic situations."
    },

    // Comedy series
    {
        title: "Friends",
        genre: "comedy",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "20-22 minutes per episode",
        rating: 9.6,
        image: "images/Friends.jpg",
        about: "A classic comedy series about friendship, love, and everyday life in New York.",
        description: "A sitcom about six close friends living in Manhattan as they deal with relationships, work, family, and adulthood. The series is known for warm humor, memorable characters, everyday situations, and the importance of friendship."
    },
    {
        title: "How I Met Your Mother",
        genre: "comedy",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "22 minutes per episode",
        rating: 8.4,
        image: "images/HowIMetYourMother.jpg",
        about: "A funny sitcom about friends, relationships, and unforgettable life stories.",
        description: "A sitcom told through flashbacks, where Ted Mosby tells his children the long story of how he met their mother. The show follows friendship, dating, careers, heartbreaks, inside jokes, and life in New York."
    },
    {
        title: "Shameless",
        genre: "comedy",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "44-60 minutes per episode",
        rating: 8.5,
        image: "images/shameless.jpg",
        about: "A dark comedy-drama about a chaotic family and their daily struggles.",
        description: "A dark comedy-drama about the Gallagher family, who try to survive poverty, addiction, responsibility, family pressure, and personal chaos. The series combines wild humor with serious emotional and social situations."
    },
    {
        title: "The Big Bang Theory",
        genre: "comedy",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "18-22 minutes per episode",
        rating: 8.1,
        image: "images/theBigBangTheory.jpg",
        about: "A comedy series about scientists, friendship, awkward moments, and everyday life.",
        description: "A sitcom about socially awkward scientists and their friends as they deal with work, relationships, hobbies, and personal growth. The humor often comes from science culture, friendship, and everyday misunderstandings."
    },
    {
        title: "Brooklyn Nine-Nine",
        genre: "comedy",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "21-23 minutes per episode",
        rating: 8.4,
        image: "images/brooklynNineNine.jpg",
        about: "A workplace comedy about detectives, friendship, and funny police cases.",
        description: "A workplace comedy following detectives in the fictional 99th precinct of the NYPD. The series combines police cases, team friendships, absurd humor, character-based comedy, and warm group dynamics."
    },

    // Drama movies
    {
        title: "The Notebook",
        genre: "drama",
        type: "movie",
        language: "english",
        duration: "medium",
        displayDuration: "123 minutes",
        rating: 7.8,
        image: "images/TheNoteBook.jpg",
        about: "A romantic drama about love, memory, and a relationship that lasts through time.",
        description: "A romantic drama about a young couple from different social backgrounds whose relationship is tested by time, family expectations, separation, and memory. The story focuses on lasting love, emotional commitment, and the power of remembering."
    },
    {
        title: "La La Land",
        genre: "drama",
        type: "movie",
        language: "english",
        duration: "medium",
        displayDuration: "128 minutes",
        rating: 4.2,
        image: "images/lalaland.jpg",
        about: "A musical drama about dreams, love, ambition, and difficult choices.",
        description: "A musical romantic drama about an aspiring actress and a jazz musician who fall in love while chasing their dreams in Los Angeles. The film explores ambition, sacrifice, success, love, and the emotional cost of personal dreams."
    },
    {
        title: "Forrest Gump",
        genre: "drama",
        type: "movie",
        language: "english",
        duration: "long",
        displayDuration: "142 minutes",
        rating: 8.8,
        image: "images/forrestGump.jpg",
        about: "A touching drama about life, love, history, and seeing the world differently.",
        description: "A life story following Forrest Gump, a kind-hearted man who unexpectedly becomes part of major American events. The movie explores love, friendship, destiny, innocence, loss, perseverance, and the unpredictable journey of life."
    },

    // Drama series
    {
        title: "The Crown",
        genre: "drama",
        type: "series",
        language: "english",
        duration: "long",
        displayDuration: "47-61 minutes per episode",
        rating: 8.6,
        image: "images/TheCrown.jpg",
        about: "A dramatic series about royal life, power, responsibility, and personal struggles.",
        description: "A historical drama about the reign of Queen Elizabeth II and the personal, political, and family pressures surrounding the British royal family. The series combines public history with private emotional conflict."
    },
    {
        title: "Grey's Anatomy",
        genre: "drama",
        type: "series",
        language: "english",
        duration: "long",
        displayDuration: "43 minutes per episode",
        rating: 7.6,
        image: "images/greysAnatomy.jpg",
        about: "A medical drama about doctors, relationships, and life-changing decisions.",
        description: "A long-running medical drama centered on surgeons and hospital staff as they face complex medical cases, personal relationships, professional pressure, and emotional life-changing events."
    },
    {
        title: "Sullivan's Crossing",
        genre: "drama",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "42-44 minutes per episode",
        rating: 6.9,
        image: "images/sullivansCrossing.jpg",
        about: "A drama series about returning home, healing, and finding new meaning.",
        description: "A drama about a neurosurgeon who returns to her hometown after personal and professional difficulties. The series focuses on family, healing, unresolved relationships, emotional recovery, and starting over."
    },
    {
        title: "Suits",
        genre: "drama",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "42 minutes per episode",
        rating: 8.4,
        image: "images/suits.jpg",
        about: "A legal drama about ambition, secrets, and life inside a powerful law firm.",
        description: "A legal drama about a brilliant college dropout who starts working at a prestigious law firm despite not having a law degree. The series focuses on ambition, loyalty, secrets, legal battles, and power dynamics."
    },
    {
        title: "Breaking Bad",
        genre: "drama",
        type: "series",
        language: "english",
        duration: "long",
        displayDuration: "43-58 minutes per episode",
        rating: 9.5,
        image: "images/breakingBad.jpg",
        about: "A powerful drama about choices, consequences, and a life that slowly changes direction.",
        description: "A crime drama about a chemistry teacher who turns to producing illegal drugs after a cancer diagnosis. The series follows his transformation, moral decline, family conflict, ambition, danger, and the consequences of dangerous choices."
    },

    // Action movies
    {
        title: "The Dark Knight",
        genre: "action",
        type: "movie",
        language: "english",
        duration: "long",
        displayDuration: "152 minutes",
        rating: 9.0,
        image: "images/TheDarkKnight.jpg",
        about: "An intense action movie about justice, chaos, and the fight against crime.",
        description: "A superhero crime thriller in which Batman faces the Joker, a criminal mastermind who spreads chaos through Gotham City. The film explores justice, morality, sacrifice, fear, responsibility, and the limits of heroism."
    },
    {
        title: "Mad Max: Fury Road",
        genre: "action",
        type: "movie",
        language: "english",
        duration: "medium",
        displayDuration: "120 minutes",
        rating: 8.1,
        image: "images/madMax.jpg",
        about: "A fast and visually powerful action movie set in a dangerous desert world.",
        description: "A post-apocalyptic action film about survival, rebellion, and escape across a brutal desert wasteland. The story follows Max and Furiosa as they challenge a violent ruler and fight for freedom."
    },
    {
        title: "Spider-Man",
        genre: "action",
        type: "movie",
        language: "english",
        duration: "medium",
        displayDuration: "121 minutes",
        rating: 7.4,
        image: "images/spiderman.jpg",
        about: "An action superhero movie about courage, responsibility, and saving the city.",
        description: "A superhero origin story about Peter Parker, a teenager who gains spider-like powers and must learn what responsibility means. The film combines action, personal loss, identity, romance, and heroism."
    },
    {
        title: "Mission Impossible",
        genre: "action",
        type: "movie",
        language: "english",
        duration: "medium",
        displayDuration: "110 minutes",
        rating: 7.1,
        image: "images/missionImpossible.jpg",
        about: "A high-energy action movie full of dangerous missions, secrets, and suspense.",
        description: "A spy action thriller about Ethan Hunt, an agent framed for a failed mission who must uncover the real traitor. The movie includes espionage, deception, high-risk operations, suspense, and dangerous missions."
    },
    {
        title: "Gladiator",
        genre: "action",
        type: "movie",
        language: "english",
        duration: "long",
        displayDuration: "155 minutes",
        rating: 8.5,
        image: "images/gladiator.jpg",
        about: "An epic action movie about revenge, honor, and survival in ancient Rome.",
        description: "An epic historical action drama about a betrayed Roman general who becomes a gladiator and seeks justice. The film focuses on revenge, honor, power, loyalty, survival, and the struggle against corruption."
    },

    // Action series
    {
        title: "Prison Break",
        genre: "action",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "42-44 minutes per episode",
        rating: 8.3,
        image: "images/prisonBreak.jpg",
        about: "An action-packed series about escape plans, danger, and loyalty.",
        description: "An action thriller series about a man who deliberately enters prison to help his brother escape death row. The story focuses on strategy, loyalty, conspiracy, danger, survival, and carefully planned escapes."
    },
    {
        title: "Fauda",
        genre: "action",
        type: "series",
        language: "hebrew",
        duration: "medium",
        displayDuration: "30-50 minutes per episode",
        rating: 9.2,
        image: "images/fauda.jpg",
        about: "An intense action series about undercover missions and conflict.",
        description: "An Israeli action thriller about an undercover unit operating in dangerous and politically tense situations. The series follows personal conflict, intelligence operations, loyalty, moral pressure, and the cost of violence."
    },
    {
        title: "Vikings",
        genre: "action",
        type: "series",
        language: "english",
        duration: "long",
        displayDuration: "44-50 minutes per episode",
        rating: 8.5,
        image: "images/vikings.jpg",
        about: "A historical action series about warriors, battles, and leadership.",
        description: "A historical action drama inspired by Norse legends and Viking expansion. The series follows warriors, family rivalries, leadership struggles, exploration, faith, ambition, and battles for power."
    },
    {
        title: "The Last Kingdom",
        genre: "action",
        type: "series",
        language: "english",
        duration: "long",
        displayDuration: "50-59 minutes per episode",
        rating: 8.5,
        image: "images/theLastKingdom.jpg",
        about: "A historical action series about battles, loyalty, and the fight for power.",
        description: "A historical drama following Uhtred, a warrior raised by Danes but born Saxon. The series explores identity, loyalty, war, destiny, leadership, revenge, and the formation of England."
    },
    {
        title: "The Night Agent",
        genre: "action",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "45-56 minutes per episode",
        rating: 6.7,
        image: "images/theNightAgent.jpg",
        about: "An action thriller series about danger, secrets, and a fast-moving investigation.",
        description: "A political action thriller about an FBI agent who becomes involved in a dangerous conspiracy after answering an emergency call. The series focuses on secrets, betrayal, national security, and survival."
    },
    {
        title: "Jack Ryan",
        genre: "action",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "40-64 minutes per episode",
        rating: 8.0,
        image: "images/jackRyan.jpg",
        about: "An action series about intelligence work, international threats, and risky missions.",
        description: "An action thriller following CIA analyst Jack Ryan as he is pulled from desk work into dangerous field missions. The series combines intelligence work, terrorism threats, global politics, moral choices, and personal risk."
    },

    // Science fiction movies
    {
        title: "Inception",
        genre: "science fiction",
        type: "movie",
        language: "english",
        duration: "long",
        displayDuration: "148 minutes",
        rating: 9.5,
        image: "images/inception.jpg",
        about: "A mind-bending science fiction thriller about dreams, memory, and reality.",
        description: "A science fiction thriller about a skilled thief who enters people's dreams to steal information. The story explores dream layers, memory, grief, reality, guilt, and the possibility of planting an idea inside the mind."
    },
    {
        title: "Interstellar",
        genre: "science fiction",
        type: "movie",
        language: "english",
        duration: "long",
        displayDuration: "169 minutes",
        rating: 6.7,
        image: "images/interstellar.jpg",
        about: "A science fiction movie about space travel, time, family, and survival.",
        description: "A science fiction epic about astronauts searching for a new home for humanity as Earth becomes increasingly uninhabitable. The film explores time, gravity, love, sacrifice, survival, and the future of mankind."
    },
    {
        title: "The Matrix",
        genre: "science fiction",
        type: "movie",
        language: "english",
        duration: "medium",
        displayDuration: "136 minutes",
        rating: 8.7,
        image: "images/theMatrix.jpg",
        about: "A science fiction action movie about reality, control, and discovering the truth.",
        description: "A science fiction action film about a hacker who discovers that reality is a simulated world controlled by machines. The movie explores freedom, identity, control, technology, truth, and awakening."
    },
    {
        title: "Avatar",
        genre: "science fiction",
        type: "movie",
        language: "english",
        duration: "long",
        displayDuration: "162 minutes",
        rating: 7.9,
        image: "images/avatar.jpg",
        about: "A visual science fiction adventure about a distant world and a new civilization.",
        description: "A science fiction adventure set on Pandora, where a former Marine becomes involved with the native Na'vi people through an avatar body. The film explores nature, colonization, identity, conflict, and connection."
    },

    // Science fiction series
    {
        title: "Lucifer",
        genre: "science fiction",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "42-62 minutes per episode",
        rating: 8.1,
        image: "images/lucifer.jpg",
        about: "A fantasy crime series about identity, choices, and supernatural events.",
        description: "A fantasy crime drama about Lucifer Morningstar, who leaves Hell and starts a new life in Los Angeles. The series combines crime investigations, supernatural mythology, identity, morality, and relationships."
    },
    {
        title: "Wednesday",
        genre: "science fiction",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "46-57 minutes per episode",
        rating: 8.1,
        image: "images/wednesday.jpg",
        about: "A dark fantasy mystery series with unusual characters and secrets.",
        description: "A dark fantasy mystery series following Wednesday Addams at Nevermore Academy as she investigates murders and supernatural secrets. The show mixes mystery, gothic humor, family history, unusual friendships, and personal discovery."
    },
    {
        title: "Black Mirror",
        genre: "science fiction",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "41-89 minutes per episode",
        rating: 8.7,
        image: "images/blackMirror.jpg",
        about: "A science fiction anthology series about technology, society, and dark possibilities.",
        description: "A science fiction anthology series where each episode tells a separate story about technology, media, society, and human behavior. The series often explores disturbing or ironic consequences of modern innovation."
    },
    {
        title: "Stranger Things",
        genre: "science fiction",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "42-150 minutes per episode",
        rating: 8.7,
        image: "images/strangerThings.jpg",
        about: "A science fiction mystery series about friendship, secrets, and strange events.",
        description: "A science fiction horror series about children in a small town who uncover government experiments, supernatural forces, and an alternate dimension. The story focuses on friendship, fear, mystery, family, and growing up."
    },

    // Romance movies
    {
        title: "The Notebook",
        genre: "romance",
        type: "movie",
        language: "english",
        duration: "medium",
        displayDuration: "123 minutes",
        rating: 7.8,
        image: "images/TheNoteBook.jpg",
        about: "A romantic story about love, memory, and a relationship that lasts through time.",
        description: "A romantic drama about a young couple from different social backgrounds whose relationship is tested by time, family expectations, separation, and memory. The story focuses on lasting love, emotional commitment, and the power of remembering."
    },
    {
        title: "Letters to Juliet",
        genre: "romance",
        type: "movie",
        language: "english",
        duration: "medium",
        displayDuration: "105 minutes",
        rating: 4.5,
        image: "images/lettersForJuliet.jpeg",
        about: "A romantic movie about old letters, lost love, and a journey through Italy.",
        description: "A romantic drama about a young woman who finds an old unanswered love letter in Verona and helps its writer search for a lost love. The movie explores second chances, travel, romance, emotional discovery, and the courage to follow love."
    },
    {
        title: "Made of Honor",
        genre: "romance",
        type: "movie",
        language: "english",
        duration: "medium",
        displayDuration: "101 minutes",
        rating: 5.8,
        image: "images/madeOfHonor.jpg",
        about: "A romantic comedy about friendship, timing, and realizing true feelings.",
        description: "A romantic comedy about a man who realizes he is in love with his best friend only after she becomes engaged to someone else. The story focuses on friendship, jealousy, timing, emotional honesty, and taking a chance before it is too late."
    },
    {
        title: "Me Before You",
        genre: "romance",
        type: "movie",
        language: "english",
        duration: "medium",
        displayDuration: "110 minutes",
        rating: 9.3,
        image: "images/meBeforeYou.jpg",
        about: "A romantic drama about love, personal choices, and changing someone’s life.",
        description: "A romantic drama about a young woman who becomes a caregiver for a wealthy man left paralyzed after an accident. Their relationship changes both of their lives and raises questions about love, independence, happiness, and choice."
    },

    // Romance series
    {
        title: "Gossip Girl",
        genre: "romance",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "39-44 minutes per episode",
        rating: 7.5,
        image: "images/gossipGirl.jpg",
        about: "A teen drama series about romance, secrets, and life in New York society.",
        description: "A teen drama about wealthy students in Manhattan whose relationships, secrets, scandals, and rivalries are exposed by an anonymous online figure. The series focuses on romance, status, betrayal, friendship, and reputation."
    },
    {
        title: "Gilmore Girls",
        genre: "romance",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "39-45 minutes per episode",
        rating: 8.2,
        image: "images/gilmoreGirls.jpg",
        about: "A warm series about family, friendships, love, and small-town life.",
        description: "A comedy-drama about a close mother-daughter relationship in the small town of Stars Hollow. The series follows family, friendship, education, romance, community life, fast conversations, and everyday emotional moments."
    },
    {
        title: "Bridgerton",
        genre: "romance",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "57-72 minutes per episode",
        rating: 7.4,
        image: "images/bridgerton.jpg",
        about: "A romantic period drama about society, family, and complicated love stories.",
        description: "A period romance drama about the Bridgerton family and London high society. The series focuses on love, reputation, family expectations, secrets, social pressure, dramatic relationships, and personal choice."
    },
    {
        title: "The Vampire Diaries",
        genre: "romance",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "41-49 minutes per episode",
        rating: 7.7,
        image: "images/vampireDiaries.jpg",
        about: "A supernatural romance series about love, danger, and secrets.",
        description: "A supernatural romance drama about a teenage girl whose life becomes connected to vampire brothers and the dark secrets of her town. The series includes love triangles, supernatural threats, family history, danger, and sacrifice."
    },
    {
        title: "Emily in Paris",
        genre: "romance",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "24-38 minutes per episode",
        rating: 6.9,
        image: "images/emilyInParis.jpg",
        about: "A light romance series about work, fashion, friendship, and love in Paris.",
        description: "A romantic comedy-drama about an American marketing executive who moves to Paris for work. The series follows culture shock, career challenges, friendships, fashion, romance, social media, and personal growth."
    },
    {
        title: "Virgin River",
        genre: "romance",
        type: "series",
        language: "english",
        duration: "medium",
        displayDuration: "40-49 minutes per episode",
        rating: 7.4,
        image: "images/virginRiver.jpg",
        about: "A romantic drama series about healing, new beginnings, and small-town life.",
        description: "A romantic drama about a nurse practitioner who moves to a small town looking for a fresh start. The series focuses on healing, love, grief, community, family, secrets, and second chances."
    }
];

function searchContent() {
    let genre = document.getElementById("searchGenre").value;
    let title = document.getElementById("searchTitle").value.toLowerCase();
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

        if ((title === "" || item.title.toLowerCase().includes(title)) &&
            (genre === "" || item.genre === genre) &&
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
        let originalIndex = moodflixContent.indexOf(results[i]);

        output += "<div class='search-result-card'>";
        output += "<div class='search-result-layout'>";

        output += "<img src='" + results[i].image + "' alt='Movie poster' class='search-result-image'>";

        output += "<div class='search-result-info'>";
        output += "<h3>" + results[i].title + "</h3>";
        output += "<p><strong>Category:</strong> " + results[i].genre + "</p>";
        output += "<p><strong>Type:</strong> " + results[i].type + "</p>";
        output += "<p><strong>Duration:</strong> " + results[i].displayDuration + "</p>";
        output += "<p><strong>Language:</strong> " + results[i].language + "</p>";
        output += "<p><strong>Rating:</strong> ⭐ " + results[i].rating + "</p>";
        output += "<button type='button' class='details-button' onclick='openDetailsPageByIndex(" + originalIndex + ")'>More Info</button>";
        output += "</div>";

        output += "</div>";
        output += "</div>";
    }

    resultsBox.innerHTML = output;
}

function openDetailsPageByIndex(index) {
    window.location.href = "details.html?index=" + index;
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

// Contact
function showContactMessage() {
    let status = document.getElementById("contactStatus");
    let codeInput = document.getElementById("contactPassword");

    if (codeInput && codeInput.value !== "MoodFlix2026") {
        if (status) {
            status.innerText = "Please enter the correct verification code before sending.";
        }
        return false;
    }

    if (status) {
        status.innerText = "Your email application will open so you can send the message.";
    }

    return true;
}

function updateContactSatisfaction() {
    let satisfaction = document.getElementById("contactSatisfaction");
    let valueText = document.getElementById("contactSatisfactionValue");

    if (satisfaction && valueText) {
        valueText.innerText = satisfaction.value;
    }
}

function checkVerificationCode() {
    let code = document.getElementById("contactPassword").value;
    let status = document.getElementById("contactStatus");

    if (code === "MoodFlix2026") {
        status.innerText = "Verification code is correct. You can send your message.";
    } else {
        status.innerText = "Incorrect verification code. Please enter MoodFlix2026.";
    }
}

// Watchlist
function confirmDeleteItem() {
    return window.confirm("Are you sure you want to remove this item from your watchlist?");
}

// Reviews
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

// Register
function checkPasswordStrength() {
    let password = document.getElementById("password").value;
    let message = document.getElementById("passwordStrengthMessage");
    if (!message) {
        return;
    }
    if (password.length === 0) {
        message.innerText = "";
    } else if (password.length < 6) {
        message.innerText = "Weak password";
        message.style.color = "lightcoral";
    } else if (password.length < 10) {
        message.innerText = "Medium password";
        message.style.color = "gold";
    } else {
        message.innerText = "Strong password";
        message.style.color = "lightgreen";
    }
}

function showSelectedImageMessage() {
    let imageInput = document.getElementById("profile_image");
    let message = document.getElementById("profileImageMessage");
    if (!imageInput || !message) {
        return;
    }
    if (imageInput.files.length > 0) {
        message.innerText = "Profile image selected.";
        message.style.color = "lightgreen";

    } else {
        message.innerText = "";
    }
}

// MoodResult
function toggleMoodExplanation() {
    let box = document.getElementById("moodExplanationBox");
    let button = document.querySelector(".mood-explanation-button");

    if (!box || !button) {
        return;
    }

    box.classList.toggle("hidden-box");

    if (box.classList.contains("hidden-box")) {
        button.innerText = "Show Explanation";
    } else {
        button.innerText = "Hide Explanation";
    }
}

// Details page
function showDetailsPage() {
    let params = new URLSearchParams(window.location.search);
    let index = params.get("index");
    let container = document.getElementById("detailsContainer");

    if (!container) {
        return;
    }

    let selectedItem = null;

    if (index !== null && moodflixContent[index]) {
        selectedItem = moodflixContent[index];
    }

    if (selectedItem === null) {
        container.innerHTML = "<h2>Title not found</h2><p>We could not find details for this movie or series.</p>";
        return;
    }

    container.innerHTML =
        "<div class='details-layout'>" +
        "<img src='" + selectedItem.image + "' alt='Movie poster' class='details-image'>" +

        "<div class='details-info' id='detailsInfoBox'>" +
        "<h2>" + selectedItem.title + "</h2>" +
        "<p><strong>Category:</strong> " + selectedItem.genre + "</p>" +
        "<p><strong>Type:</strong> " + selectedItem.type + "</p>" +
        "<p><strong>Duration:</strong> " + selectedItem.displayDuration + "</p>" +
        "<p><strong>Language:</strong> " + selectedItem.language + "</p>" +
        "<p><strong>Rating:</strong> ⭐ " + selectedItem.rating + "</p>" +
        "<p><strong>About:</strong> " + (selectedItem.about || "More information will be added soon.") + "</p>" +
        "<p><strong>Description:</strong> " + (selectedItem.description || "More information will be added soon.") + "</p>" +
        "</div>" +
        "</div>";

    let detailsInfoBox = document.getElementById("detailsInfoBox");

    let trailerButton = document.createElement("a");
    trailerButton.innerText = "Watch Trailer";
    trailerButton.className = "trailer-button";
    trailerButton.target = "_blank";
    trailerButton.href = "https://www.youtube.com/results?search_query=" + encodeURIComponent(selectedItem.title + " official trailer");

    let backButton = document.createElement("a");
    backButton.innerText = "Back to Search";
    backButton.className = "details-back-button";
    backButton.href = "search.html";

    detailsInfoBox.appendChild(trailerButton);
    detailsInfoBox.appendChild(backButton);
}

window.addEventListener("load", showDetailsPage);