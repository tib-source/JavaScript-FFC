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