// Iterate Through All an Array's Items Using For Loops

```
We have defined a function, filteredArray, which takes arr, a nested array
, and elem as arguments, and returns a new array. elem represents an element
 that may or may not be present on one or more of the arrays nested within arr.
  Modify the function, using a for loop, to return a filtered version of the passed
   array such that any array nested within arr containing elem has been removed.
```

function filteredArray(arr,elem){
    let newArr = [];
    for (let i=0; i < arr.length; i++ ){
            if (arr[i].indexOf(elem)<0){
                newArr.push(arr[i]);
        };
    };
    return newArr
}



// Working With Objects 
// checking if they have a certain property - can be done using the "hasOwnProperty" method of the "in" keyword
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
      let names = ['Alan', 'Jeff', "Sarah", 'Ryan']
      for (let i =0 ; i < names.length; i++){
        if (!(names[i] in userObj)){
          return false
        }
      }
    return true
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));

// Iterate through the keys of an object with a for ...in Statement
function countOnline(usersObj) {
    // Only change code below this line
    var counter = 0;
    for (let user in usersObj){
        if (usersObj[user].online == true){
          counter++
        }
    }
    return counter
    // Only change code above this line
  }


