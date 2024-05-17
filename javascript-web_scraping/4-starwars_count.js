#!/usr/bin/node
const request = require('request');
const character = 'https://swapi-api.hbtn.io/api/people/18/';
const url = process.argv[2];

request(url, function (error, response, body) {
  if (!error) {
    let count = 0;
    const movies = JSON.parse(body).results;
    for (const movie of movies) {
      for (const cara of movie.characters) {
        if (cara === character) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
