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