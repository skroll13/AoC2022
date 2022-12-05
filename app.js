// to start:
// DONE - import txt file
// DONE? - parse data into an array - https://stackoverflow.com/questions/6831918/node-js-read-a-text-file-into-an-array-each-line-an-item-in-the-array
// array of strings?
// add each string, or whatever the small sets are, up
// compare each string, or whatever the small sets are, to each other to find the largest in the group

// ideas:
// from Loren:
// it was kind of a 2D array separated by double line breaks, though I processed it into one number per elf while I was reading in the file
// so, add the first number to the second number and then add that to the third number, and so on, until you hit a line break. 
// then, stop adding. after the line break, add the numbers together again. repeat





// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('hello world');
// })

// server.listen(port, hostname, () =>{
//     console.log(`server running at http:${hostname}:${port}/`)
// })


// this code brings in the file system - thus, fs
// const fs = require('fs');

// this code pulls in the test data.
// it wasn't pulling in before because I had a typo in the name of the file 
// fs.readFile('20221201_01_testData.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

var fs = require('fs');

var array = fs.readFileSync('20221201_01_fullData.txt').toString().split('\n')
for(i in array){
    console.log(array[i])
}

var sum = 0;
var max = 0;
for(i=0; i<array.length; i++){

    if(array[i] == ""){
        console.log(sum)
        
        if(max < sum){
            max = sum 
        }

        sum = 0

        continue
    }
    
    sum += parseInt(array[i])
    
}
console.log(sum)
console.log(max)

// result: 010002000300040005000600070008000900010000

