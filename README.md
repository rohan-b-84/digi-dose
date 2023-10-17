# DIGI DOSE - Full Stack News App

## Overview

DIGI DOSE is a responsive full-stack news application that provides users with the latest information in categories such as India, Tech, and Sport. The app features a clean landing page, categorized news with pagination, detailed news pages with external source links, and a subscription option. The backend ensures data freshness by updating news databases every 15 minutes through cron jobs.

## Technologies Used

- **Frontend**:
  - Yarn, React, React Router DOM, Tabler React Icons, Axios, Moment.js, Tailwind CSS

- **Backend**:
  - Yarn, Express, Cors, Node-cron, Dotenv, Moment.js, RSS-parser, Unfluff, Uniqid

## Features

DIGI DOSE offers the following key features:

1. **Responsive Landing Page**: Featuring a hero image and a newsletter subscription section.
  
2. **Categorized News**: Users can choose from India, Tech, and Sport categories to access the latest news in a paginated manner.

3. **Detailed News Pages**: Clicking on a news card leads to a detailed news page with a "Read More" button, redirecting users to the official source in a new tab.

4. **Responsive Design**: The entire application is designed to be responsive using Tailwind CSS.

5. **Skeleton Loaders**: While data is being fetched, skeleton loaders ensure a seamless user experience.

6. **API Endpoints**:
   - `GET /news/:category`: Fetches news of the requested category in a sorted, paginated manner.
   - `GET /news/:category/:id`: Fetches news based on the given ID.
   - `POST /subscribe`: Adds the user's email to the subscription database.

## Database

The news and subscription data are stored in simple JSON files, providing a lightweight solution for this application.

   - News data: Stored in JSON files (`indianews.json`, `technews.json`, `sportnews.json`) and updated every 15 minutes via cron jobs.
   - Subscription data: User emails stored in `subscriptions.json` through the POST request.

## Containerization (Docker)

Both the frontend and backend are Dockerized. To run the application:

1. Ensure Docker and Docker Compose are installed.
2. Navigate to the root directory.
3. Run `docker-compose up`.

The frontend will be accessible at `http://localhost:5173`, and the backend at `http://localhost:5000`.

## Future Prospects

- **User Authentication**: Implement user accounts for a personalized experience.
- **Search Functionality**: Allow users to search for specific news topics.
- **Notifications**: Integrate push notifications for subscribed users.
- **User Preferences**: Enable users to customize their news feed based on preferences.
- **Analytics Integration**: Integrate analytics tools for insights into user behavior.
- **Social Media Integration**: Facilitate easy sharing of news articles on social media platforms.