'use strict';

const reverseMapCreator = require('./reverseMapCreator');
const lunrCreator = require('./lunrCreator');

module.exports = {
  reverseMap: reverseMapCreator,
  lunr: lunrCreator,
};
