//global scope
var a = 1; // global
let b = 2; //script
const c = 3; //script
var aa ="closuer" //global

//block at global
if (true) {
    var a = 100; // global -> will override the above a
    let b = 2; //block
    const c = 3; //block
}

//functional scope
function abc(num1, num2) {
    var a = 1;   //local
    let b = 2;   //local
    const c = 3; //local
    console.log(num1 + num2); //num1 and num2 also in local
}
abc(10,20)
//block within a funciton
function abcd(num1, num2) {
  if (true) {
    var a = 1; //local of function
    let b = 2; //block
    const c = 3; //block
    console.log(num1 + num2); // num1 and num2 also in local of the function
  }
  //console.log(num1 + num2);
}
abcd(10, 20);

//closure
function close() {
    var a = "closure";
    let b = "closure";
    const c = "closure"; 
    return function () {
        console.log(a + b + c + aa); //aa from global scope
    };
}
let col = close()
col()
/* 
This returned function will have the value of a,b,c from the "close fucntion" 
within closure scope.Closure scope is formed within the local 
scope variable (which the return fuction uses) of the parent function,
 other variables which are not used will not form closure.
*/




//closure with nested structure
function grandparent(num1 , num2) {
  var a = "closure";
  let b = "closure";
  const c = "closure";
  function parent() {
        var e = "closure";
        var f = "closure";
      return function child() {
        var g = "closure";
        var h = "closure";
        console.log(a + b + c + aa + e + f + num1 + num2); //aa from global scope
      }
  }
    a="closure1" // refrence proof... changing the value of var a = "closure"
    return parent
}

let garp = grandparent("Closrue", "closure");
let dragon = garp();
dragon();
/*
Parent will form the closure with grandparent as the variables a,b,c (of Grandparent) are used 
by Parent fucntion and the Child funtion of Parent. Child will form closure with with both 
Parent and Grandparent for the variables used by Child,
Also script and global scope is always present via "Scope Chaining".
*/


//Closure with a Block
function closureBlock() {
  if(true)
  {
    var a = "closure"; // local memory
    let b = "closure"; // block  - > will  be destroyed once block finishes
    const c = "closure"; //block  - > will  be destroyed once block finishes
  }
  return function () {
    console.log(a + b + c + aa); //aa from global scope
  };
}
let colBlk = closureBlock();
colBlk();/*
This function will only make a closure with  the var a, As it will move to the local scope of
parent. let b and const c were blocke scoped and were destroyed once the block stop executing.
*/