// declare the winner on each line 
// dole out the correct points
// make letters into numbers
// add each line
// find total

// rock beats scissors
// scissors beats paper
// paper beats rock

// ROCK:     A = rock       X = rock      points: 1
// PAPER:    B = paper      Y = paper     points: 2
// SCISSORS: C = scissors   Z = scissors  points: 3

// WIN:  6
// DRAW: 3
// LOSS: 0


// A < Y: Y is greater than A +6
// B > X: B is greater than X +0
// C = Z: C is the same as Z +3

// PART 1: what the win points look like:
// A Y = 6
// A X = 3
// A Z = 0
// B X = 0
// B Y = 3
// B Z = 6
// C X = 6
// C Y = 0
// C Z = 3

// PART 2:
// X = loss  points: 0
// Y = draw  points: 3
// Z = win   points: 6

// PART 2: what the win points look like:
// A Y = 3
// A X = 0
// A Z = 6
// B X = 0
// B Y = 3
// B Z = 6
// C X = 0
// C Y = 3
// C Z = 6

// take the win points, add them to the tool points
// add up all of the points





var fs = require('fs');

var rounds = fs.readFileSync('20221202_01_fullData.txt').toString().split('\n')
console.log(rounds)

var points1 = 0;
var points2 = 0;
var points3 = 0;
var points4 = 0;
var points5 = 0;
var points6 = 0;
var points7 = 0;
var points8 = 0;
var points9 = 0;
var pointsTotal = 0
// in the for loop, if one uses 'in', you're grabbing the index. if you use 'of' you're grabbing the context
// same format as a traditional for loop, just getting the contents instead of the index (like every other languages)
// for(let roundIndex of rounds){
//     if(roundIndex === 'A X'){
//         // 3 for draw, 1 for rock
//         points1 = 4
//         pointsTotal += 4
    // }else if(roundIndex === 'A Y'){
    //     // 6 for winning, 2 for paper
    //     points2 = 8
    //     pointsTotal += 8
    // }else if(roundIndex === 'A Z'){
    //     // 0 for loos, 3 for scissors
    //     points3 = 3
    //     pointsTotal += 3
    // }else if(roundIndex === 'B X'){
    //     // 0 for loss, 1 for rock
    //     points4 = 1
    //     pointsTotal += 1
    // }else if(roundIndex === 'B Y'){
    //     // 3 for draw, 2 for paper
    //     points5 = 5
//         pointsTotal += 5
//     }else if(roundIndex === 'B Z'){
//         // 6 for winning, 3 for scissors
//         points6 = 9
//         pointsTotal += 9
//     }else if(roundIndex === 'C X'){
//         // 6 for winning, 1 for rock
//         points7 = 7
//         pointsTotal += 7
//     }else if(roundIndex === 'C Y'){
//         // 0 for loss, 2 for paper
//         points8 = 2
//         pointsTotal += 2
//     }else if(roundIndex === 'C Z'){
//         // 3 for draw, 3 for scissors 
//         points9 = 6
//         pointsTotal += 6
//     } 
// }

// PART 2:
for(let roundIndex of rounds){
    if(roundIndex === 'A X'){
        // 0 for loss, 3 for scissors
        // rock beats scissors
        pointsTotal += 3
    }else if(roundIndex === 'A Y'){
        // 3 for draw, 1 for rock
        // rock draws rock
        pointsTotal += 4
    }else if(roundIndex === 'A Z'){
        // 6 for win, 2 for paper
        // paper beats rock
        pointsTotal += 8
    }else if(roundIndex === 'B X'){
        // 0 for loss, 1 for rock
        // paper beats rock
        pointsTotal += 1
    }else if(roundIndex === 'B Y'){
        // 3 for draw, 2 for paper
        // paper draws paper
        pointsTotal += 5
    }else if(roundIndex === 'B Z'){
        // 6 for winning, 3 for scissors
        // scissors beat paper
        pointsTotal += 9
    }else if(roundIndex === 'C X'){
        // 0 for loss, 2 for paper
        // scissors beats paper
        pointsTotal += 2
    }else if(roundIndex === 'C Y'){
        // 3 for draw, 3 for scissors
        // scissors draw scissors
        pointsTotal += 6
    }else if(roundIndex === 'C Z'){
        // 6 for win, 1 for rock 
        // rock beats scissors
        pointsTotal += 7
    } 
}

console.log(pointsTotal)
