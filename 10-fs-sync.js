const {readFileSync, writeFileSync, write} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');


writeFileSync('./content/first.txt',`(this is added text) +`, {flag : 'a'});

console.log('done with this task');
console.log('starting the next one');