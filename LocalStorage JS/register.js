function registerData() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;
    var confirm = document.getElementById('confirm-pwd').value;

    //---------- Validation of FullName -----------
    if (name == "") {
        document.getElementById('fullName').innerHTML = " * Please fill the name field";
        return false;
    }
    else
    {
        document.getElementById('fullName').innerHTML = "";
    }


    if (name.length <= 2 || (name.length > 20)) {
        document.getElementById('fullName').innerHTML = " * Length is too short";
        return false;
    }
    else
    {
        document.getElementById('fullName').innerHTML = "";
    }

    if (!isNaN(name)) {
        document.getElementById('fullName').innerHTML = " * Only characters are allowed";
        return false;
    }
    else
    {
        document.getElementById('fullName').innerHTML = "";
    }

    //---------- Validation of Email -----------

    if (email == "") {
        document.getElementById('mail').innerHTML = " * Please enter your email";
        return false;
    }
    else
    {
        document.getElementById('mail').innerHTML = "";
    }

    // var m = /^[a-zA-Z0-9]+\@+[a-zA-Z]+\.+[a-zA-Z]{2,3}$/;


    //---------- Validation of Password & confirm password -----------

    if (pwd == "") {
        document.getElementById('password').innerHTML = " * Please enter password";
        return false;
    }
    else
    {
        document.getElementById('password').innerHTML = "";
    }
    

    //  var p = /^(?=.*[0-9])(?=.*[a-z]).{6}$/;
    if (pwd.length <= 3 || pwd.length >= 8) {
        document.getElementById('password').innerHTML = " * Length must be upto 8";
        return false;
    }
    else
    {
        document.getElementById('password').innerHTML = "";
    }


    if (confirm == "") {
        document.getElementById('confirmPass').innerHTML = " * Please fill this field";
        return false;
    }
    else
    {
        document.getElementById('confirmPass').innerHTML = "";
    }

    if (pwd != confirm) {
        document.getElementById('confirmPass').innerHTML = " * Password not matching";
        return false;
    }
    else
    {
        document.getElementById('confirmPass').innerHTML = "";
    }


    //------- for storing data to localstorage with array of object --------


    var users = JSON.parse(localStorage.getItem("registerUsers")) ? JSON.parse(localStorage.getItem("registerUsers")) : [];
    //console.log(users);

    var newUser = {
        "id": Number(new Date),
        "name": name,
        "email": email,
        "pwd": pwd,
        "confirm": confirm
    }

    var userExists = users.some((user) => user.email === newUser.email);
console.log(userExists);
    if (userExists) {
        window.alert("User is already exists");
        return false;
    }
    else {
        users.push(newUser);
    }

    var userString = JSON.stringify(users);
    localStorage.setItem('registerUsers', userString);


    // localStorage.setItem('name',name);
    // localStorage.setItem('email',email);
    // localStorage.setItem('pwd',pwd);
    // localStorage.setItem('confirm-pwd',confirm);


    // var retrievedObject = localStorage.getItem('record');
    // console.log('retrievedObject: ', JSON.parse(retrievedObject));

}