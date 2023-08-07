// var person = {
//    name: "John Doe",
//     age: 30,
//     showDetails: function() {
//         alert(this.name + " is " + this.age + " years old.");
//     }
// };


// //An Object in An Object, commonly known as nested object
// var fruits = {
//     mango: {
//         color: "yellow",
//         taste: "sweet"
//     },

//     apple: {
//         color: "red",
//         taste: "sweet"
//     }
// }

// document.write(fruits.mango.color);

//JSON Declaration, converting JSON to Object
// var text = `{
//     "firstName": "John",
//     "lastName": "Doe",
//     "age": 30,
//     "isMarried": true
// }`;

// var obj = JSON.parse(text); //To return an object

// document.getElementById("demo").innerHTML = obj.firstName + " " + obj.lastName + " is " + obj.age + " years old.";

// //Converting Javascript Object to JSON
// var text = {
//     "firstName": "John",
//     "lastName": "Doe",
//     "age": 30,
//     "isMarried": true
// };

// var num = JSON.stringify(text);
// document.getElementById("demo").innerHTML = num;



      var cities = ["Mumbai", "Abuja", "New York"];
      
      
      for(var i = 0; i < cities.length; i++) {
         html += "<p>" + cities[i] + "</p>";
      }
      
      console.log(cities)
   