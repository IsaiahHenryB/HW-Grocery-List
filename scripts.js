// Part One
let gName = prompt("What is your name?")
let gItemOne = prompt("Enter the first grocery item.");
let gItemOneNum = prompt(`How many ${gItemOne} would you like?`);
let gItemTwo = prompt("Enter the second grocery item.");
let gItemTwoNum = prompt(`How many ${gItemTwo} would you like?`);
let gItemThree = prompt("Enter the third grocery item.");
let gItemThreeNum = prompt(`How many ${gItemThree} would you like?`);

let oneNum = Number(gItemOneNum);
let twoNum = Number(gItemTwoNum);
let threeNum = Number(gItemThreeNum);

console.log(`${gName}'s Shopping List:
${oneNum} ${gItemOne}
${twoNum} ${gItemTwo}
${threeNum} ${gItemThree}
Total number of items: ${oneNum+twoNum+threeNum}`);
// Extraneous Stuff
let title = `${gName}'s Shopping List`
let desc = `${oneNum} ${gItemOne}
${twoNum} ${gItemTwo}
${threeNum} ${gItemThree}
Total number of items: ${oneNum+twoNum+threeNum}`;

document.getElementById("gListTitle").innerHTML = title;
document.getElementById("gListHeader").innerHTML = title;
document.getElementById("gList").innerHTML = desc;

//  Part Two

let tongueTwister = "How much wood would a woodchuck chuck, if the woodchuck could chuck wood?";

let pangram = "The quick brown fox jumps over the lazy dog.";

let anotherPangram = "The five boxing wizards jump quickly.";

let altTongueTwister = tongueTwister.toLowerCase();
let foxIndex = pangram.indexOf("fox");
let altPangram = pangram.charAt(foxIndex).toUpperCase();
let panNum = anotherPangram.charAt(10);

console.log(`${altTongueTwister}`);
console.log(`${altPangram}`);
console.log(`${panNum}`);
