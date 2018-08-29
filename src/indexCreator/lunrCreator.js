'use strict';

const lunr = require('lunr');

const lunrCreator = fields => entries => lunr(function () {
  for (const field of fields) {
    if (typeof(field) === 'string') {
      this.field(field);
    } else if (typeof(field) === 'object') {
      if (field.ref) {
        this.ref(field.name);
      }
      this.field(field.name);
    }
  }

  for (const entry of entries) {
    this.add(entry);
  }
});

module.exports = lunrCreator;
