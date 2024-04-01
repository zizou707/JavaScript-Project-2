// String Manipulation Functions:
//Reverse a String:

/*                                              
let original = "Hello World";
let reversed = "";
for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}
console.log(reversed);

//Count Characters:


var str = "Anything";

console.log(str.length);

//Capitalize Words:*/
/*
const mysentence="this is sentence of any words";
var words = mysentence.split(" ") ; 
var i=0 ;
function uppercase(){
  do { words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        i++ ;} while ( i < words.length)
   words.join(" ");
   console.log(words);      
}
uppercase()
words=words.join(" ");
console.log(words); */
 // Find Maximum and Minimum:
/*
function findMinMax() {
  let Arr = [52, 69, 21, 19, 43,-1,0,-22];

  let minValue = Math.min(...Arr);
  let maxValue = Math.max(...Arr);
   
  console.log("Minimum element is:" + minValue);
  console.log("Maximum Element is:" + maxValue);
}

findMinMax()*/

//Sum of Array:
/*
let arr = [5,-5,0,1,-1,96,-69,10,30];
var i=0 ;
function somme() {
  let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
}
 somme()*/


 //Filter Array:
 //let's find primes numbers in a given array

/*let arr= [0,1,7,6,-2,15,24,96,69,75,84,48,32,-5,-13];
 function findprimes()  {
    const primes= (n) => {
      if (n===0 || n===1) {
        return false;
      } else if (n===2){ return true ;}
      else { for(let i=2; i<n ; i++){
          if(n % i ===0){ return false}
      }}
      return true;
    }
 }
 const filteredarr =  arr.filter(i => arr[i]);
 
 findprimes()
 console.log(filteredarr);*/

 //Factorial: 
/*
 let n=5;
 function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }
  else if(n > 1){
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }
  else{
    return (n+" is negative")
  }  
}

answer = factorial(n)
console.log("Factorial of " + n + " : " + answer); */

//Prime Number Check:
/*
let n = 19;
function isprime(n) {
  if (n == 0 || n == 1) { return false}
  else if ( n >= 2) {  
    for (let i=2; i<n ; i++) {
        if ( n % i === 0) { return false}
    }
  }
 return true;
}

if (isprime(n) == false) { console.log(n + " is not prime")}
else console.log(n+" is prime") ;
*/
//Fibonacci Sequence:
/*
const arr= ["0","1" ] ;
const n = parseInt(prompt('Enter the number of terms: '));
let n1= 0 , n2= 1 , next ;


for (let i = 1; i <= n; i++) {
    
    next = n1 + n2;
    n1 = n2;
    n2 = next;
    arr.push(next);
}
console.log(arr);
*/
 