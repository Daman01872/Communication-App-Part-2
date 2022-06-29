var logUser = JSON.parse(localStorage.getItem('LoggedInUsers')) ? JSON.parse(localStorage.getItem('LoggedInUsers')) : [];

function protectRouting(){
if(logUser.length===0)
{
    alert('Not LoggedIn User');
    window.location.href="welcome.html"
}
}
protectRouting();


showMessages();

var logUser = JSON.parse(localStorage.getItem('LoggedInUsers'));
//console.log(logUser);
var logoutBtn = document.getElementById('logoutBtn');
var sendChat = document.getElementById('send');
var msg = document.getElementById('chatinput');
var ul = document.querySelector('#list');

var fullName = logUser.fullName;
document.getElementById('userName').innerHTML=fullName;
//console.log(fullName)

// If user adds a msg then add it to the localStorage

sendChat.addEventListener('click', function (e) {
  e.preventDefault();
  var curr = new Date();

  var date = curr.getDate();
  var month = curr.getMonth() + 1;  //0-11
  var year = curr.getFullYear();

  var hour = curr.getHours();
  var min = curr.getMinutes();
  var sec = curr.getSeconds();

  var date = `[${date}-${month}-${year} ${hour}:${min}:${sec}]`;

  var chatsObj = JSON.parse(localStorage.getItem("chats")) ? JSON.parse(localStorage.getItem("chats")) : [];

  var myObj = {
    date: date,
    name: fullName,
    message: msg.value,
  };

  chatsObj.push(myObj);

  //storing the key chats to localstorage
  localStorage.setItem('chats', JSON.stringify(chatsObj));
  msg.value = '';
  showMessages();
});

// Function to display messages from localStorage

function showMessages() {

  var chatsObj = JSON.parse(localStorage.getItem("chats")) ? JSON.parse(localStorage.getItem("chats")) : [];

  var html = '';
  chatsObj.forEach(function (element) {
    html += `<li>${element.date} ${element.name} : ${element.message}</li>`;
  });

  var chatsMsg = document.getElementById('list');

  if (chatsObj.length != 0) {
    chatsMsg.innerHTML = html;
  }
  else {
    chatsMsg.innerHTML = ``;
  }
}


function refresh() {
  document.getElementById('chat2').innerHTML = window.location.reload(true);
}


logoutBtn.addEventListener('click', function () {
  localStorage.removeItem('LoggedInUsers');
});




