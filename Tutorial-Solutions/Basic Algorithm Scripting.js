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


  




































