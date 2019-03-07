// Create a variable called 'myName' that's value is your name

  // CODE HERE
  
let myName = 'your name';

// Create a variable called 'faveNum' that's value is your favorite number

  // CODE HERE
  
let faveNum = 5;

// Create a variable called 'lovesCode' and set it to true

  // CODE HERE

let lovesCode = true;

// Create a function called 'sum' that takes in two parameters, num1 and num2, and returns the sum (multiplication) of those two parameters.

  // CODE HERE
  
let sum = (num1, num2) => {
  return num1*num2;
};

//// I guess sum is the multiplication of two numbers ???


// Create a function called 'lovesCodeChecker' that takes in a single parameter called x. Check to see if x is equal to true. If it is, return true. If x does not equal true, return false

  // CODE HERE
  
  let lovesCodeChecker = (x) => {
    if (x){
      return true;
    } else {
      return false;
    }
  };

// Create a function called 'oddChecker' that takes in one parameter, num. Check to see if the number is even or odd. If it is odd, return 'the number is odd' or return 'the number is even' if it is even.

  // CODE HERE
  
  let oddChecker = (num) => {
    if (num%2!==0){
      return 'the number is odd';
    } else {
      return 'the number is even';
    }
    
  };

// Create an array called 'faveColors' that contains your three favorite colors as strings

  // CODE HERE
  let faveColors = ['black', 'white', 'gray'];


// Create a copy of the faveColors array called 'colorCopy' using slice

  // CODE HERE
  
  let colorCopy = faveColors.slice(0, faveColors.length);

// Add a fourth color to the end of the 'colorCopy' array using push

  // CODE HERE
  
  colorCopy.push('blue');
  

// Create a new array called 'middleNums' with the slice method from the numbers array below.

//// INSTRUCTIONS SHOULD INCLUDE: TAKE THE MIDDLE 3 NUMBERS FROM NUMBERS ARRAY
  let numbers = [1,2,3,4,5];
  
  // CODE HERE
  
  let middleNums = numbers.slice(1, numbers.length-1);

// Create an object called 'me' that has these keys with the correct values: firstName, state, age, greeter. firstName will be your name as a string. state will be your current state or providence as a string. age will be your age as a number. greeter will be a method that returns the string 'Hello! My name is NAMEVALUE and I live in STATEVALUE' with the correct values

  // CODE HERE
  
  let me = {
    firstName: 'first',
    state: 'state',
    age: '40',
    greeter: function(){
      return `Hello! My name is ${this.firstName} and I live in ${this.state}`;
    }
  }

// Create a function called 'bigOrSmall' that takes in one parameter, arr. Create a new array inside of bigOrSmall called 'answers'. Loop over the passed in arr param. If the number is GREATER than 100, push 'big' to the answers array. If the number is LESS than 100, push 'small' to the answers array. Return the answers array

  // CODE HERE
  
  let bigOrSmall = (arr) => {
    let answers = [];
    arr.forEach((element, i, arr)=>{
      if(element > 100){
        answers.push('big');
      } else {
        answers.push('small');
      }
    });
      return answers;

  };

// Create a function called 'arrayReverser' that takes in one parameter, arr. Inside of arrayReverser, create an empty array called 'reversed'. Using a for loop, loop over the passed in array in reverse and add each item to the new reversed array. Finally, return the new reversed array

  // CODE HERE
  
  let arrayReverser = (arr)=>{
    let reversed = [];
    arr.forEach((element)=>{
      return reversed.unshift(element)});
    return reversed;
  }

// Below is an array, myNumbers. We will be using .map, .filter, .reduce and .forEach to manipulate the array in some form
let myNumbers = [3,55,788,2,1]

// First, with an arrow function let's use .map to create a new array that doubles each number. Call the new array 'doubled'

  // CODE HERE
  
  let doubled = myNumbers.map((element)=>{
    return element*2})

// Now lets use .filter to only get the nubmer(s) greater than 100. Use an arrow function and call the new array 'filtered'

  // CODE HERE
  let filtered = myNumbers.filter((element)=>{
    return element > 100})

// Next up, reduce. Use .reduce to get the total of the array. call the new array 'total' and use an arrow function

  // CODE HERE
  let total = myNumbers.reduce((tot, curr)=>{
    return tot + curr;
  });

// Last, lets use .forEach to find the index of each item in the array. Create a new array called myNumbersIndex to hold the indicies 

  // CODE HERE
  let myNumbersIndex = [];
  myNumbers.forEach((element, i, myNumbers)=>{
    myNumbersIndex.push(myNumbers.indexOf(element));
    return myNumbersIndex;
  });

  const notGeorge = ['Louis', 'Ted', 'Bill', 'Sharon', 'Mark', 'Angela']
// Did you know that George Foreman has five sons named George? Let's go ahead and change everyone's name in the notGeorge array to George using .map. Call the new array 'forTheLoveOfGeorge'

  // CODE HERE
  let forTheLoveOfGeorge = notGeorge.map((element)=>{
    return element="George";
  })

const people = [{name: 'Landy', friend: true, awesomeLevel: 10},{name: 'Jeremy', friend: true, awesomeLevel: 10},{name: 'Bart', friend: false, awesomeLevel: 3},{name: 'Stephanie', friend: false, awesomeLevel: 6}, {name: 'Serena', friend: true, awesomeLevel: 8},{name: 'George', friend: true, awesomeLevel: 7}]
// Using the people array, let's filter out everyone that isn't our friend to a new array called 'enemies'. Use .filter


// Using the people array, let's get a total of the awesomeLevel from all the people. Call the new array 'totallyAwesome'. Use .reduce

  // CODE HERE
  let enemies = people.filter((element)=>{
    return element.friend !== true;
  });

  let totallyAwesome = people.reduce((tot, curr) => 
    tot + curr.awesomeLevel, 0
  );
  
  //  .REDUCE ONLY WORKS WITH IMPLICIT RETURNS
  