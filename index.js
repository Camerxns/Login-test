let people = [
    {
        username: 'Admin',
        password: 'pass'
    },
    {
        username: 'user',
        password: 'pass'
    }
]
function getInfo(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    for ( let i = 0; i < people.length; i++){
        if (username == people[i].username && password == people[i].password){
          location.replace("login.html");
        }
    }
}