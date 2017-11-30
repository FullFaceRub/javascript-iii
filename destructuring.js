// ========================
// DESTRUCTURING
// ========================

// Use object destructuring to save the property values from the object carDetails into new variables. 

var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}

var {color,make,model,year}=carDetails;// CODE HERE
// var color=red;

// ========================


// In the function below named greeting, it is receiving an object as a parameter. Use object destructuring to save the object properties to new variables. The property names are firstName, lastName, and title. Return the concatenated string.

function greeting( obj ) {
  var {firstName,lastName,title}=obj;// CODE HERE
  
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
}


// ========================


// Write a function called totalPopulation that will take in an object. That object will have 4 properties named utah, california, texas and arizona. The property values will be numbers. Use object destructuring to save the property values to new variables. Sum up the values and return the total number.



function totalPopulation(obj){
  var {utah,california,texas,arizona}=obj;
  return utah+california+texas+arizona;
}  // CODE HERE


// ========================


// Write a function called ingredients that will take in an object. This object will have 3 properties named carb, fat, and protein. The property values will be strings. Use object destructuring to save the property values to new variables. Push these new variables to an array and return the array. 

function ingredients(obj){
  var array = [];
  var {carb,fat,protein}=obj;
  array.push(carb,fat,protein);
  return array;
}  // CODE HERE


// ========================


// Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration. See the example below:

// function example( {one, two, three} ) {
//   return one + two + three
// }

// Write a function called largeNumbers that will take a destructured object as it's parameter. The object properties will be named first, second, and third and their values will be numbers. Find the smallest number of the three and return that number.

function largeNumbers({first,second,third}){
  var min = Infinity;
  if (first<min){
    min=first;
  }

  if (second<min){
    min=second;
  }

  if (third<min){
    min=third;
  }

  return min;

}

// var obj = {
//   first:1,
//   second:2,
//   third:3
// }
// largeNumbers(obj);
  // CODE HERE


// ========================


// Write a function called numberGroups that will take a destructured object as it's parameter. The object properties will be named a, b, and c and their values will be arrays of numbers. Find the longest array and return that array. 

function numberGroups({a,b,c}){
  var max = [];

  if (a.length>max.length){
    max=a;
  }

  if (b.length>max.length){
    max=b;
  }

  if (c.length>max.length){
    max=c;
  }
  return max;

}  // CODE HERE
