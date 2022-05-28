// ---------------------CHAPTER 9-10-------------------------

// task01
// var cityName = prompt("Enter your city name")
// if(cityName === "karachi" || cityName === "Karachi"){
//     alert("Welcome to the city of lights")
// }

// task02
// var gender = prompt("Enter your gender")
// if(gender === "male" || gender === "Male"){
//     alert("Good Morning Sir")
// }
// if(gender === "female" || gender === "Female"){
//     alert("Good Morning Ma'am")
// }

// task03
// var color = prompt("Enter color of road traffic signal")
// if(color === "Red" || color === "red"){
//     alert("Must Stop")
// }
// if(color === "yellow" || color === "Yellow"){
//     alert("ready to move")
// }
// if(color === "green" || color === "Green"){
//     alert("Move now")
// }

// task04
// var remainingFuel = prompt("Enter remaining fuel in liters")
// if(remainingFuel < 0.25){
//     alert("Please refill the fuel in your car")
// }

// task05 a
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }

// task05 b
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }

// task05 c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// task05 d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// task05 e
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// // task05 f
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// task06
// var totalMarks = +prompt("Enter total marks")
// var obtainMarks1 = +prompt("Enter obtained marks of Subject 1")
// var obtainMarks2 = +prompt("Enter obtained marks of Subject 2")
// var obtainMarks3 = +prompt("Enter obtained marks of Subject 3")

// var obtainedTotal = obtainMarks1 + obtainMarks2 +obtainMarks3
// var percentage = (obtainedTotal/totalMarks) * 100;

// var grade;
// var remarks;

// if(percentage >= 80){
//     grade = "A-one"
//     remarks = "Excelent"
// }

// if(percentage >= 70){
//     grade = "A"
//     remarks = "Good"
// }

// if(percentage >= 60){
//     grade = "B"
//     remarks = "You need to improve"
// }

// if(percentage < 60){
//     grade = "Fail"
//     remarks = "Sorry"
// }

// document.write("<h1> Marks Sheet </h1> <br><br>")
// document.write("Total marks: " +totalMarks + "<br>")
// document.write("Marks obtained: " +obtainedTotal + "<br>")
// document.write("Percentage: " +percentage + "%<br>")
// document.write("Grade: " +grade + "<br>")
// document.write("Remarks: " +remarks + "<br>")

// task07
// var secretNumber = 6
// var guessNumber = +prompt("Guess the secret number")

// if(secretNumber === guessNumber){
//     alert("Bingo! correct answer")
// }
// if(secretNumber + 1 === guessNumber  ){
//     alert("Close enough to correct answer")
// }

// task08
// var number = prompt("Enter a number to check whether it is divisible by 3 or not")

// if(number%3 === 0){
//     alert(number +" is divisible by 3")
// }
// if(number%3 === 1){
//     alert(number +" is not divisible by 3")
// }

// task09
// var number = prompt("Enter a number to check it is even or odd")
// if(number%2 === 0){
//     alert(number+ " is even")
// }
// if(number%2 === 1){
//     alert(number+ " is odd")
// }

// task10
// var temperature = +prompt("Enter Temperature")
// if(temperature > 40){
//     alert("It is too hot outside.")
// }
// if(temperature > 30){
//     alert("The weather today is normal.")
// }
// if(temperature > 20){
//     alert("Today's weather is cool.")
// }
// if(temperature > 10){
//     alert("OMG! Today’s weather is so Cool.")
// }

// task11
// var number1 = +prompt("Enter 1st number")
// var number2 = +prompt("Enter 2nd number")
// var operation = prompt("Enter operator to perform calculation")
// var result

// if(operation === "+"){
//     result = number1 + number2
//     alert(number1 + " + " + number2 + " = " + result)
// }
// if(operation === "-"){
//     result = number1 - number2
//     alert(number1 + " - " + number2 + " = " + result)
// }
// if(operation === "*"){
//     result = number1 * number2
//     alert(number1 + " x " + number2 + " = " + result)
// }
// if(operation === "/"){
//     result = number1 / number2
//     alert(number1 + " / " + number2 + " = " + result)
// }
// if(operation === "%"){
//     result = number1 % number2
//     alert(number1 + " % " + number2 + " = " + result)
// }

// ---------------------CHAPTER 12-13-------------------------

// task01
// var character = prompt("Enter character")
// var result = character.charCodeAt(0)

// if ((result >= 65 && result <= 90) || (character >= 65 && character <= 90)) {
//   alert("Given input is uppercase letter");
// } else if ((result >= 97 && result <= 122) || (character >= 97 && character <= 122)) {
//   alert("Given input is lowercase letter");
// } else if ((result >= 48 && result <= 57) || (character >= 48 && character <= 57)) {
//   alert("Given input is number");
// } else {
//   alert("Given input in Symbol");
// }


// task02
// var num1 = prompt("Enter 1st number")
// var num2 = prompt("Enter 2nd number")

// if(num1 > num2){
//     console.log(num1 + " is larger than " + num2)
// }
// else if(num1 < num2){
//     console.log(num1 + " is smaller than " + num2)
// }
// else if(num1 === num2){
//     console.log(num1 + " is equal to " + num2)
// }

// task03
// var number = prompt("Enter any number");

// if (number >= 1) {
//   console.log("Number is positive");
// } else if (number < 0) {
//   console.log("Number is negative");
// } else {
//   console.log("Number is zero");
// }

// task04
// var char = prompt("Enter a character")

// if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//     console.log(true)
// }else{
//     console.log(false)
// }

// task05
// var password = "hamzahabib12345"
// var userPassword = prompt("Enter your password")

// if(userPassword === ""){
//     alert("Please enter your password")
// }else if(userPassword === password){
//     alert("Correct! The password you entered matches the original password.")
// }else{
//     alert("Incorrect password")
// }

// task06
// var greetings
// var hour = 13
// if(hour < 18){
//     greetings = "Good day"
// }else{
//     greetings = "Good Evening"
// }

// task07
var time = prompt("Enter time")

if(time >= 0000 && time < 1200){
    alert("Good Morning")
}else if(time >= 1200 && time <1700){
    alert("Good Afternoon")
}else if (time >= 1700 && time < 2100){
    alert("Good Evening")
}else if (time >= 2100 && time <=2359){
    alert("Good night")
}