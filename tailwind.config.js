/** @type {import('tailwindcss').Config} */
module.exports = {
  // ✅ Tell Tailwind where to scan for class names
  content: [
    "./App.{js,jsx,ts,tsx}",        // root App entry
    "./app/**/*.{js,jsx,ts,tsx}",   // app/ directory (Expo Router or similar)
    "./components/**/*.{js,jsx,ts,tsx}", // shared components
    "./screens/**/*.{js,jsx,ts,tsx}",    // screens if you keep them separate
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary:"#030014",
        // You can extend with secondary, accent, etc. later
        secondary: '#151312',
        light: {
          100: '#d6c6ff',
          200: '#a8b5db',
          300: '#9CA4AB'
        },
        dark: {
          100: '#221f3d',
          200: '#0f0d23'

        }
      },
    },
  },
  plugins: [
    // Example: enable Tailwind Forms (works with NativeWind v4)
    // require('@tailwindcss/forms'),
  ],
};
