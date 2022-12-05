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