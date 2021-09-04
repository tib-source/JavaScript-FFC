// convert celsiuis to fahrenheit 

function celToFahren(celsiuis){
    let fahrenheit;
    fahrenheit = (9/5 * celsiuis) + 32
}

// reverse a string 

function stringReverser(str){
    let reversed = []
    let strArray = str.split("");
    strArray.forEach((letter) => {
        reversed.unshift(letter)
    })
    return reversed;
}

// factorialize a number - using recurssion 

function factorialize(num){
    if (num == 0){
        return 1
    }else{
        return num * factorialize(num - 1)
    }
}

// find the longest word in a string 

function longestWord(sentence){
    let counter = 0
    sentence.split(" ").forEach((word)=> {
        if (word.length > counter){
            counter = word.length 
        }
    })
    return counter

}

/// return largest number in array 

function largestNumber(arr){
    let arrayForLarge = []
    for(let i = 0; i < arr.length; i++){
        arrayForLarge.push(Math.max(...arr[i]))
    }
    return arrayForLarge;
}

// Confirm the ending 
function confirmEnding(str, ending){
    let rePattern = new RegExp( ending + "$")
    return rePattern.test(str)
}


//Repeat a String 
function repeatStringNumTimes(str, num){
    let stringRepeated = [ ]
    for (let i = 0; i < num; i++){
        stringRepeated.push(str)
    }
    return stringRepeated.join("")
}


// Truncate a String

function truncateString(str, num){
    if(str.length > num){
      let trunc = str.slice(0, num);
      trunc+= "..."
      return trunc
    }else{
      return str
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Finders Keepers 

function findElement(arr, func) {
    let newArr = arr.map(func)
    for(let i=0; i<arr.length;i++){
      if (newArr[i]== true){
        return arr[i]
        }
      }
    return undefined
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);


  // Boo who

  function booWho(bool) {
    if (bool===true|bool===false){
      return true
    }
    return false
  }
  
  booWho(null);


// Title Case a sentence 

function titleCase(str) {
    let strings = str.split(" ")
    strings = strings.map(str =>{
       return str.charAt(0).toUpperCase() + str.slice(1, str.length).toLowerCase() 
       }).join(" ")
    return (strings)
  
  }
  
  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")


// splice and slice 

function frankenSplice(arr1, arr2, n){
    let spliced = [...arr2]
    spliced.splice(n, 0, ...arr1)
    return spliced
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);


// Falsy Bouncer 

function bouncer(arr){
    let falsy = [false, null, 0, '', undefined, NaN]
    let filteredArr  = arr.filter( item => {return falsy.includes(item)? false: true})
    return filteredArr
  }
  
  bouncer([7, "ate", "", false, 9]);

//Where do I Belong - sorting algoritm 

function getIndexToIns(arr, num) {
    let toSort = [...arr, num]
    toSort.sort((a,b)=> a-b)
    let index = toSort.indexOf(num)
    if(index > 0){
      return index
    }else{
      return 0
    }
  }
  
  getIndexToIns([3, 10, 5], 3);

// Mutations - Return true if the string in the first element of the array
// contains all of the letters of the string in the second element of the array.



function mutation(arr) {
    let mainString = arr[0].toLowerCase().split("")
    let test = arr[1].toLowerCase().split("")
    for (let i = 0 ; i < test.length; i++){
      if (mainString.includes(test[i]) == false){
        return false
      }
    }
    return true;
  }
  
  mutation(["hello", "hey"]);

// Chunky Monkey
`Write a function that splits an array (first argument) into groups
 the length of size (second argument) and returns them as a two-dimensional array.`

function chunkArrayInGroups(arr, size) {
    let originalList = [...arr]
    let groupedList = []
    for(let i = 0 ; i < Math.ceil(originalList.length/size) ; i++){
      let miniList = []
      while(miniList.length < size){
        if(arr.length == 0){break}
        miniList.push(arr.shift());
      }
      if (!miniList.length == 0){groupedList.push(miniList)}
    }
    return (groupedList);
  }
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)

`better solution for this problem` 

function chunkArrayInGroups(arr, size) {
    // Break it up.
    let newArr = [];
    let i = 0;
  
    while (i < arr.length) {
      newArr.push(arr.slice(i, i + size));
      i += size;
    }
    return newArr;
  }
  chunkArrayInGroups(["a", "b", "c", "d"], 2);




// Working with objects and prototypes

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for(let property in beagle){
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property)
  }else{
    prototypeProps.push(property)
  }
}

// Change the prototyep to a New Object

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4, 
  eat: function(){
    console.log("nom nom")
  }, 
  describe: function(){
    console.log("My name is " + this.name);
  },
};

// Overiding inherited methods 

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function(){return "Alas, this is a flightless bird."}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

// Learning the power of Mixins

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function(){return "Alas, this is a flightless bird."}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());


// Private and public variables
function Bird() {
  let weight = 15;
  this.getWeight = function(){
    return weight
  } 

}


//Immediatley Invoked function Expression (IIFE)

(function() {
  console.log("A cozy nest is ready");
})()

`its an anonymous function that is executed imediatley after being declared`



















