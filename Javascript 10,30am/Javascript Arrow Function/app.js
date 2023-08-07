// myFunc = () =>{
//     alert("Welcome To Bizmarrow");
// }

// myFunc = () => alert("Welcome To Bizmarrow")

// function myFunc(){
//     alert("Welcome To Bizmarrow")
// }

//Arrow Functions with Parameter
// myFunc = () => alert(10 * 10);

//Using this keyword in arrow function

// var btn = document.getElementById("btn");

// hide = () => {
//     this.style.display = "none";
// };

// btn.onclick = function(){
//     hide();
// };


// btn.onclick = function(){
//     hide = () => {
//     this.style.display = "none";
// };
// hide();
// };



/* Assessment
1. Use arrow function to call out a - b
2. use arrow function to call out "Hello World"
*/

let myfunction = (a, b) => (a * b);
document.getElementById("demo").innerHTML = myfunction(4, 4);