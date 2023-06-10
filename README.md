# Rick and Morty Challenge

This application serves as a demonstration of a React frontend and a Node.js backend combined to provide an engaging and responsive user experience. It utilizes the Rick and Morty API to display character information and provide filtering capabilities.

## Backend

The backend of this project is built with Symfony, and its primary function is to serve as a proxy to communicate with the Rick and Morty API. It retrieves the necessary data for character information and applies filtering based on the user input.

The server code is well-structured and modularized to ensure maintainability and scalability.

## Frontend

The frontend is built using React along with TypeScript for type safety. Tailwind CSS is used for styling and creating a responsive and visually appealing user interface. The UI includes a character display and a filter section where users can filter characters based on various parameters like name, species, type, gender, and status.

Key features of the frontend include:
1. State management using React hooks.
2. Responsive and intuitive user interface built with Tailwind CSS.
3. Form handling for character filters.
4. URL handling to persist filters between page refreshes.

## Getting Started

To run this project locally, you need to have Composer and npm installed. 

Clone this repository:

\`\`\`
git clone https://github.com/your-repo/rick-and-morty-challenge.git
\`\`\`

Please navigate to both the back and front directories, and follow the respective setup instructions, REAMDE.md, for each environment. Both environments must be running concurrently to execute the application successfully.