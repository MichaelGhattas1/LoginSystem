

var homePage = document.getElementById('home')
if (localStorage.getItem('sessionUsername') != null)
{
    document.getElementById('username').innerHTML = `${localStorage.getItem('sessionUsername')}` ;
}
var logOut = document.getElementById('logOutButton')
logOut.addEventListener ( 'click' , logout)
function logout() {
    localStorage.removeItem('sessionUsername') 
   window.location.href='index.html' ;
}