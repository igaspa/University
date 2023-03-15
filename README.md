
# Introduction

A web application built using Sequelize, Docker and Express. Unit tests and integration tests are written using Jest and supertest. Database has nine models: student, professor, course, department, major, exam ,lecturer and result. User can perform basic CRUD operations on database models.

## Built With

- [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
- [![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
- [![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
- [![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)](https://sequelize.org/)
- [![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/products/docker-desktop/)
- [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/agilathon/ivana_gasparov.git
   ```
2. Go to server directory
   ```sh
   cd server
   ```
3. Run the docker-compose.yaml to start postgres instance 
   ```sh
   docker compose up
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Migrate db models:
   ```sh
   npm run migrate:dev
   ```
6. Seed db models:
   ```sh
   npm run seed:all:dev
   ```
7. Run server with
   ```sh
   npm run start:dev
   ```

### Running Tests

Run unit and integration tests

```sh
npm run test
```

### Using Swagger 
Basic CRUD operations can be performed on models. Application is described with OpenAPI specification. API Documentation can be visualized in two ways using Swagger.

1. Copy content of swagger-output.json file and post it in [Swagger Editor](https://editor.swagger.io/?_ga=2.2374838.76556975.1675619630-1641244733.1674039337).
2. Using Swagger UI that is added to the app.
    Run server with
    ```sh
        npm run start:dev
    ```
    Open in browser [localhost:4000/api-docs](http://localhost:4000/api-docs/#/)
