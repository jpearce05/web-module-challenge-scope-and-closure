// from kit & video example

const data = [
  {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
  {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
  {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
  {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];


// const newCityState = data.map((cb) => {
//   return {'city2': cb.city, 'state2': cb.state};

// });

// console.log(newCityState[0]);


// const largeStates = data.filter((cb) => {
//   return cb.population >= 650000;

// })

// console.log(largeStates);

// const arrayOfPops = data.map((cb) => {
//   return cb.population; 

// });

// console.log(arrayOfPops);


const arrayOfPops = data.map(cb => cb.population);

console.log(arrayOfPops);


const largeLandAreas = data.filter((cb) => {
  return cb.land_area >= 50;
})

console.log(largeLandAreas);


// mean = sum of items / number of items

const states = data.length;
let popSum = data.reduce((sum, currentValue) => {
  return sum += currentValue.population;

},0);

console.log(popSum/4);

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

// practice

// function callSayHelloLars(callback) {
//   const innerName = 'lars';
//   callback(innerName);
// }

// function sayHello(name) {
//   console.log(`hello, ${name}`);

// }

// console.log(callSayHelloLars(sayHello));

// const elements = ['earth', 'wind', 'fire', 'water'];

// for (let i = 0; i < elements.length; i++) {
//   console.log(elements[i]);

// }


// const elements = ['earth', 'wind', 'fire', 'water'];
  
//   function showFirst(array, callback) {
//     callback(array[0]);
//   }

//   showFirst(elements, (firstItem) => {
//     console.log(firstItem);
//   })

  // const elements = ['earth', 'wind', 'fire', 'water'];
  
  // function showFirst(array, callback) {
  //   callback(array[0]);
  // }

  // showFirst(elements, function(firstItem) {
  //   console.log(firstItem);
  // })


  // const elements = ['earth', 'wind', 'fire', 'water'];
  
  // function showFirst(array, callback) {
  //   callback(array[0]);
  // }

  // const functionShow = showFirst(elements, function(firstItem) {
  //   console.log(firstItem);
  // })

  // showFirst(elements, functionShow);

  const elements = ['earth', 'wind', 'fire', 'water'];
  // const el = ['earth', 'wind', 'fire', 'water'];
  
  function showFirst(array, callback) {
    callback(array[0]);
  }

  function showLength(list, cb) {
    cb(list.length);

  }

  showFirst(elements, (firstItem) => {
    console.log(firstItem);
  });

  // showFirst(elements, functionShow);

  showLength(elements, (lengthOfList) => {
    console.log(lengthOfList);
  });

  elements.forEach((element, index) => {
    console.log(element, index);
  });

  const newArray = elements.map((el, index) => {
    return `"newArray" ${el} ${index}`;
    
    // console.log(element2, index);

  });

  console.log(newArray);
  
  console.log(elements);









