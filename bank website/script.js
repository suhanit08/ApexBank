document.getElementById("loginForm").addEventListener("submit", function(event){

event.preventDefault();

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let message = document.getElementById("loginMessage");

if(username === "admin" && password === "1234"){
    
    message.style.color = "green";
    message.textContent = "Login Successful!";

    setTimeout(function(){
        window.location.href = "login.html";
    },1000);

}else{

    message.style.color = "red";
    message.textContent = "Invalid Username or Password";

}

});


document.querySelector(".apply-btn").addEventListener("click", function(){
    let value = document.querySelector("select").value;

    if(value === "Savings Account"){
        localStorage.setItem("productType", "Savings");
    }
    else if(value === "Current Account"){
        localStorage.setItem("productType", "Current");
    }
    else if(value === "Credit Card"){
        localStorage.setItem("productType", "Card");
    }
    else{
        alert("Please select a product");
        return;
    }

    window.location.href = "open-account.html";
});

