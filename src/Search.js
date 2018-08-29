'use strict';

const indexedData = require('./indexedData');

function Search(term) {
  if (!(this instanceof Search)) {
    return new Search(term);
  }

  const results = {};
  for (const name in indexedData) {
    const getIndexedData = indexedData[name];
    const index = getIndexedData();
    // lunr
    // results[name] = index.query((query) => query.term(term)));

    // reverseMap
    results[name] = index.search(term);
  }

  return results;
}

module.exports = Search;
