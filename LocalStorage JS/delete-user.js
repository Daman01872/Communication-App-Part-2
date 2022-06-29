var logUser = JSON.parse(localStorage.getItem('LoggedInUsers')) ? JSON.parse(localStorage.getItem('LoggedInUsers')) : [];

function protectRouting() {
    if (logUser.length === 0) {
        // alert('Not LoggedIn User');
        window.location.href = "welcome.html"
    }
}
protectRouting();

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
                    <p><a href="edit-user.html?id=${users[i].id} "><button id="editbtn">Edit</button></a> | <a href="delete-user.html?id=${users[i].id}"><button id="delbtn" >Delete</button></a></p>`}
                             
      document.getElementById('root').innerHTML=table;
     
     }
   }


        var key = window.location.search
        var getId = new URLSearchParams(key)
        var deleteId = getId.get('id')
        //console.log(deleteId)

        var users = JSON.parse(localStorage.getItem('registerUsers'))
         console.log(users);
        var index = users.findIndex(item => item.id == deleteId);
        var selectUser = users[index]
       // console.log(selectUser)


       let userdelete = () => 
         {
            users.splice(index, 1)
            localStorage.setItem('registerUsers', JSON.stringify(users));
           displayData();
            window.location.href = "users.html";
        }




 
