// Sum All Numbers in a Range


function sumAll(arr) {
    let higherValue = arr[1] > arr[0] ? arr[1] : arr[0]
    let lowerValue = arr[1] < arr[0] ? arr[1] : arr[0]
    let counter = 0 
    for (let i = lowerValue ; i <= higherValue ; i++){
      counter += i 
    }
    return counter
  }
  
  sumAll([1, 4]);


  //Find the Difference between two arrays 

  function diffArray(arr1, arr2) {
    var newArr = [];
    let inArr1Only = arr1.filter(element =>{return arr2.includes(element) ? false : true})
    let inArr2Only = arr2.filter(element =>{return arr1.includes(element) ? false : true})
    newArr = [...inArr1Only, ...inArr2Only]
    return (newArr);
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


  // Seek and Destroy 

  function destroyer(arr) {
    let targets = [...arguments];
    targets.shift()
    var newArr = arr
    for(let i = 0 ; i < targets.length ; i++ ){
      newArr = newArr.filter(element => (!(element == targets[i])))
    }
    return (newArr)
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

  //Wherefore art thou
  function whatIsInAName(collection, source) {
    // Only change code below this line
    let sourceProperties = Object.keys(source)
    let arr = collection.filter(obj => {
      return sourceProperties.every((key) => {
        return ( obj.hasOwnProperty(key) && source[key] == obj[key])})
        })
    // Only change code above this line
    return arr;
  
  }
  
  console.log("MOEW " + whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))


//Spinal Tap Case

  
  
  function spinalCase(str) {
    let regexCapSeparator = /([a-z])([A-Z])/g ;
    str = str.replace(regexCapSeparator, "$1 $2")
    let regex = /[a-z]+/gi
    return str.toLowerCase().match(regex).join("-")
  }

spinalCase('thisIsSpinalTap');

//Pig Latin

function translatePigLatin(str) {
  let vowels = /^[^aeiou]*/ig
  let first = str.match(vowels)
  if(first[0].length > 0) {
    return str.slice(first[0].length) + first[0] +  "ay"
  }else{
    return str + "way"
  }
  }

console.log(translatePigLatin("algorithm"));

// Search and Replace 

function myReplace(str, before, after) {
  if(before.charAt(0) == before.charAt(0).toUpperCase()){
    let firstChar = after.charAt(0).toUpperCase()
    after = firstChar + after.split("").slice(1).join("")
  }else{
    after = after.toLowerCase()
  }
  return str.replace(before, after)
  
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

// DNA pairing 

function pairElement(str) {
  let pairs = {
    "A" : "T",
    "T" : "A",
    "C" : "G",
    "G" : "C"
  }
  let soloPairs = str.split("")
  let paired = []
  soloPairs.forEach(
    strand => {
      let pair =  [strand, pairs[strand]]
      paired.push(pair)
    }
  )
  return paired;
}

pairElement("GCG");

//Missing letters


function fearNotLetter(str) {
  let letters = "abcdefghijklmnopqrstuvwxyz"
  letters.split("")
  let copyStr = str.split("")
  let first = copyStr.shift()
  let range = letters.slice(letters.indexOf(first))
  for (let i = 0 ; i < str.length ; i++ ){
    if (str[i] !== range[i]){
      return range[i]
    }
  } 
  return undefined;
}

console.log(fearNotLetter("abcdefghjklmno"));


//Sorted Union 

function uniteUnique(arr) {
  let lists = [...arguments]
  let newArr = []
  for (let x = 0 ; x < lists.length; x++ ){
    let filtered = lists[x].filter(element => (!newArr.includes(element)))
    newArr.push(...filtered)
  }
  return newArr
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Convert HTML entities 

function convertHTML(str) {
  let words = str.split(" ")
  words.forEach((word,index)=> {
    let letters = word.split("")
    letters.forEach((letter, index)=> {
      switch (letter){
        case '"':
          letters[index] = "&quot;";
          break;
        case '<':
          letters[index] = "&lt;"
          break;
        case ">":
          letters[index] = "&gt;"
          break;
        case "'":
          letters[index] = "&apos;"
          break;        
        case '&':
          letters[index] = "&amp;" 
          break;
      }
    }, letters)
  return words[index] = letters.join("")
  }, words)
  return words.join(" ");
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));


// Sum All Odd Fibonacci Numbers


function sumFibs(num) {
  let fibSequence = [0 , 1];
  for (let i = 2 ; i <= 50; i++){
    if (fibSequence[i-1] > num) {
      break;
    }
    fibSequence[i] = fibSequence[i-1 ] + fibSequence[i-2]
  };

  let closest = [...fibSequence].pop()
  let odds = fibSequence.slice(0, fibSequence.indexOf(closest))
  .filter(element => element%2 == 1)
  return odds.reduce( (sum, curr)=>{ return sum += curr}, 0)
   
}

console.log(sumFibs(75024));


// Sum all Primes 

function sumPrimes(num) {
  num = num + 1 
  let boolArray = new Array(num).fill(true)
  for(let i = 2 ; i <= Math.sqrt(num); i++ ){
    if ( boolArray[i]){
      let t = 0
      let j = Math.pow(i,2)
      while ( j <= num){
        j = Math.pow(i,2) + (t * i)
        if (j >= boolArray.length){
          break
        }
        boolArray[j] = false
        t++
      }
    }
  }
  let integerArray = [...Array(num).keys()]
  integerArray =  integerArray.filter((element, index)=>{
    return boolArray[index]
  })
  
  return integerArray.filter(element=> element>=2).reduce((sum,current)=>{return sum += current}, 0)
}

console.log(sumPrimes(10));


// Smallest Common Multiple

function smallestCommons(arr) {

  function range(min, max){
    let final = []
    for (let i = min; i <= max; i++){
      final.push(i)
    }
    return final
  }

  function gcd2(a,b){
    if(!b) return b===0 ? a : NaN;
    return gcd2(b,a%b)
  }

  function lcm2(a, b){
    return a*b /gcd2(a,b)
  }

  function lcm(array){
    var n = 1 
    for (var i = 0; i<array.length; i++ ){
      n = lcm2(array[i],n)
    }
    return n
  }

  let min = Math.min(arr[0],arr[1])
  let max = Math.max(arr[0],arr[1])
  let array = range(min, max)
  return lcm(array)
}


console.log(smallestCommons([1,5]));

//Drop It algorithm 

function dropElements(arr, func) {
  let previous = false
  let retArr = []
  for(let i = 0; i < arr.length; i++){ 
    let curr = func(arr[i])
    if(curr==false&&previous==false){
      previous = curr
      continue 
    }else{
      previous = curr
      retArr.push(arr[i])
    }
  }
  return retArr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))

//Steam Roller 

function steamrollArray(arr) {
  const naked = []
  function flattener(arr){
    if (Array.isArray(arr)){
      arr.forEach(element => flattener(element))
    }else{
      naked.push(arr)
    }
  }
  flattener(arr)
  return naked;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));


// From Binary to Alphabet 

function binaryAgent(str){
  return str.split(" ").map(element => String.fromCharCode(parseInt(element, 2))).join("")
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));


//Everything Be True 

function truthCheck(collection, pre) {
  for (let i = 0 ; i < collection.length; i++){
    if (collection[i][pre]) continue 
    else return false
  }
  return true ;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


//Arguments Optional 

function addTogether() {
  let arr = [...arguments]
  let current = 0
  if(arr.length == 2){
    if(Number.isInteger(arr[0]) && Number.isInteger(arr[1])){ return arr.reduce((sum, curr)=> sum += curr, 0)}
    else return undefined
  }else{
    if(Number.isInteger(arr[0])){
      current = arr[0]
      return function(b) {
        return addTogether(current, b)
      }
    }else{
      return undefined
    }
  }
}

addTogether(5)(7);

//Make A Person 

var Person = function(fullerName) {
  var fullName = fullerName
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = () => { return this.getFirstName() + " "+ this.getLastName();}
  this.getFirstName = () => {return fullName.split(" ")[0];}
  this.getLastName = () => {return fullName.split(" ")[1];}
  this.setFirstName = function(name){
    let prev = fullName.split(" ")
    prev.shift()
    prev.unshift(name)
    fullName = prev.join(" ")
  };
  this.setLastName = function(name){
    let prev = fullName.split(" ")
    prev.pop()
    prev.push(name)
    fullName = prev.join(" ")
  };
  this.setFullName = function(name) { 
   fullName = name
  };
  
  
  };


var bob = new Person('Bob Ross')
console.log(bob.getFullName())