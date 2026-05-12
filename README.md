# MoodFlix

MoodFlix is a full-stack web project for movie and TV series recommendations.  
The system helps users discover content based on mood, genre, type, rating, duration, and personal preferences.

The project was developed as part of a college software engineering course.

## Project Overview

MoodFlix includes a responsive website with several interactive pages:

- Home page with quick recommendation options
- Recommendations page with categorized movie and series suggestions
- Search page with filtering options
- Reviews page with ratings, highlighting tools, and user review submission
- Contact page with feedback and issue report form
- Team and personal information pages
- Login and registration system
- Personal watchlist system using PHP and MySQL

## Main Features

### Recommendations

Users can browse movies and series by category, including:

- Comedy
- Drama
- Action
- Science Fiction
- Romance

Each recommendation includes a poster, genre tag, content type, short description, and a "More Info" interaction.

### Search and Filter

The search page allows users to filter content by:

- Category
- Movie or series
- Duration
- Language
- Rating range

Users can also submit a request for a movie or series that is not currently listed.

### Reviews

The reviews page includes:

- Review cards
- Total review counter
- Average rating calculation
- Add review form
- Rating slider
- Date and time input
- Review highlighting by rating range
- Review guidelines opened with JavaScript

### Contact Page

The contact page includes a detailed form with:

- User contact information
- Preferred contact method
- Preferred contact window
- Feedback topic
- Related page URL
- Urgency level
- Issue date and time
- Screenshot upload field
- Suggested design color
- Website satisfaction range
- Verification code check

### User Authentication

The system includes:

- User registration
- Login page
- Logout option
- Session-based access to the watchlist
- Optional profile image upload

### Watchlist

Logged-in users can manage a personal watchlist.

The watchlist allows users to:

- Add movies or series
- Choose type, genre, status, date, and episode number
- View saved items in a table
- Change watching status
- Remove items from the list

The watchlist data is stored in a MySQL database.

## Technologies Used

- HTML
- CSS
- JavaScript
- PHP
- MySQL

## JavaScript Usage

JavaScript is used across the website for interactive behavior, including:

- Mobile navigation menu
- Greeting message on the home page
- Quick recommendation result
- Movie information display
- Search and filtering logic
- Contact form verification
- Satisfaction slider update
- Review creation and highlighting
- Login form validation
- Video autoplay on scroll

## PHP and Database Usage

PHP is used for server-side functionality, including:

- Login
- Registration
- Session management
- Watchlist operations
- Mood quiz result generation
- Database connection through `db.php`

MySQL is used to store user accounts and personal watchlist items.

## Project Structure

```text
MoodFlix/
│
├── index.html
├── recommendations.html
├── search.html
├── reviews.html
├── contact.html
├── team.html
├── PersonalInfo.html
│
├── login.php
├── register.php
├── logout.php
├── watchlist.php
├── moodResult.php
├── db.php
│
├── MoodFlixCSS.css
├── MoodFlixJS.js
│
├── images/
├── media/
└── uploads/
