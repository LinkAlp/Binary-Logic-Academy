// If and Else example

let trafficLight = "";
if (trafficLight = "red") {

    console.log("You need to stop!!");


} else if (trafficLight = "green") {

    console.log("You can go now!!");


} else if (trafficLight = "yellow") {

    console.log("You need to slow down!!");
}

//  -----------------------------------------

let color = "yellow"
switch (color) {


    case "red":
        console.log("You need to stop!!");

        break;

    case "green":
        console.log("You can go!!");
        break;

    case "yellow":
        console.log("You need to slow down!!");
        break;
}

//  ------------------------------------------
let a = 4
if (a % 2 == 0) {

    console.log("This is a even number.");
} else {

    console.log("This a odd number.")
}

//---------------------------------------------

for (b = 5; b <= 100; b = b + 5) {

    if (b % 2 == 0) {

        console.log(b + " " + "This is a even number!!")
    } else {

        console.log(b + " " + "This is a odd number!!")

    }
}

// ---------------------------------------------

let c = 0

while (c <= 200) {

    c = c + 2

    console.log(c)

}

// --------------------------------------------
let d = 0
do{

    d = d + 5
    console.log(d)

}

while(d<=50)

// -------------------------------------------

function sumOfVariables(e, f){

sum = e + f;

return sum

}

let g = sumOfVariables(7,9)
console.log(g)

// ------------------------------------------

function increment(){
for(let h = 333; h >= 300; h = h - 3)
    if (h % 3 == 0){

        console.log(h + " " + "This is a odd number!!")

}
}
increment()


// ------------------------------------------

let i = 10
let j = 15

let k = i + j
console.log(k)

let l = i - j
console.log(l)

let m = i * j
console.log(m)

let n = i / j
console.log(n)

let o = j % i
console.log(o)

o += 5
console.log(o)
o -= 5
console.log(o)

o *= 5
console.log(o)

o /= 5
console.log(o)

//--------------------------Comparison Operators-------------------

let p = 10
console.log(p == 26) // should be false
console.log(p === "26") //  should be false

console.log(p == "10")  // should be true

console.log(10 != "10") // should be false
console.log("10" !== "10") // should be false


//             false         true      and   
console.log((10 != "10") || (10 == 10) && (!("q"!= "q") || ("t" != "t"))) // should be true

//----------------------------------------------------------------





