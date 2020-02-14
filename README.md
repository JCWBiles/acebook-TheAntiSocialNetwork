# Acebook 

## Project Description

Acebook is a web social platform created by the AntiSocial Network team with the main objective of help our users become more humanly sociable. It mergers the two main elements of the modern world, user and computers but providing a social twist in the way that helps our user to be more aware of their social surroundings.
We created Acebook with one thing in mind. Help users not to become dependant of our platform but to use it as a sharing, communicative and to spend less time in from of the screen.
Acebook allows you to express yourself in the online world in a way that many other platforms offers but rather than keep you attach to us we try to keep you away from us, it sounds odd right? But with this in mind we have add features to help you be part of the World Wide Web and still be able to share time with friends and family.

### Acebook by the AntiSocial Network Website Features:
Login page
- Has a real time clock. 
- If incorrect email or password are entered, no entry to profile page is allowed and page redirects to login page.
- When you click login you get an alert before redirecting to profile page (redirect only happens if log in details are correct.) 

Sign up page
- Has a real time clock. 
- If emails do not match, an alert pops up, informing user.
- If any of the required fields are not filled, and alert pops up telling user the field is required. 
- Once all fields completed, page redirects to profile page. 

Main page/profile page 
- Has a real time clock. 
- Has current weather forecast which updates itself. 
- Once user has logged in or signed up, profile page shows their name on page.
- User can make a new post from this page or go directly to view their posts without creating a new one.
- User can also logout from this page and when they click this button an alert pops up before logging out and redicting to login page. 

Posts page
- Has a real time clock. 
- User can view their posts timeline and edit and delete a post. 
- User can also redirect back to their profile page and logout. When they click log out an alert pops up before logging out and redirecting to login page.

#### Tools used in this project

It uses:
- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for checking syntax and rule following.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [Bootstrap] (https://getbootstrap.com) for css
- [FontAwesome] (from https://fontawesome.com) for css
- [bCrypt] for our password security 
- [MethodOverride] to allow a subclass or child class to provide a specific implementation of a method that is already provided by one of its superclasses or parent classes.
- [Flash] to prompt the user messages when features are tested.

## Card wall

https://trello.com/theantisocialnetwork/home

## Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
    ```
    brew install nvm
    ```
    Then follow the instructions to update your `~/.bash_profile`.
1. Open a new terminal
1. Install the latest long term support (LTS) version of Node.js, currently `10.16.3`.
    ```
    nvm install 10.16.3
    ```

### Set up your project

1. Fork this repository
1. Rename your fork to `acebook-<team name>`
1. Clone your fork to your local machine
1. Install Node.js dependencies
    ```
    npm install
    ```
1. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
1. Install MongoDB
    ```
    brew tap mongodb/brew
    brew install mongodb-community@4.2
    ```
1. Start MongoDB
    ```
    brew services start mongodb-community@4.2
    ```

### Start

1. Start the server
    ```
    npm start
    ```
1. Browse to [http://localhost:3000](http://localhost:3000)

### Test

* Run all tests
    ```
    npm test
    ```
* Run a check
    ```bash
    npm run lint              # linter only
    npm run test:unit         # unit tests only
    npm run test:integration  # integration tests only
    ```

#### Start test server

The server must be running locally with test configuration for the
integration tests to pass.
```
npm run start:test
```
This starts the server on port `3030` and uses the `acebook_test` MongoDB database,
so that integration tests do not interact with the development server.
