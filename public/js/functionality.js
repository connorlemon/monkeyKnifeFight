var errorMsg = document.getElementById('errorMessage');
var form = document.getElementsByTagName('form')[0];
var player1val = "more";
var player2val = "more";

//Function to print to console, no back end
//input type = email validation does not work with this function
// function printFormValues(form){
//     if(!form.elements.player1.value || !form.elements.player2.value){
//         errorMsg.textContent = "You must make a selection above";
//         return false;
//     } else if(form.elements.email2.value !== form.elements.email1.value){
//         errorMsg.textContent="Your email addresses do not match";
//         return false;
//     } else if(formelements.email2.value === form.elements.email1.value){
//         errorMsg.textContent="Success!";
//         errorMsg.style.color="green";
//         return false;
//     } else {
//         errorMsg.textContent = " ";
//     }

//     if(form.elements.player1.value !== "more"){
//         player1val = "less";
//     }
//     if(form.elements.player2.value !== "more"){
//         player2val = "less";
//     }
//     console.log("Lebron = " + player1val.toUpperCase());
//     console.log("Lillard = " + player2val.toUpperCase());
//     console.log(form.elements.email1.value);
// }

// JS for form submission to Back End
form.addEventListener('submit', function(event){
    if(!form.elements.player1.value || !form.elements.player2.value){
        errorMsg.textContent = "You must make a selection above";
        errorMsg.style.color="#900";
        event.preventDefault();
    } else if(form.elements.email2.value !== form.elements.email1.value){
        errorMsg.textContent="Your email addresses do not match";
        errorMsg.style.color="#900";
        event.preventDefault();
    } else if(form.elements.email2.value === form.elements.email1.value){
        errorMsg.textContent="Success!";
        errorMsg.style.color="green";
        event.preventDefault();
    } else {
        errorMsg.textContent = "Hidden";
        errorMsg.style.color="#E5E4E4";
    }

    if(form.elements.player1.value !== "more"){
        player1val = "less";
    }
    if(form.elements.player2.value !== "more"){
        player2val = "less";
    }
    console.log("Lebron = " + player1val.toUpperCase());
    console.log("Lillard = " + player2val.toUpperCase());
    console.log(form.elements.email1.value);
})