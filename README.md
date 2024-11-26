# TodoApp Multi-User

**TodoApp Multi-User** is a multi-user task management application built with a modern stack and following a layered architecture. This app allows multiple users to create, manage, and organize their tasks seamlessly.

## Tech Stack

- **Backend**: Express.js with TypeORM and PostgreSQL
- **Frontend**: React.js
- **Database**: PostgreSQL
- **Architecture**: Layered folder structure

---

## Features

- **Multi-user Support**: Allows multiple users to register and manage their tasks.
- **RESTful APIs**: Clean and scalable API design using Express.js.
- **Database Integration**: PostgreSQL with TypeORM for easy database handling and migrations.
- **Layered Architecture**: Follows a layered structure to enhance code readability, maintainability, and scalability.

---

## Folder Structure

Below is the folder structure for the project:

```
src
  ├── configuration    # Handles app configuration and environment variables
  ├── controllers      # Contains API controllers
  ├── dto              # Defines Data Transfer Objects
  ├── entities         # Database entities for TypeORM
  ├── enums            # Enumerators for constant values
  ├── infra
  │     └── database   # Database configurations and migrations
  ├── mappers          # Logic to map data between layers
  ├── middleware       # Middleware for request validation and other processes
  ├── routes           # Defines application routes
  ├── services         # Business logic and application services
  ├── tests            # Test cases for the application
  ├── utils            # Utility functions
  ├── validators       # Validation logic for request data
index.js               # Entry point of the application
package.json           # Project dependencies and scripts
package-lock.json      # Lock file for dependency versions
.env                   # Environment configuration (development)
.env.sample            # Template for environment variables
```

---

## Getting Started

### Prerequisites

- **Node.js**: v16 or later
- **PostgreSQL**: v13 or later
- **npm**: v8 or later

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/eranees/todo-express-react-js.git
   cd todo-express-react-js
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup environment variables**

   - Copy `.env.sample` to `.env`
     ```bash
     cp .env.sample .env
     ```
   - Fill in the required environment variables (database connection details, etc.).

4. **Run database migrations**

   ```bash
   npm run typeorm migration:run
   ```

5. **Start the application**
   ```bash
   npm start
   ```

---

## Available Scripts

- `npm start`: Starts the application.
- `npm run dev`: Starts the application in development mode (with hot reloading).
- `npm run test`: Runs the test suite.
- `npm run lint`: Lints the codebase.
- `npm run typeorm migration:run`: Runs database migrations.

---

## Contributing

Feel free to open issues or submit pull requests if you'd like to contribute to this project. Make sure to follow the coding conventions and include tests for any new functionality.

---

## License

This project is licensed under the [MIT License](LICENSE).

Happy coding! 🚀