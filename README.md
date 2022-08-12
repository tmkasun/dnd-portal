# Dungeons & Dragons web portal

This repository contains the source code for Dungeons & Dragons web portal.

## Technologies

- [**Create React App**](https://create-react-app.dev)
- [Jest](https://jestjs.io) for running unit tests;
- [React Testing Library](https://github.com/testing-library/react-testing-library) for unit test assertions;
- [Cypress](https://cypress.io) for running E2E tests;
- [Prettier](https://prettier.io/) for Source code formatting;
- [ESLint](https://eslint.org/) for linting source code;

## Getting started

### Prerequisites

Node.js (version 16 or above).

```bash
$ git clone https://github.com/tmkasun/dnd-portal.git
$ cd dnd-portal
```

## Running locally

Run following command to install the dependencies.

````bash
```bash
$ npm ci
````

and run the following command to start the application.

```bash
$ npm start
```

## Running on container

Run the following command to Build and tag the Docker image.

```bash
docker build -t dndportal:dev .
```

and then run the following command to run the application.

```bash
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    dndportal:dev
```

## Tests

### Unit & Integration tests

```bash
$ npm run test
```

### E2E tests

```bash
$ npm run cy:run
```

## DEMO

[**Demo**](https://dnd-portal.vercel.app/)
