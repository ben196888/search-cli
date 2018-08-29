'use strict';

const reverseMapCreator = require('src/indexCreator/reverseMapCreator');

describe('reverseMapCreator', () => {
  describe(':search', () => {
    it('returns empty list when given empty fields and entries', () => {
      const fields = [];
      const entries = [];
      const indexedData = reverseMapCreator(fields)(entries);
      const results = indexedData.search('any string');
      expect(results).to.deep.equal([]);
    });
  });
});
