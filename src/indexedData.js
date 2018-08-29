'use strict';

const entries = require('./dataHelper/entries');
const fields = require('./dataHelper/fields');
const indexCreator = require('./indexCreator').reverseMap;

function getIndex(name) {
  const nameFields = fields[name]();
  const nameEntries = entries[name]();
  return indexCreator(nameFields)(nameEntries);
}

// Generate { USERS: () => getIndex('USERS'), ... }
function composer() {
  const exp = {};
  for (const name in entries) {
    exp[name] = () => getIndex(name);
  }
  return exp;
}

module.exports = composer();
