// PART ONE:
// var fs = require('fs');

// var array = fs.readFileSync('20221201_01_fullData.txt').toString().split('\n')
// for(i in array){
//     console.log(array[i])
// }

// var sum = 0;
// var max = 0;
// for(i=0; i<array.length; i++){

//     if(array[i] == ""){
//         console.log(sum)
        
//         if(max < sum){
//             max = sum 
//         }

//         sum = 0

//         continue
//     }
    
//     sum += parseInt(array[i])
    
// }
// console.log(sum)
// console.log(max)

// PART TWO:
var fs = require('fs');

var arrayOfElves = fs.readFileSync('20221201_01_fullData.txt').toString().split('\n\n')
var eachElfCalories = []
for(elfIndex in arrayOfElves){
    // console.log(arrayOfElves[elfIndex])
    // console.log('-')
    var elfCalories = arrayOfElves[elfIndex].split('\n')
    currentElfCalories = 0
    for(eachElfCaloriesIndex in elfCalories){
        currentElfCalories += parseInt(elfCalories[eachElfCaloriesIndex])
    }
    eachElfCalories.push(currentElfCalories)
    // console.log(elfCalories)
    // console.log(currentElfCalories)
}
console.log(eachElfCalories)

eachElfCalories.sort(function(a, b){
    return a - b;
});
// eachElfCalories.length
// var lastIndex = eachElfCalories.length-1
// var penultimateIndex = eachElfCalories.length-2
// var antepenultimateIndex = eachElfCalories.length-3
// var lastCalorie = eachElfCalories[lastIndex]
// var penulimateCalorie = eachElfCalories[penultimateIndex]
// var antepenultimateCalorie = eachElfCalories[antepenultimateIndex]
// var topThreeCalorieCounts = lastCalorie + penulimateCalorie + antepenultimateCalorie
var topThreeCalorieCounts = eachElfCalories.pop() + eachElfCalories.pop()  + eachElfCalories.pop()
// console.log(eachElfCalories)
// console.log(lastIndex)
// console.log(lastCalorie)
console.log(topThreeCalorieCounts)