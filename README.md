# User Auth Service – JWT Authentication

A **NestJS-based authentication service** demonstrating secure JWT flows.  
This is a **standalone showcase** intended for educational and portfolio purposes.

## Features
- Login endpoint → Returns access + refresh token
- Refresh token endpoint → Renew access tokens
- Validate access token → Protects routes via JWT Guard
- Role-based access (optional extension)
- Production-ready structure using **NestJS best practices**

## Tech Stack
- Node.js + TypeScript
- NestJS framework
- JWT (passport-jwt)
- dotenv for environment variables
- Optional: Docker

## API Endpoints
- `GET /auth/token/:userId` → Get access & refresh token
- `POST /auth/token/refresh` → Issue new access token
- `GET /auth/user` → Validate token (protected)

## Installation
1. Clone the repository
```bash
git clone https://github.com/pradeep-yenkuwale/user-auth-service.git
```
cd user-auth-service
