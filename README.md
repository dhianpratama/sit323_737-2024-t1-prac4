# sit323_737-2024-t1-prac4

A simple calculator API(s). This project is done as requirement for Task 4.1P and 4.1C

## Environment vars
This project uses the following environment variables:

| Name                          | Description                                   | Default Value                                  |
| ----------------------------- | ------------------------------------          | -----------------------------------------------|
| PORT                          | Port number                                   | 3000                                           |
| APP_SERVICE_NAME              | Microservice name/label for logging purpose   | calculator-service                             |

## Pre-requisites
- Install [Node.js](https://nodejs.org/en/), LTS version is recommended

## Getting started
Clone the repository
```
git clone git@github.com:dhianpratama/sit323_737-2024-t1-prac4.git
```
Install dependencies
```
cd sit323_737-2024-t1-prac2p
npm install
```
Run the project
```
npm start
```
  Navigate to `http://localhost:3000`

## Lint
This project uses ESLint with Standard configuration to maintain consistency for code styling

How to check code styling
```
npm run lint
```

How to fix code styling automatically
```
npm run lint:fix
```

## Testing
The tests are written in jasmine and it's using jasmine-reporters to display test result

```
"jasmine": "^5.1.0",
"jasmine-reporters": "^2.5.2"
```

How to run
```
npm test
```

Test result will be printed at terminal
```
App
  should load the page successfully ...
. Passed
  should return 404 for unknown path ...
. Passed
2 of 2 passed (0 skipped, 0 disabled).
```
