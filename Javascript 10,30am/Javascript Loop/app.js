//Using for loop
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for(let i = 0; i < cars.length; i++){
//     text += cars[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;


// let text = "";

// for(let i = 0; i<10; i++){
//     text += "The number is " + i + "<br>";
// }

//document.getElementById("demo").innerHTML = text;

/*From the example above, you can read:

Expression 1, sets a variable before the loop starts (let i = 0).

Expression 2 defines the condition for the loop to run (i must be less than 10).

Expression 3 increses a value (i++) each time the code block in the loop has been executed.
*/

//The For In Loop
//The javascript for in statement loops through the properties of an Object:
// Syntax
// for(key in object){
//     //code block to be executed
// }

// const Person = {
//     fname: "John",
//     lname: "Doe",
//     age: 25
// };

// let txt = "";
// for(let x in Person){
//     txt += Person[x] + " ";
// }

//document.getElementById("demo").innerHTML = txt;

/* The for in loop iterates over a person object. Each iteration returns a key(x) 
The key is used to access the value of the key
The value of the key is person[x]
*/

//The While loop
/*The while loop loops through a block of code as long as a specified condition is true.

Syntax
while(condition){
    //code block to be executed
}
*/

let text = "";
let i = 0;
while(i < 10){
    text += "<br> The number is " + i; i++; 
}

document.getElementById("demo").innerHTML = text;


/* ASSESMENT
1. Use conditional statement of else to print out an output implemented with an eventlistener of onclick, output is "Registeration unsuccessful". You can declare a suitable condition of ur choice

2. declare a JSON property of Cars abnd convert it to an object to print out a specific key value of the object

3. create two different arrays and merge them together to become a single array

4. using a for in loop, loop through an object of not less than 5 key values pair

5. validate a form to store data on the web seever

6. concatenate the string, "Bizmarrow Technology is ", with an integer value of 10 and a string of "years"

7. If i happened to be 18years ols, i my qualify to vote for the just concluded 2023 election, if yes, declare a conditional statement to prove your chpoice of output

8. What do you understand by AJAX, use a "GET" method to implement an example of how AJAX work

9. With vivid example, show how logical statement works, using logical AND, OR and NOT
*/