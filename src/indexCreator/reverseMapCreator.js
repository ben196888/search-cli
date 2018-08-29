'use strict';

const _ = require('lodash');

const reverseMapCreator = fields => entries => {
  const uniqueFields = [];
  function addField(field) {
    if (!uniqueFields.includes(field)) {
      uniqueFields.push(field);
    }
  }

  let refField = null;

  for (const field of fields) {
    if (typeof(field) === 'string') {
      addField(field);
    } else if (typeof(field) === 'object') {
      if (field.ref) {
        refField = field.name;
      }
      addField(field.name);
    }
  }

  if (refField === null) {
    // eslint-disable-next-line no-console
    console.warn('ref is null, skip creating the reverse map.');
    return { search: () => [] };
  }

  const reverseMap = {};
  const addRefIntoMap = (ref, key) => {
    if (_.isNumber(key) || _.isString(key) || _.isBoolean(key)) {
      if (!reverseMap[key]) {
        reverseMap[key] = [];
      }
      reverseMap[key].push(ref);
    } else if (_.isArray(key)) {
      for (const element of key) {
        addRefIntoMap(ref, element);
      }
    } else if (_.isObject(key)) {
      for (const f in key) {
        addRefIntoMap(ref, key[f]);
      }
    }
  };

  for (const entry of entries) {
    const refObj = { ref: String(entry[refField]) };
    for (const f of uniqueFields) {
      addRefIntoMap(refObj, entry[f]);
    }
  }

  return {
    search(term) {
      term = String(term);
      if (term === '') {
        return [];
      }
      return reverseMap[term] || [];
    }
  };
};

module.exports = reverseMapCreator;
