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
var num = 5;
switch (num) {
  case 1:
    x = "ONE";
    break;
  case 2:
    x = "TWO";
    break;
  case 3:
    x = "THREE";
    break;
  case 4:
    x = "FOUR";
    break;
  case 5:
    x = "FIVE";
    break;
  case 6:
    x = "SIX";
    break;
  case 7:
    x = "SEVEN";
    break;
  case 8:
    x = "EIGHT";
    break;
  case 9:
    x = "NINE";
    break;
  default:
    x = "PLEASE TRY AGAIN";
}
document.write(x);
