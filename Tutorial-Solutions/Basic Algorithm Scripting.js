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




























