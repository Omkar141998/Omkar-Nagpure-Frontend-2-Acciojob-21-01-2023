console.log("this is validation form")

const signup = document.getElementById("signup");


signup.addEventListener("click", function (e) {
    e.preventDefault();
    validateForm();

});

const name1 = document.getElementById('name1');
const email = document.getElementById('email');
const password = document.getElementById('password');
const newPassword = document.getElementById('newPassword');

// console.log( name1, email, password, newPassword);

name1.addEventListener('blur',()=>{
    console.log("Name is blured")
    //Validate email here
    let regex = /^[A-Z a-z]([0-9 a-z A-Z]){2,25}$/;
    let str = name1.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Name is Valid')
        name1.classList.remove('is-invalid');
        namevalid= true;
    }else{
        console.log('Name is Invalid');
        name1.classList.add('is-invalid');
    }
    
})
email.addEventListener('blur',()=>{
    console.log("email is blured")
    //Validate name here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){0,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('email is Valid')
        email.classList.remove('is-invalid');
        emailvalid = true;
    }else{
        console.log('email is Invalid');
        email.classList.add('is-invalid');
    }
})
password.addEventListener('blur',()=>{
    console.log("password is blured")
    //Validate Password here
    let regex = /^([0-9a-zA-Z]+)@([0-9a-zA-Z]+){0,7}$/;
    let str = password.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Password is Valid')
        password.classList.remove('is-invalid');
        passwordvalid = true;
    }else{
        console.log('Password is Not Valid');
        password.classList.add('is-invalid');
    }
})
newPassword.addEventListener('blur',()=>{
    console.log("new Password is blured")
    // Confirm Password here
    let regex = /^([0-9a-zA-Z]+)@([0-9a-zA-Z]+){0,7}$/;
    let str = newPassword.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Confirm Password is Valid')
        newPassword.classList.remove('is-invalid');
        cPasswordvalid = true;
    }else{
        console.log('Confirm Password is Not Valid');
        newPassword.classList.add('is-invalid');
    }
})



