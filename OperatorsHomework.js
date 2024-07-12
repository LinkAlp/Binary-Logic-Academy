//  Arithmetic Operators
// +, -, *, /, %(modulus) will give you the remainder of two values, ++, -- //  Defined as number operators

let a = 5;
let b = 5;

let sum = a+b
console.log(sum)

let sub = a-b;
console.log(sub)

let div = a/b
console.log(div)

let mult = a*b
console.log(mult)

let c = 7
let d = 8
let e = 10
let f = 2

console.log(d % c) //  should be 1
console.log(e % d) //  should be 2
console.log(e % f) // should be 0

//  ++, --

let g = 10;

g++;

console.log(g) // should be 11

g--;

console.log(g) // should be 10

let i = 20

i++; // should be 21
i++; // should be 22
i++; // should be 23
i--; // should be 22
console.log(i)

console.log(i + g) // should be 32

i++; // should be 23

let h = i + g +10 
console.log(h) //  should be 43

let j = ++h + ++i // 68
console.log(j)

// Assignment Operators
// = means assignment, +=, -=, /=, %=, *=

let k = 10;
k += 5
console.log(k) // should be 15

k -=5;
console.log(k) // should be 10

k /= 2
console.log(k) // should be 5

k *= 5
console.log(k) // should be 25

k %= 3 
console.log(k) // should be 1

let l = 33;

k += l;
console.log(k) // should be 

// Comparison Operators
// ==, ===,!= means not equal, !===, >,<, >=, <=

let m = 15
let n = 22

console.log(m == 15) // should be true

console.log(m == n) // should be false

console.log("--------------") // should be the quote

console.log(10 == "10") // should be a true 

console.log(10 === "10") // should be a false

console.log(10 !== "10") // should be true

console.log(n !== 22) // should be false

console.log(10 !=="10") // should be true
console.log(10 != "10") // should be false

console.log(10 < 10) // should be false
console.log(10 <= 10) // should be true

console.log(10 > 10) // should be false
console.log(10 >= 10) // should be true

// Logical Operators
// && AND, || OR, ! NOT

console.log((10 < 25) && (25 == 10)) // should be false

console.log((true) && (15 != "15")) // should be a false

console.log(true || false) // true

// ***************************************
console.log(!true) // false
console.log(!false) // true
// **************************************
console.log(!(10 < 20)) //false


//                                FALSE
//                   true                             false
//   ----------------------------------------------false----------false------
//             true       or   true        and      true           true
console.log((("b" == "b") || ("b" == "b")) &&   !(("c" !== "d") || ("d" != "f")))

console.log((("a" ==="a") || ("b" == "b")) && !(("c" !=="d") || ("d"!="e")))



console.log(!(5 != "5")) // false
console.log("c" !== "d") // true

//****************************************************QUESTION*************

console.log((("b" == "b") || ("b" == "b")) &&  !(("c" !== "d") || (5 != "5")))

console.log(!("c" !== "d") || (5 != 5))

console.log(5 != "5")

console.log((("a" ==="a") || ("b" =="b")) && !(("c" !=="d") || (5!=5)))


console.log(!("c" !=="c"))
console.log((("a" ==="a") || ("b" =="b")) && (("c" !=="c") || ("d"!="e")))
console.log(!(5 != "5")) // false

//Ternary Operators

console.log(10 == 10 ? "true" : "false") // true

console.log(10 ==="10" ? "odd" : "even")

console.log(!(10 != "10")) // false
console.log(!(10 !== "10")) // true


console.log((("a" ==="a") || ("b" =="b")) && !(("c" !=="d") || ("d"!="e")))

//                                            !(true or false)
console.log((("a" ==="a") || ("b" =="b")) && !(("c" !=="c") || (5 != "5")))

console.log("c" !=="c")
console.log(5 != "5")
