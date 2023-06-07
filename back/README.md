# Rick and Morty Characters API Wrapper

This project provides a Symfony based wrapper for interacting with the Rick and Morty API, specifically focusing on retrieving character information. The codebase emphasizes adherence to SOLID principles and incorporates the Repository design pattern for data access. 

## SOLID Principles

In the context of this project, SOLID principles are applied as follows:

- **Single Responsibility Principle (SRP)**: The `CharactersController` handles HTTP requests and delegates data access to the `CharactersRepository` service. This way, each class has a single reason to change. 

- **Open-Closed Principle (OCP)**: The code is written in such a way that adding more functionality (like adding new endpoints or changing the data source) can be done by adding new code, not modifying existing code.

- **Liskov Substitution Principle (LSP)**: This principle is not explicitly relevant in this specific project as there are no parent-child relationships between classes.

- **Interface Segregation Principle (ISP)**: Currently, we have a small, well-defined interface. If we add more functionality, we could break it down into smaller, more specific interfaces.

- **Dependency Inversion Principle (DIP)**: Our controller depends on abstractions (the `CharactersRepository` service), not on concretions. 

## Repository Design Pattern

We use the Repository pattern as an abstraction layer between the data access and the business logic of the application. In this case, the `CharactersRepository` handles all the interactions with the Rick and Morty API.

## Project Setup

1. Clone the repository: `git clone https://github.com/<username>/rick-and-morty-api-wrapper.git`
2. Navigate into the project directory: `cd rick-and-morty-api-wrapper`
3. Install dependencies: `composer install`
4. Set the `EXTERNAL_API_URL` environment variable in your `.env` file to point to the Rick and Morty API.
5. Run the Symfony server: `symfony server:start`

Now you can access the endpoints:

- `/rick-and-morty/characters` to get all characters
- `/rick-and-morty/characters/count` to get the total number of characters
- `/rick-and-morty/characters/{id}` to get a specific character by id
- `/rick-and-morty/characters/{ids}` to get a list of characters by ids

## Contributing

We welcome contributions to this project! Please feel free to open issues or pull requests.
