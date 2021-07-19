// Only change code below this line
function countdown(n){
  if (n < 1){
    return []
  }else{
    var counter;
    counter = countdown(n-1);
    counter.unshift(n)
  }
  return counter
}
// Only change code above this line
countdown(10)