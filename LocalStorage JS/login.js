function LoginData() {

    var logmail = document.getElementById('input1').value;
    var logpwd = document.getElementById('input2').value;

    //---------- Validation of Email -----------

    if (logmail == "") {
        document.getElementById('loginEmail').innerHTML = " * Please enter your email";
        return false;
    }
    else{
        document.getElementById('loginEmail').innerHTML = "";
    }


    //---------- Validation of Password -----------

    if (logpwd == "") {
        document.getElementById('loginPass').innerHTML = " * Please enter password";
        return false;
    }
    else{
        document.getElementById('loginPass').innerHTML = "";
    }


    //  var p = /^(?=.*[0-9])(?=.*[a-z]).{6}$/;
    if (logpwd.length <= 3 || logpwd.length >= 8) {
        document.getElementById('loginPass').innerHTML = " * Length must be upto 8";
        return false;
    }
    else{
        document.getElementById('loginPass').innerHTML = "";
    }


    // --------login, check whether username and password exist inside Localstorage or not--------

    var users = JSON.parse(localStorage.getItem("registerUsers")) ? JSON.parse(localStorage.getItem("registerUsers")) : [];
    // console.log(users);

    if (users.some((user) => user.email == logmail && user.pwd == logpwd)) {
        // console.log('Login successful');
        window.alert('Login successful')

        //     var currentUser = users.filter((user) => user.email == logmail) [0];

        //    (localStorage.setItem('fullName',currentUser.name));

        //    var loginName = (localStorage.getItem('fullName',currentUser.name));
    }
    else {
        //console.log('Not a registered user')
        window.alert('Not a registered user')
        return false;
    }

    //for setting login name to localstorage

    var userData = JSON.parse(localStorage.getItem("registerUsers"));

    var searchName = userData.findIndex((user) => user.email == logmail);
    var loginName = userData[searchName].name;
    var loginEmail = userData[searchName].email;

    //---- for storing loginUser data into LocalStorage-----
     localStorage.setItem("LoggedInUsers", JSON.stringify({
        "fullName": loginName,
        "email": loginEmail
    }));

    

}



