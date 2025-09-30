React Native Full Stack App

This repository contains a React Native + Expo application featuring:

🔗 API integration

🧭 Navigation

🔐 Authentication

🎨 Modern UI practices

🚀 Features

React Native + Expo — build once, run on iOS, Android, and web.

Appwrite backend — database, authentication, and API integration.

Navigation — clean stack & tab navigation patterns.

Authentication flow — sign up, log in, and manage sessions.

Dynamic data — real-time API data fetching & display.

Modern UI — styled with Tailwind-like utilities and responsive design practices.

🛠️ Tech Stack

Frontend: React Native (Expo)

Backend: Appwrite (Database + Auth)

Navigation: React Navigation

Styling: Tailwind CSS (NativeWind)

API: TMDB API (movies)

📂 Project Structure
/project-root
 ├── /app
 │    ├── /tabs         #Location of each individual mobile screen
 │    ├── /movies       #Displays details for individual movies
 │    ├── /layout.tsx
 ├── /components
 ├── package.json
 └── .env

🔧 Installation & Setup
1. Clone the repo
git clone https://github.com/DLC-17/react-native-movie-app.git
cd react-native-fullstack-2025

2. Install dependencies
npm install

3. Configure environment variables

Create a .env file in the project root:

EXPO_PUBLIC_MOVIE_TOKEN
EXPO_PUBLIC_APPWRITE_PROJECT_ID
EXPO_PUBLIC_APPWRITE_PROJECT_NAME
EXPO_PUBLIC_APPWRITE_ENDPOINT
EXPO_PUBLIC_APPWRITE_DATABASE_ID
EXPO_PUBLIC_APPWRITE_COLLECTION_ID

4. Run the app
npx expo start

Scan the QR code in the Expo Go app (iOS/Android) or run in a simulator.
