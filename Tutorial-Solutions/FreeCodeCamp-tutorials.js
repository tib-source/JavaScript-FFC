// Iterate Through All an Array's Items Using For Loops

```
We have defined a function, filteredArray, which takes arr, a nested array
, and elem as arguments, and returns a new array. elem represents an element
 that may or may not be present on one or more of the arrays nested within arr.
  Modify the function, using a for loop, to return a filtered version of the passed
   array such that any array nested within arr containing elem has been removed.
```

function filteredArray(arr,elem){
    let newArr = [];
    for (let i=0; i < arr.length; i++ ){
        for (let j = 0; j < arr[i].length; j++){
            if (arr[i].indexOf(elem)<0){
                newArr.push(arr[i]);
            };
        };
    };
    return newArr
}