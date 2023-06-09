# React Rick and Morty API Challenge

This project is a frontend development challenge using React, TypeScript, Axios, and Tailwind CSS. It connects to the Rick and Morty API backend and displays a list of characters.

## Features

- Retrieves data from the backend Rick and Morty API using Axios.
- Implements the Repository pattern to handle API requests and data retrieval.
- Uses React components to render character cards with their image, name, and details.
- Applies responsive design with Tailwind CSS to adapt to different screen sizes.
- Implements filtering functionality to enhance the user experience.
- Utilizes modern frontend practices such as component-based architecture, state management with React hooks, and reusable UI components.

## Installation

1. Clone the repository.
2. Navigate to the project directory: `cd front/rickandmorty`
3. Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your browser and visit `http://localhost:3000` to see the application.
3. Explore the list of characters and interact with the pagination and filtering features.

## Repository Pattern

The Repository pattern is utilized in this project to separate the concerns of data retrieval and API interaction from the React components. The `CharactersRepository` class encapsulates the logic for making API requests and returning the desired data. This approach enhances code modularity, reusability, and testability.