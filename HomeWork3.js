//  Homework find leap years from 1900 to current year. // leap year must be divisible by 4 and end of century must be divisible by 400

for (let leapYear = 1900; leapYear <= 2024; leapYear = leapYear + 1) {

    if ((leapYear % 4 === 0)&&(leapYear !== 1900)) {
        console.log(leapYear + " " +"This is a leap year")

    }else if ((leapYear == 1900) && (1900 % 400 !== 0)){
        console.log(leapYear + " " +"This is not a leap year")
    }



        if ((leapYear == 2000) && (2000 % 400 == 0)) {

            console.log(leapYear + " " +"This is also a leap year")
        }
        else {

            console.log(leapYear + " " + "This is not a leap year")
        }

         }
       

