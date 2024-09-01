# Sports Application with Admin Panel

This project is a sports application developed using Node.js, featuring an admin panel to manage registrations, payment transactions, and other administrative functions.

## Table of Contents
1. Features
2. Configuration
3. Admin Panel
4. Technologies Used


## Features
- Team Registration: Users can sign-up / Register their Team(s).
- Payment Integration: Secure payment gateway for event registrations and other services.
- Admin Panel: Comprehensive admin panel for managing users, and transactions.

## Configuration
The application can be configured by modifying the environment variables in the .env file.

- NODE_ENV: Set to development or production.
- PORT: Port number for the application.
- DATABASE_URL: URL of your database.
- JWT_SECRET: Secret key for JWT authentication.
- PAYMENT_GATEWAY_KEY: API key for the payment gateway.

## Admin Panel
The admin panel provides functionality for managing the application:

- Dashboard: Overview of key metrics.
- User Management: View, edit, and delete users.
- Payment Transactions: View and manage all payment transactions.
- To access the admin panel, log in as an admin user and navigate to /admin.

## Technologies Used
- Node.js: Backend runtime.
- Express.js: Web framework for Node.js.
- Postgres: Database.
- JWT: JSON Web Tokens for authentication.
- Stripe/PayPal: Payment gateway integration.
- Admin Panel: Admin panel interface.