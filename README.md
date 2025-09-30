React Native Full Stack App

This repository contains a React Native + Expo application allowing for mobile users to search movies via the TMDB API and display trending movies based on users search

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


Current Modifications include:
1. Updatated database logging to utilize movie.id rather than user search queries, for reliable logging for trending movies

Pending features:
1. User Login for saving search movies
2. Saved movies tab
