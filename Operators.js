// Operators//

//  Arithmetic Operators
// +, -, *, /, %(modulus) will give you the remainder of two values, ++, -- //  Defined as number operators
// Assignment Operators
// = means assignment, +=, -=, /=, %=, **=
// Comparison Operators
// ==, ===,!= means not equal, !===, >,<, >=, <=
// Logical Operators
// && AND, || OR, ! NOT
//Ternary Operators
// ?

//  Arithmetic Operators
// +, -, *, /, %(modulus) will give you the remainder of two values, ++, -- //  Defined as number operators

let a = 5
let b = 5

let sum = a + b
console.log(sum)
let sub = a - b
console.log(sub)
let mult = a * b
console.log(mult)
let div = a / b
console.log(div)
let c = 2
let d = 20
let e = 25
let f = 31;
console.log(d % c);
console.log(e % c);
console.log(f % c);

//  ++, __

let h = 10;
h++;// h =h+1
console.log(h); // 11
h--;// h = h-1
console.log(h); //10
h--;
h--;
console.log(h); //8

let i = 20;
i++; //21
i++; //22
h++; //9
console.log(i + h) // 22+9 =31
// 22+9+10 = 41
let j = i++ + h++ + 10;
console.log(j)
//23+1 + 10 +1 +10 = 45
let k = ++i + ++h + 10;
console.log(k)



// -----------------------------------
// Assignment Operators
// = means assignment, +=, -=, /=, %=, **=
let l = 10;
l += 20
console.log(l)
l -= 5;
console.log(l)
l *= 5
console.log(l)
l /= 25
console.log(l)

l %= 2
console.log(l)

l += 2;
console.log(l)

let m = 5;
l += m;
console.log(l)

// Comparison Operators
// ==, ===,!= means not equal, !===, >,<, >=, <=


// Any comparison output will always be a boolean output (true or false)

let o = 10;

let n = 11;

console.log(n == o) // false
console.log(o == 10) // true
console.log(n == 15) //false
console.log("-------------------------------")
console.log(10 == "10") // true if vaule is the same it will consider equals.  Even if type is different
console.log(10 === "10") // false  // both value and type of value
console.log(o != n); // true
console.log(o != 15) // true
console.log(o != 10) // false
console.log(10 != "10"); //true

console.log(10 < 10) // false
console.log(10 <= 10)// true
console.log(10 >= 10)// true
console.log(10 > 10)// false

// Logical Operators
// && AND, || OR, ! NOT

//    true        false       false    false
// AND   door1-----> door2-----> door3---->output

//AND (&&)  true output is only if all conditions are true=>output=>otherwise false.

// condition 1            condition 2            => output
//  true                    false                   false
//  true                    true                    true
//  false                   false                   false
//  false                   true                   false

//Or ||        door1   true
//             door2   false         output is true
//             door3   false

// OR
// condition 1            condition 2            => output
//  true                    false                   true
//  true                    true                    true
//  false                   false                   false
//  false                   true                    true

// if Any of your condiitions is true => output is true=> only if all false then output is false

console.log((10 < 15) && (20 > 15)) // trure
console.log(true && (15 < 10)) // false
console.log((25 % 5 == 0) && 10 < 20) // true
console.log((5 % 2 == 0) && (9 % 3 == 0)) // false

console.log(true || false); //true
console.log((10 > 15) || (20 < 50)) // true
console.log(10 == "10" || 10 !== "10") // true
console.log((35 % 10 == 0)) // false

console.log(!true);  //false
console.log(!false); // true
console.log(!(10 < 20)) //false
console.log(!(10 != 10)) //true
//             true                 true         true               true    => output is true
console.log((("blue" == "blue") && (5 > 2)) || ((65 % 5 == 0) && (16 >= 16))) // true
//           true    false             true       =>  output is true
console.log(true && (6 * 2 >= 15) || (5 + 10 === 15)) // true
// false becasue both sides are not true due to and statement
//            (true        or     true) and not ! (  true, true       ) -->  (false || false)        
console.log((("a" ==="a") || ("b" =="b"))&& !(("c" !=="d") || ("d"!="e")))


//Ternary Operators
// ?

//          condition true case:    false case:
console.log( 10 == 10 ? "equal" : "not equal")
//            condition   true case:  fale case: 
console.log(10 % 2 == 0 ? "even": "odd")

