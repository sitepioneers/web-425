"use strict";
/*
 *  Title:  app.ts
 *  Author: April Auger
 *  Date:   20 February 2020
 *  Description: Server-Side Communications with Node.js and Express.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Import modules
const express = require("express");
// Create an express application
const app = express();
const composers = [
    { id: 1, firstName: "Johann", lastName: "Bach" },
    { id: 2, firstName: "Wolfgan", lastName: "Mozart" },
    { id: 3, firstName: "Ludwig", lastName: "Beethoven" },
    { id: 4, firstName: "Giuseppe", lastName: "Verdi" },
    { id: 5, firstName: "Frederic", lastName: "Chopin" }
];
// Function returns a list of composers.
function getComposers() {
    return composers;
}
// GET method route for root
app.get('/', (request, response) => {
    response.send('The URL for composers is http://localhost:3000/api/composers');
});
// GET method route to retreive a list of composers
app.get('/api/composers', (request, response) => {
    response.json(getComposers());
});
// Function to query the composer array by composerID
function getComposerById(composerId) {
    return composers.find(c => c.id == composerId);
}
// GET method route to retrieve a single composer
app.get('/api/composer/:id', (request, response) => {
    response.json(getComposerById(request.params.id));
});
// Start the server and listen on port 300
const server = app.listen(3000, "localhost", () => {
    console.log("listening on port 3000");
});
//# sourceMappingURL=app.js.map