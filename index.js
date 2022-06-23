
function fibonacciGenerator (n) {

var output = []; //introduce empty array 
 if (n === 1) {
   output = [0]; 
 } 
 else if (n === 2) {
   output = [0, 1];   //if else if checking length of array 
 }

  else {
    output = [0, 1];

     for (var i =2; i < n; i++){  //starts at 2 for items in array 
    output.push(output[output.length -2] + output[output.length - 1]);  // learned about array.length -2 and how to use it. 
    }
  }
return output; 
}
output = fibonacciGenerator(5);  //can input any number to increase the sequence 
console.log(output)              // generate the array 
  