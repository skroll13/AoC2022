var fs = require('fs');

var sections = fs.readFileSync('20221204_testData.txt').toString().split('\n')
console.log(sections)