#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

if (url) {
  request(url, function (error, response, body) {
    if (error) {
      console.log('');
    } else {
      console.log('code:', response.statusCode);
    }
  });
}
