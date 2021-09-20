`Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

`

function alphabetPosition(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    let ansArr = []
    text.split("").forEach((element)=> {
      element = element.toLowerCase()
      if (alphabet.includes(element)){
        ansArr.push(alphabet.indexOf(element)+1)
      }
    })
    return ansArr.join(" ");
  }

  
  alphabetPosition("The sunset sets at twelve o' clock.")


`
Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

Input
The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Output
Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

Examples
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND

  `

function songDecoder(song){
// ...
let regex = /(WUB)+/g
return (song.replace(regex, " ")).trim()
}

describe("Fixed tests", function(){
it("It should pass fixed tests", function(){
    Test.assertEquals(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
    Test.assertEquals(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
    Test.assertEquals(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");
});
});



// Playing with digits 

function digPow(n, p){
  // ...
  let counter = 0
  let nums = n.toString().split("").map(num=>{
    let curr = parseInt(num)
    curr = Math.pow(curr, (p + counter))
    counter += 1
    return curr
  }).reduce((sum,curr)=> sum += curr, 0)
  
  let div = parseInt(nums)/n
  
  return Number.isInteger(div) ? div : -1 
}

digPow(89, 1)


//
`
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
`
function rowSumOddNumbers(n) {
	// TODO
  let start = n * (n - 1) + 1
  let total = 0 
  for(let i = 0 ; i < n; i++){
    next = start + (2 *i)
    total += next
  }
  return total
}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });
});



`A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
  because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is,
  False if not. Ignore numbers and punctuation.
`

function isPangram(string){
  //...
  let regex = /[^a-z]*/ig;
  let letters = string.toLowerCase().replace(regex, "").split("")
  let obj = { }
  letters.forEach((elem)=> {
    obj[elem] = 1
  })
  return Object.keys(obj).length == 26 ? true : false   
  }


`Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
`
function findOdd(A) {
  //happy coding!
  let count = { }
  for (let i =0 ; i < A.length; i++){
    if (count.hasOwnProperty(A[i])) {
      count[A[i]] += 1
    }else{ count[A[i]] = 1 }                                      
  }
  console.log(count)
  for(let value in count){
    if (count[value] % 2 != 0) {return parseInt(value)}
  }

}
  A = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]
  
  findOdd(A) 
  
  // expects a 5


`Complete the function that accepts a string parameter,
and reverses each word in the string.
All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
`
function reverseWords(str) {
  // Go for it
  return str.split(" ").map(word=> {
    return word.split("").reverse().join("")
  }).join(" ")
}

`
This time we want to write calculations using functions and get the results.
Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
`
let nums = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  }
  
  
  function zero(f) { let num = nums["zero"]; if(f === undefined){return `${num}` }else{ return Math.floor(eval(`${num}${f}`))}}
  function one(f) { let num = nums["one"]; if(f === undefined){return `${num}` }else{ return Math.floor(eval(`${num}${f}`))}}
  function two(f) { let num = nums["two"]; if(f === undefined){return `${num}` }else{ return Math.floor(eval(`${num}${f}`))}}
  function three(f) { let num = nums["three"]; if(f === undefined){return `${num}` }else{ return Math.floor(eval(`${num}${f}`))}}
  function four(f) { let num = nums["four"]; if(f === undefined){return `${num}` }else{ return Math.floor(eval(`${num}${f}`))}}
  function five(f) { let num = nums["five"]; if(f === undefined){return `${num}` }else{ return Math.floor(eval(`${num}${f}`))}}
  function six(f) { let num = nums["six"]; if(f === undefined){return `${num}` }else{ return Math.floor(eval(`${num}${f}`))}}
  function seven(f) { let num = nums["seven"]; if(f === undefined){return `${num}` }else{ return Math.floor(eval(`${num}${f}`))}}
  function eight(f) { let num = nums["eight"]; if(f === undefined){return `${num}` }else{ return Math.floor(eval(`${num}${f}`))}}
  function nine(f) { let num = nums["nine"]; if(f === undefined){return `${num}` }else{ return Math.floor(eval(`${num}${f}`))}}
  
  function plus(n) { return ` + ${n}`}
  function minus(n) { return ` - ${n}`}
  function times(n) { return ` * ${n}`}
  function dividedBy(n) { return ` / ${n}`}


`Write a function that takes an array of numbers (integers for the tests)
 and a target number. It should find two different items in the array that
,when added together, give the target value. The indices of these items
should then be returned in a tuple like so: (index1, index2).
For the purposes of this kata, some tests may have multiple answers;
any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater,
and all of the items will be numbers; target will always be the sum of two
different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum [1, 2, 3] 4 === (0, 2)
`

function twoSum(numbers, target) {
  // ...
  let res = {}
  for (let i = 0 ; i < numbers.length; i++) {
    let curr = numbers[i]
    let other = target - curr
    if (res.hasOwnProperty(curr) && curr*2 == target){
      return [res[curr], i]  
    }else{
      res[curr] = i
      if (numbers.includes(other)){
        if(other !== curr){
        return [i, numbers.indexOf(other)]
        }
      }
    }
  }
}

`Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
`

var number=function(array){
  //your awesome code here
  return array.map((e,i)=>{
    return `${i+1}: ${e}`
  })
}




// ROTATE 13 


function mod(n, m) {
  return ((n % m) + m) % m;
}

function rot13(message){
  //your code here
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let ca = alphabet.toUpperCase().split("")
  let a = alphabet.split("")

  message = message.split("").map(letter=> {
    let regex = /[a-z]/i
    if (letter.match(regex)){
      if (letter === letter.toUpperCase()){
        return ca[(mod(ca.indexOf(letter)+13,26))]
      }else if(letter === letter.toLowerCase()){
        return a[(mod(a.indexOf(letter)+13,26))]
      }
    }else{
      return letter
    }
  })
  
  return message.join("")
  }


rot13("ve7z ")


/// RGB to HEX conversion 

function rgb(r, g, b){
  // complete this function 
  let hexcode = {
    10:"A",
    11:"B",
    12:"C",
    13:"D",
    14:"E",
    15:"F"
  }
  let colorList = [r,g,b].map(color=> {
    if (color>255){color = 255}
    if (color<0){color=0}
    let first = color/16
    let floored = Math.floor(first)
    let diff = first - floored
    let second = diff * 16
    let secondFloor = Math.floor(second)
    first = (first < 10) ? floored : hexcode[floored.toString()]
    second = (second < 10) ? secondFloor : hexcode[Math.floor(second).toString()]
    return `${first}${second}`
  })
  
  return colorList.join("")
}


rgb(173,255,47)


// 
`We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives`

function add(a, b) {
  let num1 = (a.split("").length > b.split("").length) ? a.split(""): b.split("")
  let num2 = (a.split("").length > b.split("").length) ? b.split(""): a.split("")
  let smaller = Array(num1.length-num2.length).fill("0").concat(num2)
  for(let i = num1.length -1 ; i >= 0; i--){
    let curr = parseInt(num1[i]) + parseInt(smaller[i]);
    if (curr >= 10){
      if(i==0){
        num1.shift()
        num1.unshift(curr.toString());
      }else{
        num1[i-1] = (parseInt(num1[i-1]) + 1).toString();
        num1[i] = curr.toString()[1];
      }
    }else{ num1[i] = curr.toString()}
  }
  return num1.join("");
}


add('63829983432984289347293874', '90938498237058927340892374089')

// returns "91002328220491911630239667963"
