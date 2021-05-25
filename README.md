## Video Streaming Application Like Netflix .

## Technologies used 
1. NodeJS -- Service
2. JavaScript -- Language
3. MongoDB -- Database

## Database Setup 
* `MongoDB` should have to be installed in your system and then start the `mongod` service in the background .

## Project Structure
```shell
src
├── app.js              # Entry point of the application
├── controllers         # functions to connect routes to db operations
├── db                  # db connection and model definitions
└── routes              # express middlewares (route wise)
```

## Installation of the app
```shell
Install all the dependencies
$ npm install

Testing
$ npm run test

Running the server (Make sure Mongod is runnig in the background) 
$ npm start
```