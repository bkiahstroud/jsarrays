// function that finds the highest number.
//
var a = [-10,-40,-2,-5,-670];

function highestNum(array) {
  var max = -100;
  array.forEach(function(element) {
    if (element > max) {
      max = element;
    }
  })
  console.log(max);
}
//
//function that finds the lowest number.
var b = [-10,-40,-2,-5,-670];

function lowestNum(array) {
  var max = -100;
  array.forEach(function(element) {
    if (element < max) {
      max = element;
    }
  })
  console.log(max);
}

//Function that finds the smallest number (closest to zero)

var c = [6000,40,1.5,-2,-0.5,-670];

function smallestNum(array) {
  var max = 100; // var max = array[0];
  array.forEach(function(element) {
    if (Math.abs(element) < Math.abs(max)) {
      max = element;
    }
  })
  console.log(max);
}


// sum function

var num = [1, 2, 3, 4];

function getSum(array){
  var sum = 0;
  array.forEach(function(element) {
    (sum += element);
})
return sum;
}

// mean function

var a = [1, 2, 4, -5, 3];

function getMean(array){
  var sum = 0;
  array.forEach(function(element) {
    (sum += element);
  })
  return (sum / a.length);
}

// get index of the highest value.

var d = [-1, -8, -16, -5];

function indexHighestNum(array){
  var value = -10;
  var i;
  array.forEach(function(element) {
    if (value < element) {
      value = element;
      i = d.lastIndexOf(element);
    }
  })
  return i;
}

//Family arrays - sorting
var siblings = ["John", "Ada", "Bob"];
var parents = ["Anna", "Greg"];

// sort alphabetically
siblings.sort();

// 1 easy way to sort reversed alphabetically
parents.sort();
parents.reverse();

// 2 harder way to sort reversed alphabetically
parents.sort(function(element1, element2) {
  return (element2>element1)*1 + (element2<element1)*-1;
});

// combine 2 arrays and save into a new one sorted alphabetically
var allNames = siblings.concat(parents);
allNames.sort();

// determine if a given name is amongst the names
function combinedArray() {
  var userName = prompt("Please enter a name", "Enter name here");
  var nameSearch = allNames.lastIndexOf(userName);
  if (nameSearch > 0) {
    alert("Your name is in the array")
  }
    else {
      alert("Your name is NOT in the array")
    }
}

// function that returns only the even elements of an array
// 1 way
var e = [1, -2, 4, 0, 7]
function evenElements() {
  var eNew = [];
  e.forEach(function(element) {
    if (element % 2 == 0) {
      eNew.push(element);
    }
  })
  console.log(eNew);
}

// function that returns only the even elements of an array
// 2 way
var e = [1, 0, 2, 4, 7]

function isEven(x){
  return (x % 2 == 0)
}

e.filter(isEven);


//a function that take an array and a function, and returns a new array with return value of the function on each of the elements of the array.

var b = [1, 2, 4];

function mapArray(array, fun) {
  var newArr = [];
  array.forEach(function(element) {
    newArr.push(fun(element));
  })
  return newArr;
}

function multiplyByTwo(x) {
  return x * 2;
}
