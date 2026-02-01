# NestJS Jwt Autorization Project - NestJS Backend

**Description**  
This project is a NestJS backend focused on secure JWT-based authentication, including access and refresh tokens, user management, and protected API endpoints.

---

## Features 

- NestJS framework
- JWT Authentication (Access & Refresh tokens)
- Prisma ORM for PostgreSQL
- Redis caching
- CRUD operations for users and notes

---

## Installation

1. **Clone the repository**

```bash
git clone git@github.com:MikroTik2/nestjs-jwt-autorization.git
cd nestjs-jwt-autorization
```

2. **Clone the repository**


```bash
npm install
```

3. **Create .env file**

Create a .env file in the root of the project and add the following environment variables:

```bash
# Node environment
NODE_ENV='development'

# HTTP configuration
HTTP_PORT=4000
HTTP_HOST='http://localhost:4000'
HTTP_CORS='http://localhost:3000/,http://localhost:14701/'

# PostgreSQL database
POSTGRES_USER='<YOUR_DB_USER>'
POSTGRES_PASSWORD='<YOUR_DB_PASSWORD>'
POSTGRES_HOST='<YOUR_DB_HOST>'
POSTGRES_PORT=<YOUR_DB_PORT>
POSTGRES_DB='<YOUR_DB_NAME>'
POSTGRES_URI='postgresql://<YOUR_DB_USER>:<YOUR_DB_PASSWORD>@<YOUR_DB_HOST>:<YOUR_DB_PORT>/<YOUR_DB_NAME>?schema=public'

# Redis configuration
REDIS_USER='<YOUR_REDIS_USER>'
REDIS_PASSWORD='<YOUR_REDIS_PASSWORD>'
REDIS_HOST='<YOUR_REDIS_HOST>'
REDIS_PORT=<YOUR_REDIS_PORT>
REDIS_URI='rediss://<YOUR_REDIS_USER>:<YOUR_REDIS_PASSWORD>@<YOUR_REDIS_HOST>:<YOUR_REDIS_PORT>'

# Mailer configuration
MAIL_USER="YOUR_EMAIL"
MAIL_PASSWORD="YOUR_PASSWORD"
MAIL_SERVICE="YOUR_SERVICE"
MAIL_HOST="YOUR_HOST"
MAIL_PORT=YOUR_PORT

# JWT configuration
JWT_SECRET='<YOUR_JWT_SECRET>'
JWT_ACCESS_TOKEN_TTL='2h'
JWT_REFRESH_TOKEN_TTL='7d'
```

5. **Seed the database (optional)**

```bash
npm run db:seed
```

## Running the project

Development mode (watch mode):

```bash
npm run start:dev
```

Production mode

```bash
npm run build
npm run start:prod
```

Debug mode:

```bash
npm run start:debug
```
