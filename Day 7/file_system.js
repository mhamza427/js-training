const fs = require('fs');
fs.writeFileSync('notes.txt', 'This file was created by Node.js');
fs.appendFileSync('notes.txt', '\nThis is appended text');
data = fs.readFileSync('notes.txt', 'utf8')
console.log(data);
fs.renameSync('notes.txt', 'note.txt');
