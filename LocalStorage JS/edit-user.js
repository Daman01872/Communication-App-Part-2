var logUser = JSON.parse(localStorage.getItem('LoggedInUsers')) ? JSON.parse(localStorage.getItem('LoggedInUsers')) : [];

function protectRouting() {
    if (logUser.length === 0) {
        alert('Not LoggedIn User');
        window.location.href = "welcome.html"
    }
}
protectRouting();

var key = window.location.search
var getId = new URLSearchParams(key)
var editUserId = getId.get('id')
console.log(editUserId)

var userdata = JSON.parse(localStorage.getItem('registerUsers'))
console.log(userdata)
var index = userdata.findIndex(item => item.id == editUserId);
var selectUser = userdata[index]
console.log(selectUser.name)
document.getElementById('name').value = selectUser.name;
document.getElementById('email').value = selectUser.email;

function onSave() {

    let saveName = document.getElementById('name').value;
    let saveEmail = document.getElementById('email').value;
    
    if (saveName === "" && saveEmail === "") {
        window.alert('Fullname feild should not be empty');
    }
    if (saveEmail === "") {
        window.alert('Email feild should not be empty');
    }
   
    if(saveName && saveEmail){
    selectUser.name = saveName;
    selectUser.email = saveEmail
    console.log(selectUser.name)
    localStorage.setItem('registerUsers', JSON.stringify(userdata))

}
}

