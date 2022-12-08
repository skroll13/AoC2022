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

// DONE - step 1: turn the string into an array to separate the data by elves
// step 2: turn each elf into an array of calories. loop through the array
// step 3: integers here?
// when storing the individual elf info, parseInt

var fs = require('fs');

var arrayOfElves = fs.readFileSync('20221201_01_fullData.txt').toString().split('\n\n')
var eachElfCalories = []
for(elfIndex in arrayOfElves){
    // console.log(arrayOfElves[elfIndex])
    // console.log('-')
    // output: "1000\n2000\n3000"
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
// loop through eachElfCalories and assign the largest number to a varible and then remove it from the array. repeat two more times.
// sort
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
var topThreeCalorieCounts =eachElfCalories.pop() + eachElfCalories.pop()  + eachElfCalories.pop()
console.log(eachElfCalories)
// console.log(lastIndex)
// console.log(lastCalorie)
console.log(topThreeCalorieCounts)


// 

// var sum = 0;
// var first = array[0];
// var second = array[0];
// var third = array[0];
// for(i=0; i<array.length; i++){

//     if(array[i] == ""){
//         console.log(sum)
        
//         if(first < array[i]){
//             first = array[i] 
//         } 

//         if(first > second && second < array[i]){
//             second = array[i]
//         } 

//         if(second > third && third < array[i]){
//             third = array[i]
//         }
//         sumMax = first + second + third

//         continue
    // }

    // if(array[i] == ""){
    //     console.log(sum)
        
    //     if(first < array[i]){
    //         first = array[i] 
    //     } 

    //     if(first > second && second < array[i]){
    //         second = array[i]
    //     } 

    //     if(second > third && third < array[i]){
    //         third = array[i]
    //     }
    //     sumMax = first + second + third

    //     continue
    // }
    
    // sum += parseInt(array[i])

    
    
// }
// console.log(sum)
// console.log(first)
// console.log(second)
// console.log(third)
// console.log(sumMax)