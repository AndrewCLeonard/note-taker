# Note Taker

## Requirements

### User Story

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

### Acceptance Criteria

GIVEN a note-taking application:

| WHEN I...                                                        | THEN...                                                                                                 |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| open the Note Taker                                              | I'm presented with a landing page with a link to a notes page                                           |
| enter a new note title and the note’s text                       | a Save icon appears in the navigation at the top of the page                                            |
| click on the Save icon                                           | the new note I have entered is saved and appears in the left-hand column with the other existing notes  |
| click on an existing note in the list in the left-hand column    | that note appears in the right-hand column                                                              |
| click on the Write icon in the navigation at the top of the page | I am presented with empty fields to enter a new note title and the note’s text in the right-hand column |

### Mock-Ups

![mock-up_1](./public/images/11-express-homework-demo-01.png)
![mock-up_2](./public/images/11-express-homework-demo-02.png)

### Other notes

-   The application should have a `db.json` file on the back end that will be used to store and retrieve notes using the `fs` module.
-   The following HTML routes should be created:
    -   GET `/notes` should return the `notes.html` file.
    -   GET `\*` should return the `index.html` file.
-   The following API routes should be created:
    -   GET `/api/notes` should read the `db.json` file and return all saved notes as JSON.
    -   POST `/api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

## File Structure

| Folder             | Purpose                                                                               |
| ------------------ | ------------------------------------------------------------------------------------- |
| /bin               | express.js's version of `server.js`                                                   |
| /db                | json data                                                                             |
| /lib               | library for code/files which will be used more than once in other files               |
| /public            | all client-facing code, such as html, css, images, and js for manipulating DOM.       |
| /public/assets/js  | functions related to the file name                                                    |
| /public/views      | front-end .html or .hbs                                                               |
| /routes            | provides router functions to append URLS to simplify and modularize code, e.g. `/api` |
| /routes/apiRoutes  | route all API calls                                                                   |
| /routes/htmlRoutes |                                                                                       |
| /lib               |                                                                                       |

## Captain's Log

### 10-2-2022

-   Understanding how to connect all the pieces together to make data flow back-to-front and vice versa.

### 9-30-2022

-   using `npx express-generator` instead of the Express 3 style setup.
    -   server starts with `./bin/www` node file instead of `server.js`
    -   uses a templating engine by default. Not sure I'll be using it.
        -   had to change routes to point to html instead of the .hbs files.

## Questions

### package.json

-   should it be `"main": "app.js",`?

## Backlog

-   create tests
-   use handlebars or other templating engine to display search results
-   use Font Awesome API to add onhover color or animation

## Issues

_find issues in the code by searching "issue #"_

1. displaying save icon using js
    - works with `<p>` tag, but not with `<i>` tag
    - something about Font Awesome?
    - incorrect CSS?
2. in `noteRoutes.js`, notes need to be in curly braces to treat it as an array?
