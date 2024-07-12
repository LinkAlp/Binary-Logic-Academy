//  Arithmetic Operators
// +, -, *, /, %(modulus) will give you the remainder of two values, ++, -- //  Defined as number operators

let a = 10;
let b = 25;
let c = 5;

let sum = a + b;
console.log(sum); // 35;

let sub = b - c;
console.log(sub) // 20;

let div = 10 / 5; 
console.log(div) // 2;

let mult = c * a;
console.log(mult) // 50

let mod = b % c // 0
console.log(mod)

a++
console.log(a) // 11
a--
console.log(a) // 10

//      11    26     4  = 41
let d = ++a + ++b + --c
console.log(d)

// Assignment Operators
// = means assignment, +=, -=, /=, %=, *=

let e = 23
e += 5
console.log(e) // 28

e -= 4
console.log(e) // 24

e *= 4
console.log(e) // 96

e /= 4
console.log(e) // 24


// Comparison Operators
// ==, ===,!= means not equal, !===, >,<, >=, <=

console.log(10 == 10) // true

let f = 15
let g = 20

console.log(f == g) // false

console.log(f == 15) // true

console.log(10 == "10") // true

console.log(10 === "10") // false

console.log(f != g) // true

console.log(f != 15) // false

console.log(10 !="10") // false

console.log(10 !== "10") // true

console.log(10 > 35) // false
console.log(10 <= 10) // true

console.log((25 > 35) && (22 < 56)) // false

console.log(("a" == "a") ||( 26 == 54)) // true

console.log(!true) // false
console.log(!false) // true

console.log(!(10 < 20)) // false

console.log(10 != "10") // false

console.log(!(10 != "10")) // true

//  ternary

console.log (10 > 20 ? "even" : "odd")  // odd






