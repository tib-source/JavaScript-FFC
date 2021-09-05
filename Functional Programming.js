// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (arr, bookName) {
  return arr.push(bookName);
  // Change code above this line
}

// Change code below this line
function remove (arr, bookName) {
  let bookList = [...arr]
  var book_index = arr.indexOf(bookName);
  if (book_index >= 0) {
    bookList.splice(book_index, 1);
    return bookList
    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);


// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];

  for (let i = 0 ; i < this.length ; i ++ ){
    if (callback(this[i])){
      newArray.push(this[i])
    }
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

// working with map, reduce and filter functions 

function getRating(watchList){
    // Only change code below this line
    let filteredList = watchList.filter((movie)=> movie.Director == "Christopher Nolan")
    let mappedList = filteredList.map((movie)=> {
      return {title: movie.Title, rating: movie.imdbRating}
    })
    let totalRating = mappedList.reduce((sum, movie )=> {
      return sum + parseFloat(movie.rating)
    }, 0)
        console.log(totalRating)
    let averageRating = totalRating/(mappedList.length)
    // Only change code above this line
    return averageRating;
  }
  console.log(getRating(watchList));

// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem


const squareList = arr => {
    // Only change code below this line
    return arr
    .filter(number => {
        if (Number.isInteger(number) && number > 0){
        return true
        }
        return false
    }).map(number => number ** 2 )


    // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);

// Alphabetic sorting algorithm 

function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr.sort((previous, current)=> {
      return previous === current ? 0 : previous > current ? 1 : -1 
    })
  
    // Only change code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


//Return a Sorted Array Without Changing the Original Array

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let meow = [...arr]
  meow.sort(
    (prev, current)=> {return prev == current ? 0 : prev > current ? 1 : -1 } )
  return (meow) 
  // Only change code above this line
}
nonMutatingSort(globalArray);