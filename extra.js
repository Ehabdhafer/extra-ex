// Q1

// 1. ‐9*3                             =-27
// 2. “value is “ + 50                 =value is 50
// 3. 17 % 5                           =2
// 4. 5 % 17                           =5
// 5. 5/10                             =0.5
// 6. (4 == 4)                         =true
// 7. (4 != 5)                         =true
// 8. (7 <= 8)                         =true
// 9. Math.ceil(x) ‐ Math.floor(x)     =1

// ---------------------------------------------------

// Q2
// var number = prompt("type No");
// alert(number);

// ---------------------------------------------------

// Q3
// var no1 = prompt("No1");
// var no2 = prompt("No2");
// if (no1 > no2) {
//   console.log(no1);
//   console.log(no2);
// } else if (no1 < no2) {
//   console.log(no2);
//   console.log(no1);
// } else {
//   console.log("it is equal");
// }

// ---------------------------------------------------

// Q4
// var no1 = prompt("No1");
// var no2 = prompt("No2");
// if (no1 > no2) {
//   console.log(no1);
// } else if (no2 > no1) {
//   console.log(no2);
// } else {
//   console.log("it is equal");
// }

// ---------------------------------------------------

// Q5
// var no1 = prompt("No1");
// var no2 = prompt("No2");
// console.log(no1 + no2);
// It shows no1 near no2, not sum no1+no2

// ---------------------------------------------------

// Q6
// var num = prompt("choose number from 1 to 9");
// var num = 5;
// switch (num) {
//   case 1:
//     x = "ONE";
//     break;
//   case 2:
//     x = "TWO";
//     break;
//   case 3:
//     x = "THREE";
//     break;
//   case 4:
//     x = "FOUR";
//     break;
//   case 5:
//     x = "FIVE";
//     break;
//   case 6:
//     x = "SIX";
//     break;
//   case 7:
//     x = "SEVEN";
//     break;
//   case 8:
//     x = "EIGHT";
//     break;
//   case 9:
//     x = "NINE";
//     break;
//   default:
//     x = "PLEASE TRY AGAIN";
// }
// document.write(x);

// ---------------------------------------------------

// Q7
// for (let i = 0; i <= 5; i++) {
//   alert(i);
// }

// ---------------------------------------------------

// Q8
// let i = 0;
// let y = "";
// while (i <= 5) {
//   y += i + " ";
//   i++;
// }
// alert(y);

// ---------------------------------------------------

// Q9
// for (i = 0; i <= 20; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }

// ---------------------------------------------------

// Q10
// let number;
// number = prompt("write a number in the range 0 to 100");
// while (number > 100) {
//   alert("number should lower than 100");
//   number = prompt("write a number in the range 0 to 100");
// }

// ---------------------------------------------------

// Q11
// let number = prompt("write a number in the range 0 to 100");
// while (number > 100) {
//   alert("number should lower than 100");
//   number = prompt("write a number in the range 0 to 100");
// }
// if (isNaN(number)) {
//   console.log("Invalid input. Please enter a number.");
// }
// console.log(number);

// ---------------------------------------------------

// Q12
// let num1 = prompt("integer numbers");
// let num2 = parseInt(num1);
// let num3 = 0;
// for (i = 0; i <= num2; i++) {
//   num3 += i;
// }
// console.log(num3);

// ---------------------------------------------------

// Q13
// let num1 = parseInt(prompt("integer numbers"));
// let num2 = 0;
// for (i = 0; i <= num1; i++) {
//   num2 += i;
// }
// let avg = num2 / (num1 + 1);
// console.log(avg);
