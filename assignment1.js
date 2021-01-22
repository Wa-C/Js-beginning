
// 1st Problem OK
// function kilometerToMeter(kilometer) {

//     var meter = kilometer * 1000;

//     if (kilometer <= -1) {
//         console.log("Invalid Input");
//         return 0;
//     }
//     else {
//         return meter;
//     }

// }

// var finalResult = kilometerToMeter(-5);
// console.log(finalResult);









//2nd problem OK


// function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop) {


//     const watchUnitPrice = 50;
//     const mobileUnitPrice = 100;
//     const laptopUnitPrice = 500;

//     var total = numberOfWatch * watchUnitPrice + numberOfMobile * mobileUnitPrice + numberOfLaptop * laptopUnitPrice;

//     if (numberOfWatch <= -1 || numberOfMobile <= -1 || numberOfLaptop <= -1) {
//         console.log("Invalid input");
//         return 0;
//     }
//     else {
//         return total;
//     }
// }
// var finalResult = budgetCalculator(5, 5, 10);
// console.log(finalResult);


// 3rd problem OK



// function hotelCost(days) {

//     if (days <= -1) {
//         console.log("Invalid input");
//         return 0;

//     }
//     else if (days <= 10) {
//         var cost = days * 100;

//     }
//     else if (days <= 20) {
//         var firstTenDays = 10 * 100;
//         var remainingDays = days - 10;
//         var secondTenDays = remainingDays * 80;
//         cost = firstTenDays + secondTenDays;
//     }
//     else {
//         var first10 = 10 * 100;
//         secondTenDays = 10 * 80;
//         remainingDays = days - 20;
//         var thirdPart = remainingDays * 50;
//         var cost = firstTenDays + secondTenDays + thirdPart;
//     }
//     return cost;
// }
// var count = hotelCost(13);

// console.log(count);





//problem 4 
// var str = ["wassi", "wassssi", "wasi", "wasssssssssi", "wasssssssssi"];
// var b = [];
// function megaFriend(str) {

//     var longestWord = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i].length >= longestWord) {
//             longestWord = str[i].length;
//         }
//     }
//     for (i = 0; i < str.length; i++) {
//         if (str[i].length == longestWord) {
//             b.push(str[i]);
//             //This Loop is for Multiple strings with same length (If there is any)
//         }
//     }
//     if (str.length == 0) {
//         console.log("Empty Array");
//         return 0; //If Empty Array is the input then it will be the return.
//     }
//     else {
//         return b;
//     }
// }

// console.log(megaFriend(str));