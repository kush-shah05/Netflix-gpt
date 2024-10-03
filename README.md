
# Netflix GPT

## Overview

Netflix GPT is a web application that integrates OpenAI's GPT API with TMDB (The Movie Database) API to provide personalized movie recommendations. Users can log in, browse through movies, watch trailers, and get AI-powered movie suggestions via a GPT-powered search bar. The app also supports multi-language features.

## Features

- **Authentication**: Users can sign up, log in, and log out.
- **Browse Movies**: Browse through the latest movies with data fetched from TMDB's API.
- **Movie Trailers**: Watch movie trailers directly within the app.
- **Movie Suggestions**: Get personalized movie suggestions using OpenAI's GPT API.
- **Responsive Design**: The app is fully responsive and optimized for all device sizes.
- **Multi-Language Support**: Users can get movie suggestions in different languages.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Firebase**: For authentication and hosting.
- **Redux**: State management.
- **TMDB API**: To fetch movie data.
- **OpenAI GPT API**: For personalized movie suggestions.

## Project Structure

```
Netflix-gpt-main/
├── public/                 # Static assets
├── src/                    # Source files
│   ├── components/         # React components
│   ├── hooks/              # Custom hooks
│   ├── redux/              # Redux slices and store configuration
│   ├── App.js              # Main App component
│   └── index.js            # Entry point of the React app
├── .firebase/              # Firebase project configuration
├── .gitignore              # Files to ignore in git
├── .vscode/                # VSCode workspace settings
├── firebase.json           # Firebase hosting configuration
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── README.md               # Project documentation
└── .env                    # Environment variables (not included in version control)
```

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Firebase CLI](https://firebase.google.com/docs/cli)

## Environment Variables

You need to create a `.env` file in the root directory and add the following environment variables:

```
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_OPENAI_API_KEY=your_openai_api_key
```

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kush-shah05/netflix-gpt.git
   cd netflix-gpt
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Initialize Firebase and configure your Firebase project.
   - Ensure the `firebase.json` file is correctly configured for your Firebase project.

4. **Add Environment Variables**:
   Create a `.env` file in the root directory and add your TMDB and OpenAI API keys as shown above.

5. **Run the application**:
   ```bash
   npm start
   ```

   The app will be running on `http://localhost:3000`.

6. **Build and Deploy**:
   To build the app for production and deploy it on Firebase:
   ```bash
   npm run build
   firebase deploy
   ```

## Main Features Walkthrough

### Authentication
- Users can sign up and log in using Firebase Authentication.
- After logging in, users are redirected to the browse page.

### Browse Movies
- The main page displays a header, the featured movie, and movie lists fetched from TMDB's API.
- The featured movie trailer plays in the background with title and description overlays.

### Movie Suggestions (Netflix GPT)
- Use the GPT-powered search bar to receive personalized movie recommendations.
- The search results are fetched from TMDB based on GPT's suggestions.

### Profile Management
- Users can update their profiles and sign out.

## Future Enhancements

- Improve performance and caching using React Query or SWR.
- Add a recommendation system based on user history and preferences.
- Integrate more features such as user reviews, ratings, and watchlists.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
