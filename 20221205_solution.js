var fs = require('fs');

var input = fs.readFileSync('20221205_fullData.txt').toString().split('\n\n')
// console.log(input)

function parseInputStacks(stackData){
    let lines = stackData.split('\n')
    let numberOfColumns = lines[0].length/4
    let stacks = []
    for(i = 0; i < numberOfColumns; i++){
        stacks.push([])
    }
    for(i = 0; i < lines.length - 1; i++){
        let line = lines[i]
        for(j = 1; j < line.length; j += 4){
            let character = line[j]
            if(character === " "){
                continue
            } else {
                // what is the correct array?
                let stackIndex = (j - 1)/4
                // put the character in the correct array
                stacks[stackIndex].push(character)
            }
        }
    }
    // return [['A'],['B','C'],['D']]
    return stacks
}
let stacks = parseInputStacks(input[0])
// console.log(stacks)

// part two
// move is the command
// from indicates the starting stack (remember to do a -1 here)
// to indicates the landing stack
// use pop and push

let crate = ""
let crane = ""
let result = ""


function moveStacks(instructions, stacks){
    let lines = instructions.split('\n');
    lines.forEach(line => {
        let notes = line.split(" ")
        let quantity = notes[1] // how many crates
        let from = notes[3] // from where
        let to = notes[5] // to where
        for(i = 0; i < quantity; i++){
            crate = stacks[from - 1].shift()
            if (crate !== "" || crate !== undefined){
                crane += crate
                crate = ""
            }
            if (i === quantity - 1){
                crane = crane.split("").reverse().join("")
                // console.log(crane)
                crane.split("").forEach(crate => {
                    stacks[to - 1].unshift(crate)
                })
                crane = ""
            }
        }
        console.log(stacks)
    });
    for (i = 0; i < stacks.length; i++){
        result += stacks[i].shift()
    }
    console.log(result)
}
moveStacks(input[1], stacks)
