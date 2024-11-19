// Write a program that takes the user’s score and prints the corresponding grade based on the following rules:
// 90-100 = “A”
// 80-89 = “B”
// 70-79 = “C”
// 60-69 = “D”
// 0-59 = “F”
// Goal
// Use multiple if-else if statements.

// var score =+prompt('add number')

// if(score>=90 && score<=100){
//         alert('A')
// }else if(score>=80 && score<=89){
//     alert("B")
// }else if(score>=70 && score<=79){
//     alert("C")
// }else if(score>=60 && score<=69){
//     alert("D")
// }else if(score>=0){
//     alert("F")
// }
// ////////////////////////////////////////////////////////////////////////


// Write a program that takes a number as input and checks if it is even or odd:
// If the number is even, print “The number is even.”
// If the number is odd, print “The number is odd.”
// Use and learn modulo operator %

// var num =+prompt('ADD the number')
// if(num ==0){
//     alert('0 is mot even or odd')
// }else if(num%2 ==0){
//     alert('even')
// }else{
//     alert ('ODD')
// }

//////////////////////////////////////////////////////////////////////////////


// Month Check
// Write a program that takes the number of a month (1-12) and prints which season it belongs to:
// 12, 1, 2 -> “Winter”
// 3, 4, 5 -> “Spring”
// 6, 7, 8 -> “Summer”
// 9, 10, 11 -> “Autumn”

// var muntNumber =+prompt("write number")

// if(muntNumber ==12 || muntNumber ==1 || muntNumber ==2){
//     alert('“Winter”')
// }else if(muntNumber ==3 || muntNumber ==4 || muntNumber ==5){
//     alert('“Spring”')
// }else if(muntNumber ==6 || muntNumber ==7 || muntNumber ==8){
//     alert('“Summer”')
// }else if(muntNumber ==3 || muntNumber ==4 || muntNumber ==5){
//     alert('“Autumn”')
// }

//////////////////////////////////////////////////////////////////////////////

// Day Translation
// Create a program that uses a switch-case to translate a day of the week from English to Armenian. The user should input the name of the day in English, and the program should return the corresponding Armenian name.
// Input: “Monday”
// Output: “Երկուշաբթի”

// var weekDay =prompt('add in english')

// switch (weekDay ){
    
    
//     case 'monday' : weekDay;
//     alert("erkusahbti");
//     break;

   
//     case 'Tuesday' : weekDay;
//     alert("ereqshabti");
//     break;

//     case 'Wednesday' : weekDay;
//     alert("choreqshabti");
//     break;

//     case 'Thursday' : weekDay;
//     alert("hingshabti");
//     break;

//     case 'Friday' : weekDay;
//     alert("urbat");
//     break;

//     case 'Saturday' : weekDay;
//     alert("shabat");
//     break;

//     case 'Sunday' : weekDay;
//     alert("kiraki");
//     break;
//     default:
//         alert('wrong input!!!!!');
//         break;
    
// }
////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Calculator
// The program should ask for two numbers and an operation (addition, subtraction, multiplication, or division). Use switch-case
// Input: 5, 3, "+"Output: 8
// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
// var operation = prompt("Choose the operation (+, -, *, /):");



var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operation = prompt("Choose the operation (+, -, *, /)");


if( operation =="+"){
    alert(num1 +num2)
}else if(operation =="-"){
    alert(num1 -num2)
}else if(operation =="*"){
    alert(num1 *num2)
}else if(operation =="/" && num2 !=0){
    alert(num1 /num2)
}