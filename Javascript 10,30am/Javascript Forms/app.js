// function getValue(){
//     var val = document.getElementById("firstName").value;
//     alert("The value is " + val);
// }

// function getValue(){
//     var val = document.getElementsByName("firstName")[0].value;
//     alert("The value is " + val);
// }

// function validateForm() {
//     var firstName = document.getElementsByName("firstName")[0].value;
//     if(firstName == ''){
//         alert('please enter a value on the text field!');
//         return false;
//     }
// }

// function validateForm() {
//     var userName = document.getElementsByName("userName")[0].value;
//     var length = userName.length;
//     if(length > 10){
//         alert("You cannot input more than 10 characters!");
//         return false;
//     }
// }

function validateForm() {
    var age = document.getElementsByName("age")[0].value;
    if(age < 18){
        alert("The age of the user is less than 18, form will not be submitted");
        return false;
    }
}


