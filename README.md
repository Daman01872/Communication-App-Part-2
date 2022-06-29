# Communication-App-Part-2
In this part 2, js with localStorage is applied for functioning


Project Part 2 - Communication Application (Javascript and Localstorage)
 
1. Login validation (Email and Password field empty validation)
2. Register validation (FullName, Email, Password, confirmPassword empty validation + password and confirmPassword same)
3. When users Register, store users information inside Localstorage
 
For example
users (Array of object)
[
    { fullName: "harsh", email: "harsh@gmail.com", password: "harsh" },
    { fullName: "Sumit", email: "sumit@gmail.com", password: "sumit" }
]
 
When same user register again, then display error message user already exist
 
4. On login page, when users enter email and password and click on login, check weather username and password exist inside Localstorage or not
5. If user exist inside Localstorage, then redirect to loginSuccessful page along with welcome message, and store loggedIn Users information inside local storage
 
For example
loggedInUser
 
{ fullName: "harsh", email: "harsh@gmail.com" }
 
else give error message "wrong username or password" and stay on the same page i.e. login page.
 
Group Chat
 
6. When use type message inside chat input and click on send button, store chat information inside Localstorage
for example
 
chats (Array of object)
[
    { date: 23-11-2021, message: 'dummy message' },
    { date: 24-12-2021, message: 'dummy message 2' }
]
 
7. On chat page, display chat information from Localstorage along with loggedIn username
8. When user click on Refresh button refresh chat area, for example in case you are using div refresh div only
 
User Management
 
9. Display users from Localstorage on users Management page
For example
users
[
    { email: "harsh@gmail.com", password: "harsh" },
    { email: "sumit@gmail.com", password: "sumit" }
]
 
10. When user click on Edit, Allow to edit users information
11. When user click on delete, Allow to delete individual User
 

12. When user click on logout remove loggedInUser from Localstorage
13. Only logged in user can access internal pages else redirect to login page
 
Marks (100)
 
1. Create proper folder structure, for example for CSS create css folder, for images images folder - 5 Marks
2. Use external CSS for example styles.css page - 5 Marks
3. Format code - 5 Marks
4. Proper comments - 5 Marks
5. Use meaningful name - 5 Marks
5. Project Complete on time - 25 Marks
6. Individual Marks - 50 Marks
