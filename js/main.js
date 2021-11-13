let allUsers = [];
if (localStorage.getItem('users') != null) {
    allUsers = JSON.parse(localStorage.getItem('users'));
}

let signInLink = document.getElementById("signUp")
let signUpLink = document.getElementById("signIn")
let firstNameInput = document.getElementById("firstNameInput")
let emailInput = document.getElementById("emailInput")
let passwordInput = document.getElementById("passwordInput")
let button = document.getElementById('signUpButton')
let spanValidate = document.getElementById('emailValidate')
let spanSuccess = document.getElementById('Success')


function clear() {
    firstNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}

emailInput.addEventListener('blur', validateEmail);
button.addEventListener("click", function () {
    let user = {
        Name: firstNameInput.value,
        Email: emailInput.value,
        password: passwordInput.value
    }

    if (button.innerHTML == 'Sign Up') {

        for (let i = 0; i < allUsers.length; i++) {
            if ((allUsers[i].Email === emailInput.value)) {
                spanValidate.innerHTML = "invalid mail .. email is already exist";
            }
        }

        allUsers.push(user);
        localStorage.setItem('users', JSON.stringify(allUsers));
        spanSuccess.innerHTML = "Success"
        console.log(allUsers);

        clear();
    }
    if (button.innerHTML == 'Login') {

        for (let x = 0; x <= allUsers.length - 1; x++) {
            let f = (allUsers[x].Email == emailInput.value );
            let z = (allUsers[x].password == passwordInput.value );
            if ((f && z) == true) {

                localStorage.setItem('sessionUsername', allUsers[x].Name);
                console.log(localStorage.getItem('sessionUsername'));

               location.href="home.html"

            }
        }
        spanSuccess.innerHTML = "wrong Email or Password"

    }
})


signInLink.addEventListener('click', function () {
    firstNameInput.classList.add("d-none");
    document.getElementById('signUpButton').innerHTML = "Login";
    document.getElementById('text1').innerHTML = "You don't have an account";
    signUpLink.classList.remove("d-none");
    signUpLink.classList.add('c-white');
    signInLink.classList.add("d-none");
})

signUpLink.addEventListener('click', function () {
    firstNameInput.classList.remove("d-none");
    document.getElementById('signUpButton').innerHTML = "sign Up";
    document.getElementById('text1').innerHTML = "You have an account";
    signInLink.classList.remove("d-none");
    signInLink.classList.add('c-white');
    signUpLink.classList.add("d-none");
})

function validateEmail() {
    let regex = /^[a-zA-Z][a-zA-Z_0-9]*[@]{1}[a-z]*[.]com$/;

    if (regex.test(emailInput.value) == true) {

        spanValidate.innerHTML = '';
        console.log("hello from correct rejex");
        return true;


    }
    else {
        spanValidate.innerHTML = 'Wrong email address';
        console.log("hello from wrong rejex");
    }

}
