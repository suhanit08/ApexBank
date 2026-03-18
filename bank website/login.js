document.getElementById("loginForm").addEventListener("submit", function(event){

event.preventDefault();

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let message = document.getElementById("loginMessage");

if(username === "admin" && password === "1234"){
    
    message.style.color = "green";
    message.textContent = "Login Successful!";

    setTimeout(function(){
        window.location.href = "main.html";
    },1000);

}else{

    message.style.color = "red";
    message.textContent = "Invalid Username or Password";

}

});