# YCardsMarket

Experienced in managing and trading card collections. Skilled in organizing personal collections, building strategic decks, and facilitating card trades via live chat to coordinate shipping details. Adept at maintaining wish lists to target card acquisitions effectively.

## Features

- **Wish List**: A list of cards the user hopes to acquire.
- **Personal Collection**: The user can manage their collection, specifying the number and types of cards they possess.
- **Deck Building**: The user can construct decks using cards from their personal collection. If a user attempts to add a card they do not own, the system will indicate that the card is missing.
- **Trading System**: Users have the ability to exchange cards and can use a live chat feature to discuss the details of shipping the cards.

## Project Structure

The repository is organized into four main folders:

- **`/front`**: Contains the Vuejs frontend application, offering a responsive and intuitive user interface.
- **`/back`**: Houses the Django backend application, responsible for secure data handling and business logic.
- **`/deploy`**: Includes scripts, Docker-compose files, and other necessary tools for deploying the application.
- **`/docs`**: Contains global documentation of the project, including setup guides, usage instructions, and development practices.

## Getting Started

### Prerequisites

- Docker and Docker-compose
- Node.js 20.12.3 and npm (for frontend development)
- Python 3 (for backend development)

### Setup and Installation

1. Clone the repository:

```bash
git clone git@github.com:strackzdev/ycardsmarket.git
```

2. Run the docker compose application (Extra documentation under development):

```bash
npm run compose:dev
```

If you're planning to run this project in a production environment, I can't stress enough how **important it is to change the default passwords** we've set up for development or testing. Don't worry, though – we'll have a guide for setting up everything for production ready pretty soon to help you out.


