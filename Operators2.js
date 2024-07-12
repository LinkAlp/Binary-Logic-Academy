// conditional statments (syntex)

// if else
// else if


// if else conditional statement below structure and example**************************

//if (condition){

// code

// } else {
// code

// }

// check which one is greater with two outputs based on value of greater********************* DECISION

let a = 30;
let b = 15;

if(a > b){

console.log("A is bigger than B");

} else{

console.log("B is bigger than A");

}

// Check a number is even number or odd number
// in order to check num1 should be divisible by 2 then its even or else its odd
let num1 = 135

if(num1 % 2 == 0){

    console.log("Say the number is even")
}
else{

    console.log("Say the number is odd")

}

//****************************************************************************/
//  EXAMPLE OF IF / ELSE
// check if given time is dinner time or not :  dinner time is 8
// positive lets go for dinner
// negative lets wait
// wait. ==> early
//late=>


let time = 6;

if (time == 8){

    console.log("Lets go to dinner");
} else if(time <8){

    console.log("Lets wait a bit");
} else if(time>8){

    console.log("Its too early");
}
//*********************************************************************

//  Traffic Light Example

/*  if color is red = stop
    if color is green = go
    if color is yellow = slow 
    if other colors = invalid output*/

let color = "black"

if (color == "red"){

    console.log("STOP!!")
} else if(color == "green"){

    console.log("GO!")
} else if(color == "yellow"){

console.log("Slow Down!!")

} else if((color !== "red") && (color !== "green") && (color !== "yellow")){

    console.log("INVALID")
}

//********************************************************* */

//  Switch
/*  Switch(expression){

case x:
    code:
    break;

    case 2;
    code

    default: 
    code
    break:

}

*/

switch(color){


    case "red":
    console.log("Stop");
    break;

    case "green":
    console.log("Go");
    break;

    case "yellow":
        console.log("Slow Down");
        break;
    
        default:
            console.log("Invalid Output")

    
}


//****************************** */

//  Looping Statements

let num2 =1;
console.log(num2)
num2++;
console.log(num2)
num2++;
console.log(num2)
num2++;
console.log(num2)
num2++;
console.log(num2)

/***************************************************** 
/* for loops
  while loops
  do while loops

*/

/*  for(initilization ; condition; increment / decrement){

code => n number of times
}

*/


//       start        / end  and when condition is true /  increse by 1

let num4 = 1

for(let loopcount=0; loopcount< 10 ; loopcount= num4++){
// code
num4++;
console.log(num4)
}

//  create numbers from 500 to 400

for(let num = 500; num > 399; num--){
    console.log(num);
}


// create a code 50 ----350
let num7=50
for(let loopcount = 50; loopcount<350; loopcount=num7++){

    console.log(num7);
}


//  Write a code for 5, 10, 15, 20...........450

//    start      end     increment
for(let i =5 ; i<= 450; i= i+5){
    console.log(i)
}

//  write a code 333, 330, 327 .......30
for(let j=333 ; j>=30; j=j-3){
    console.log(j)
}


// find the even numbers between 50 and 150;

for(let k = 50; k <= 150; k=k+2){

    console.log(k)
}


for(let m = 50; m<= 150; m=m+2){
if(m % 2 ==0){

    console.log(m + "even")
} else{

    console.log(m + "odd")
}
    
}

// while loop************************************

// while(condition){
// logic code
// increase or decrease


// 

// 1, 2,3,4,5,6,7,8,9


let z=1;
while(z<=10){

    console.log(z)
    z++
}

// Create numbers from 500 to 400

let q =500;
while(q>=400){
    console.log(q)
    q--
}
// Create a code 50 ----350

let s =50
while(s<=350){

    console.log(s)
    s++
}

//*************************************************HOMEWORK******************************
// Write a code for 5, 10, 15, 20...........450  // create a function of question 1
// Write a code 333, 330, 327 .......30          // create a function of question 2
// find the even numbers between 50 and 150;     // create a function of question 3



//  Do While loop only if condition is satisfied
 
let v =500;

do{
console.log(v)

//increasee and decrease
    v++
} while(v<=10);  //condition



//*******************************************Functions ************************

// function1 => adding two number and print
//       function name (inputs)
function addTwoNumbers( a, b){

//code
let sum = a+b;
console.log("The sum of "+ a +" "+b+" is " + sum)

}
addTwoNumbers(10,15);
addTwoNumbers(25, 100);

//function without inputs

function printHello(){

    console.log("Hello")
}

printHello();


//  Create a function to check given input is divisible by 5


function divisible(input){


console.log(input % 5 == 0)

}

divisible(18)

//************************************** 





//  return result must first create a variable to house the fuction value (created ask and then assigned the function to it)
function getMulTwoNumbers(num1, num2){

    let mul = num1 * num2;
    return mul;

}

let ask= getMulTwoNumbers(10,20)
console.log(ask)

function div(input2){

    if(input2 % 5 == 0) {

        console.log("This is divisible by 5")
    } else{

        console.log("This is not divisible by 5")
    }
}

div(7)