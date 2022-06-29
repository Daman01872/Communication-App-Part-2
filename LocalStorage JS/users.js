 var logUser = JSON.parse(localStorage.getItem('LoggedInUsers')) ? JSON.parse(localStorage.getItem('LoggedInUsers')) : [];

if(logUser.length===0)
{
    alert('Not LoggedIn User');
    window.location.href="welcome.html"
}


// // ----- for managing user data -----
displayData();

function displayData()
{
     var users = JSON.parse(localStorage.getItem("registerUsers")) ? JSON.parse(localStorage.getItem("registerUsers")) : [];
     //console.log(users);
     if(users!=null)
     {
      var table = '';
      
      
      for (var i = 0; i < users.length; i++) {
         var name = users[i].name
         var email = users[i].email
         var userId= users[i].id
         console.log(name, email)
         console.log(userId);

                  table=table+`<tr>
                  <td class = "column">${users[i].name}</td> 
                  <td class = "column">${users[i].email}</td>
                  <td class = "tdBtn">
                    <p><a href="edit-user.html?id=${users[i].id} "><button id="editbtn">Edit</button></a> | <a href="delete-user.html?id=${users[i].id}"><button id="delbtn" onclick="deleteUserData()" >Delete</button></a></p>`}
                    
      document.getElementById('root').innerHTML=table;
     }
   }


 

 logoutBtn.addEventListener('click', function () {
   localStorage.removeItem('LoggedInUsers');
 });

// // let table = `<table class = "tableUsers">
// // <thead class = "theader">
// // <tr>
// // <th scope = "col" class = "column">Name</th>
// // <th scope = "col" class = "column">User Email Id</th>
// // <th scope = "col"></th>
// // </tr>
// // </thead>
// // <tbody>`
// // users.map(({fullName,email,id}) => {
// //     table=table+`<tr>
// //     <td class = "column">${fullName}</td> 
// //     <td class = "column">${email}</td>
// //     <td class = "tdBtn">
// //      <p><a href="edit-user.html?id=${id}"><button class="editbtn">Edit</button></a> | <a href="edit-user.html?id=${id}"><button class="editbtn">Edit</button></a></p>`
// // })