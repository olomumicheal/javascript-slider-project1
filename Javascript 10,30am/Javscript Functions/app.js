//Functions with Argument
// function writeText(str){
//     document.getElementById("demo").innerHTML = str;
// }

// //Calling out our function
// writeText("Hello World");


//Functions with Argument and Parameters
// function addNumbers(num1, num2){
//     sum = num1 + num2;
//     document.getElementById("demo").innerHTML = sum;
// }

// addNumbers(5, 10);

//Functions with Event
// function addNumbers(num1, num2){
//     sum = num1 + num2;
//     document.getElementById("demo").innerHTML = sum;
// }


// function showDialog(){
//     alert("Hello World!");
// }



/*          ASSESSMENT
1. create a function hello() to print
"Welcome To Atlanta"

2. create a function of Bizmarrow() and call out,
"Bizmarrow a Technology Institute" using an onclick
event on a button element
*/

//Function using return statement
// function addNumbers(num1, num2){
//     var sum = num1 + num2;

//     return sum;
// }


// document.getElementById("demo").innerHTML =
//  addNumbers(2, 5);


//Function with Event
// function getAge(age) {
//     var fullName = "John Doe";

// document.getElementById("demo").innerHTML =
// fullName + " is " + age + " years";
// }

// document.getElementById("demo1").innerHTML = fullName;


// var fruit = "apple";

// function myFunc(){
//     document.getElementById("demo").innerHTML =
//     "My Favourite fruit is " + fruit;
// }

function toMiles(kilometer){
    var miles = kilometer * 0.62137;

    return kilometer + " kilometer's " + "equals " + miles + " miles.";
}

alert(toMiles(3));
document.getElementById("demo").innerHTML = toMiles(10);


/*          ASSESSMENT
use function to convert centimeter() to meter, 
use alert and document.write method to preview ur output
*/