# JavaScript Template

JavaScript Web app template based on Koa Web framework, enhanced with all required development tools.

## Dev Stack

- Node.js 14+
- Visual Studio Code
- ESLint
- Prettier
- Mocha Test Explorer
- Docker

## Basic Usage

```
npm install
npm start
```

## OpenAPI UI

Swagger UI is hosted on root path:

```
http://localhost:8080/
```

## Docker

```
docker build . -t template-js:test --target=test
docker run --name template-js-test -d template-js:test
docker build . -t template-js:runtime --target=runtime
docker run --name template-js-runtime -p 8080:8080 -d template-js:runtime
```
