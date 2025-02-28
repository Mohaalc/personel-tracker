# Personal Tracker Backend API

## Overview

This project is a backend API for a personal tracker application, built using Node.js, Express.js, and MongoDB. It implements key concepts like authentication, authorization, CRUD operations, and follows the MVC architecture.

## Features

- User authentication using JWT
- Role-based authorization
- CRUD operations for users, incomes, and expenses
- Secure password hashing with bcrypt
- Error handling with meaningful messages

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohashafici/budget-tracker-web-app
   cd personal-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```plaintext
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### User Routes

- **POST /api/users/register**: Register a new user
  - Request Body: `{ "name": "John Doe", "email": "john@example.com", "password": "password123" }`
  - Response: User object with JWT token

- **POST /api/users/login**: Log in a user
  - Request Body: `{ "email": "john@example.com", "password": "password123" }`
  - Response: User object with JWT token

- **GET /api/users**: Get all users (Admin only)
  - Headers: `Authorization: Bearer <token>`

- **GET /api/users/:id**: Get user by ID
  - Headers: `Authorization: Bearer <token>`

- **PUT /api/users/:id**: Update user role (Admin only)
  - Headers: `Authorization: Bearer <token>`

- **DELETE /api/users/:id**: Delete a user (Admin only)
  - Headers: `Authorization: Bearer <token>`

### Income Routes

- **POST /api/incomes**: Create a new income
  - Headers: `Authorization: Bearer <token>`
  - Request Body: `{ "source": "Salary", "amount": 5000, "date": "2023-01-01" }`

- **GET /api/incomes**: Get all incomes for the authenticated user
  - Headers: `Authorization: Bearer <token>`

- **GET /api/incomes/all**: Get all incomes (Admin only)
  - Headers: `Authorization: Bearer <token>`

- **GET /api/incomes/:id**: Get income by ID
  - Headers: `Authorization: Bearer <token>`

- **PUT /api/incomes/:id**: Update an income
  - Headers: `Authorization: Bearer <token>`
  - Request Body: `{ "source": "Freelance", "amount": 2000 }`

- **DELETE /api/incomes/:id**: Delete an income
  - Headers: `Authorization: Bearer <token>`

### Expense Routes

- **POST /api/expenses**: Create a new expense
  - Headers: `Authorization: Bearer <token>`
  - Request Body: `{ "title": "Groceries", "amount": 100, "date": "2023-01-01" }`

- **GET /api/expenses**: Get all expenses for the authenticated user
  - Headers: `Authorization: Bearer <token>`

- **GET /api/expenses/all**: Get all expenses (Admin only)
  - Headers: `Authorization: Bearer <token>`

- **GET /api/expenses/:id**: Get expense by ID
  - Headers: `Authorization: Bearer <token>`

- **PUT /api/expenses/:id**: Update an expense
  - Headers: `Authorization: Bearer <token>`
  - Request Body: `{ "title": "Utilities", "amount": 150 }`

- **DELETE /api/expenses/:id**: Delete an expense (Admin only)
  - Headers: `Authorization: Bearer <token>`

### Admin Routes

- **GET /api/admin/dashboard**: Get admin dashboard data
  - Headers: `Authorization: Bearer <token>`

- **GET /api/admin/users**: Get all users (Admin only)
  - Headers: `Authorization: Bearer <token>`

- **PUT /api/admin/users/:id/toggle-role**: Toggle user role (Admin only)
  - Headers: `Authorization: Bearer <token>`

- **DELETE /api/admin/users/:id**: Delete a user (Admin only)
  - Headers: `Authorization: Bearer <token>`

- **GET /api/admin/expenses**: Get all expenses (Admin only)
  - Headers: `Authorization: Bearer <token>`

- **DELETE /api/admin/expenses/:id**: Delete an expense (Admin only)
  - Headers: `Authorization: Bearer <token>`

- **GET /api/admin/incomes**: Get all incomes (Admin only)
  - Headers: `Authorization: Bearer <token>`

- **DELETE /api/admin/incomes/:id**: Delete an income (Admin only)
  - Headers: `Authorization: Bearer <token>`

## Application Structure

- **models/**: Contains Mongoose models for User, Income, and Expense.
- **controllers/**: Contains business logic for handling requests.
- **routes/**: Defines API routes and maps them to controller actions.
- **middleware/**: Contains middleware for authentication and authorization.
- **config/**: Configuration files for database connection.

## Challenges

- Implementing role-based authorization to ensure secure access to resources.
- Handling errors gracefully and providing meaningful feedback to users.

## License

This project is licensed under the MIT License.
