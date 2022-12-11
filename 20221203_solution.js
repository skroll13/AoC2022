var fs = require('fs');

var rucksacks = fs.readFileSync('20221203_fullData.txt').toString().split('\n')
// console.log(rucksacks)

// using 'let' to declare a variable prevents variable hoisting

// var totalPriority = 0
// for(let rucksack of rucksacks){
//     let firstCompartment = rucksack.substring(0, rucksack.length/2)
//     let secondCompartment = rucksack.substring(rucksack.length/2)
    
//     var sameChar = ""
//     for(let char1 of firstCompartment){
//         for(let char2 of secondCompartment){
//             if(char1 === char2){
//                 sameChar = char2
//             }
//         }
//     }
//     var priority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(sameChar)+1
//     // console.log(priority)

//     totalPriority += priority
// }
// console.log(totalPriority)

// DONE - how does one break out three elves at a time? for loop for three times?
// what is the character that is in all three Elve's rucksacks?
// what is that character's number?
// add all of those characters up = answer

var totalPriority = 0


for (i = 0; i < rucksacks.length; i+=3){
    let first = rucksacks[i]
    let second = rucksacks[i+1]
    let third = rucksacks[i+2]

    var sameChar = ""
    for(let char1 of first){
        for(let char2 of second){
            for(let char3 of third){
                if(char1 === char2 && char2 === char3){
                    sameChar = char3
                }
            }
        }
    }
    var priority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(sameChar)+1
    // console.log(priority)

    totalPriority += priority
}
console.log(totalPriority)