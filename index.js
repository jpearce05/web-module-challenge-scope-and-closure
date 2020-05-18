// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * // It takes a callback functin as it's parameter
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 * 
 * function(str) {
 *  str + str
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0]);

  // function(str) {
  //   return str + str;
  // }

  
}

// // console.log(processFirstItem(stringList, callback));
// console.log(processFirstItem('foo','bar', str));


   

// ⭐️ Example Challenge END ⭐️



///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * -- counter 1 is a higher order function, counter 2 is a child of #1
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * -- Closure allows us to use the parent level scope in child level scope so "counter2" would use the closure. It returns a value by using parent level scope. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

// console.log(counter2());

// console.log(counter());
// console.log(counter());



/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

// function inning(max) {
//   return Math.round(Math.random() * 2); // add random number generator between 0 & 9;


// }

// inning();
// console.log(inning(10));



function inning() {
  return Math.round(Math.random()*2); // add random number generator between 0 & 2;
  // = either 0, 1 or 2

};

console.log(inning());





/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, inningNo) {  // using the inning cb from above
  let homeScore = 0;
  let awayScore = 0;

  for (let i = 0; i < inningNo; i++) {
    let homeScore = callback * inningNo;
    let awayScore = callback * inningNo;

    // inning (random number) + homeScore
    // inning (random number) + awayScore

  }
   
  // function inning(max) {  // callback function
  //   return Math.random(); // add random number generator between 0 & 9;
  
  // }
  let scoreObject = {
    Home: homeScore,
    Away: awayScore
  };

  return scoreObject;
}

console.log(finalScore(inning, 9)) // using the "inning" from above calling it here
console.log(inning(), 9);
// console.log(finalScore(inning(), 9));



/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above - inningScore???
(2) A number of innings // inningNo

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(inning, inningNo) {
  let homeScore = 0;
  let awayScore = 0;

  for (let i = 0; i < inningNo; i++) {
    let homeScore = callback + inningNo;
    let awayScore = callback + inningNo; 
    // console.log(`${i} inning: ${homeScore} - ${awayScore}`)

  }

  let finalScore = `Final Score: ${homeScore} - ${awayScore}`;
  return finalScore;

}

console.log(scoreBoard(inning, 9)) // using the "inning" from above calling it here
console.log(inning());

  // function inning() {
  //   return Math.round(Math.random()*2); // add random number generator between 0 & 2;
  //   // = either 0, 1 or 2
  
  // };

  // let scoreObject = {
  //   Home: homeScore,
  //   Away: awayScore
  // };

  // return scoreObject;
  

// }

// console.log(scoreBoard(inning, 9)) // using the "inning" from above calling it here
// console.log(inning(), 9);