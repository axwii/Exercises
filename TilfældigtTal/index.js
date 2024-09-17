// console.log("Math.random", Math.random());
// console.log("Math.random floor", Math.floor(Math.random() * 3));
// console.log("Math.random floor", Math.floor(Math.random() * (3 + 1)));
// console.log("Math.random floor", Math.floor(Math.floor(Math.random() * 3)));
// console.log("Math.random round", Math.round(Math.random() * 3));
// console.log("Math.random celi", Math.ceil(Math.random() * 3));


const number = document.querySelector("#numbersTo100");
number.innerHTML = getRondomIntTo100();

function getRondomIntTo100() {
  return Math.floor(Math.random() * (100 + 1));
}


// Select the <p> element
const pElement = document.getElementById("numbersToMax");

// Get the value from the <p> element and convert it to a number
const maxValue = parseInt(pElement.textContent, 10);

// Use the value for the getRandomInt function
const randomInt = getRandomInt(maxValue);

// Set the result to the innerHTML of the <p> element
pElement.innerHTML = randomInt;


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

