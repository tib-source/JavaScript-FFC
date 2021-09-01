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


