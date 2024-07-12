function isLeapYear(year){

    return (year % 4 === 0 && year % 100 !==0 || (year % 400 ===0)); // 1900 cannot equal zero but it does which makes it false and the left  side false
}

console.log(isLeapYear(1900));


