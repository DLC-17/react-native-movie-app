React Native Full Stack App — Code-Along (2025)

Code-along project for “React Native Course for Beginners in 2025 | Build a Full Stack React Native App.”

This repository contains a React Native + Expo application featuring:

🔗 API integration

🧭 Navigation

🔐 Authentication

🎨 Modern UI practices

It’s designed as a hands-on introduction to full stack mobile development.

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
 ├── /src
 │    ├── /components      # Reusable UI components
 │    ├── /screens         # App screens (Home, Auth, Search, etc.)
 │    ├── /services        # API + Appwrite logic
 │    ├── /navigation      # Stack & Tab navigators
 │    └── App.tsx          # Entry point
 ├── app.json              # Expo config
 ├── package.json
 └── README.md

🔧 Installation & Setup
1. Clone the repo
git clone https://github.com/your-username/react-native-fullstack-2025.git
cd react-native-fullstack-2025

2. Install dependencies
npm install

3. Configure environment variables

Create a .env file in the project root:

EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id

4. Run the app
npx expo start


Scan the QR code in the Expo Go app (iOS/Android) or run in a simulator.

📖 Learning Goals

By the end of this project, you will:

Understand how to set up and structure a React Native + Expo project.

Learn to use Appwrite for backend services (auth, database).

Implement modern navigation patterns with React Navigation.

Handle API data fetching, display, and caching.

Apply best practices for UI, state management, and developer workflow.

🤝 Contributing

This project is primarily for educational purposes, but PRs for fixes or improvements are welcome.

📜 License

MIT License. Free to use and modify for learning or personal projects.
