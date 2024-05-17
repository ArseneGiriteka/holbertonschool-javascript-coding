#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const filePath = process.argv[3];
const url = process.argv[2];

request(url, function (error, response, body) {
  if (!error) {
    try {
      fs.writeFileSync(filePath, body, 'utf-8');
    } catch (error) {
      console.log(error);
    }
  }
});
