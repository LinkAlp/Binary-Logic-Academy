for(leapYear = 1300; leapYear<=2024; leapYear = leapYear +1){

    if((leapYear % 4 === 0 && leapYear % 100 !== 0) || (leapYear % 400 === 0)){
    
        console.log(leapYear + " " + "This is a leap year")
    } else{
    
        console.log(leapYear + " " + "This is not a leap year")
    }
    
    }
let year = 1900
    console.log(year % 100 !==0)


//            (true        or     true) and not ! (  true, true       ) -->  (false || false)        
console.log((("a" ==="a") || ("b" =="b"))&& !(("z" !=="c") || ("d"!="f")))