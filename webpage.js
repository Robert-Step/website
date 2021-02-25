

function loginCheck() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log(username);
   
}
function registerVerification() {
    
    console.log('registerVer')
    var firstName= document.getElementById("firstName").value;
    var lastName= document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    localStorage.setItem("textValue",firstName);
    

    /*
All this is going to verify that what the user inputed 
    var chArray = firstName.split('') + lastName.split('');
    console.log(chArray);


   if(chArray[0] === [a-zA-Z]) {
   }

*/


register(firstName, lastName, email, username, password)



}

function register(a, b, c, d){
    let user = {
        firstName : a,
        lastName : b,
        userName : c,
        password : d};

    
    localStorage.setItem("usersArray"

console.log(usersArray[0])
}
function storageTest() {
    if (localStorage.getItem("textValue")){
    document.getElementById("result").innerHTML=localStorage.getItem("textValue");
    }
    console.log('in the storage');

}
function arrayInstant(){
    localStorage.setItem("usersArray") = [];
}
window.onLoad = storageTest();
window.onLoad = arrayInstant();