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

    describe('fully matched value', () => {
      const fields = [
        { name: '_id', ref: true },
        'first_name',
        'last_name',
        'mobile',
      ];
      const entries = [
        {
          _id: '123',
          first_name: 'John',
          last_name: 'Doe',
          mobile: '0456-789-012',
          do_not_search: 'Blah',
        },
        {
          _id: '456',
          first_name: 'Doe',
          last_name: 'Don',
          mobile: '0432-109-876',
          do_not_search: 'John',
        },
      ];
      const indexedData = reverseMapCreator(fields)(entries);
      it('return empty list when search <empty_string>', () => {
        const results = indexedData.search('');
        expect(results).length(0);
      });

      it('return a list of reference object', () => {
        const results = indexedData.search('123');
        expect(results).to.deep.equal([{ ref: '123' }]);
      });

      it('return 2 refences when search Doe', () => {
        const results = indexedData.search('Doe');
        expect(results).length(2);
      });

      it('does not support partial matched', () => {
        const results = indexedData.search('0456');
        expect(results).length(0);
      });

      it('should not search do_not_search field', () => {
        const results1 = indexedData.search('John');
        expect(results1).length(1);

        const results2 = indexedData.search('Blah');
        expect(results2).length(0);
      });
    });
  });
});
