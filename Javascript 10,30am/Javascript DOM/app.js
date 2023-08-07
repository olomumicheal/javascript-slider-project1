// //gets the value of the lang attributes of <html>
// alert(document.documentElement.getAttribute("lang"));

// //gets the content of <title> inside the <head>
// alert(document.head.firstElementChild.innerHTML);

// //Changes the background color of the <body>
// document.body.style.backgroundColor = "green";

//Selecting element by Class Name using DOM
//let's select elements with "big-green" class name
var element = document.getElementsByClassName("big-green");

//let's access each selected element
for(let i = 0; i < element.length; i++){
    //let's style each selected element
    element[i].style.fontSize = "20px";
    element[i].style.color = "green"; 
}

/*Assessment 
from the element content below, Select Elements By Tag Name to display a red color of h3 element.
<h3>Hello World</h3>
<p>Lorem Ipsum</p>
<h3>Welcome to Codeliber</h3>
<p>Lorem Ipsum dolor sit amet</P>
*/

