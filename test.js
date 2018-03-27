const assert = require('assert');
const underline = require('./index.js');
const md = require('markdown-it')().use(emph);

const tests = [
  { in: '*emphasis*', exp: '<em>emphasis</em>' },
  { in: '**strong**', exp: '<strong>strong</strong>' },
  { in: '***strong emphasis***',
    exp: '<strong><em>strong emphasis</em></strong>' },
  { in: '_italic_', exp: '<i>italic</i>' },
  { in: '__bold__', exp: '<b>bold</b>' },
  { in: '___bold italic___',
    exp: '<b><i>bold italic</i></b>' },
  { in: '____underline____',
    exp: '<u>underline</u>' },
  { in: '_____underline italic_____',
    exp: '<u><i>underline italic</i></u>' },
  { in: '______underline bold______',
    exp: '<u><b>underline bold</b></u>' },
  { in: '_______underline bold italic_______',
    exp: '<u><b><i>underline bold italic</i></b></u>' },
];


tests.map(test => assert.equal(md.renderInline(test.in), test.exp))
