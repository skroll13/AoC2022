// PART ONE
var fs = require('fs');

var pairs = fs.readFileSync('20221204_fullData.txt').toString().split('\n')
// console.log(pairs)

let total = 0
for(let pair of pairs){
    console.log(pair)
    let elves = pair.split(',')
    let elf1 = elves[0].split('-').map(Number)
    let elf2 = elves[1].split('-').map(Number)

    if ((elf1[0] <= elf2[0] && elf1[1] >= elf2[1]) || (elf1[0] >= elf2[0] && elf1[1] <= elf2[1])) {
        console.log('working')
        total++
    }
}
console.log(total)


// this didn't work as I though it would: .join().split(',')
// this was the output:
// [
//   '2-4', '6-8', '2-3',
//   '4-5', '5-7', '7-9',
//   '2-8', '3-7', '6-6',
//   '4-6', '2-6', '4-8'
// ]


// PART TWO
// var fs = require('fs');

// var pairs = fs.readFileSync('20221204_fullData.txt').toString().split('\n')
// // console.log(pairs)

// let total = 0
// for(let pair of pairs){
//     console.log(pair)
//     let elves = pair.split(',')
//     let elf1 = elves[0].split('-').map(Number)
//     let elf2 = elves[1].split('-').map(Number)

//     if ((elf1[0] <= elf2[0] && elf1[1] >= elf2[1]) || (elf1[0] >= elf2[0] && elf1[1] <= elf2[1]) || (elf1[0] <= elf2[1] && elf1[1] >= elf2[0])) {
//         console.log('working')
//         total++
//     }
// }
// console.log(total)