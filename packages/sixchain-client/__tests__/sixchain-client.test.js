'use strict';

const sixchainClient = require('..');
const assert = require('assert').strict;

assert.strictEqual(sixchainClient(), 'Hello from sixchainClient');
console.info('sixchainClient tests passed');
