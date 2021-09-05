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