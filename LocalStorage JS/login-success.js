var logUser = JSON.parse(localStorage.getItem('LoggedInUsers'));
//console.log(logUser)
 var email = logUser.email;
console.log(email);

document.getElementById("userEmail").innerHTML=email;

