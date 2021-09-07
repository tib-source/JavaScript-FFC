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