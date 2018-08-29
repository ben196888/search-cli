#!/usr/bin/env node

'use strict';

const inquirer = require('inquirer');
const Search = require('./Search');

function ask() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'term',
        message: 'Give a string you want to search:',
      },
    ])
    .then(answers => {
      // Use user feedback for... whatever!!
      const results = new Search(answers.term);
      for (const name in results) {
        const data = require('./dataHelper/entries')[name]();
        // eslint-disable-next-line no-console
        console.log(`********** Find ${results[name].length} elements in ${name}`);
        for (const e of results[name]) {
          // eslint-disable-next-line no-console
          console.log(data.find(d => String(d._id) === e.ref));
        }
      }
      askAgain();
    });
}

function askAgain() {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'askAgain',
        message: 'Search again?',
        default: true,
      },
    ])
    .then(answers => {
      if (answers.askAgain) {
        ask();
      }
    });
}

ask();
