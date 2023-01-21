const submit = document.getElementById("submit");


submit.addEventListener("click", function (e) {
    e.preventDefault();
    validateForm();

});
function validateForm() {
    const inputemail = document.getElementById("inputEmail");
    const inputpassword = document.getElementById("inputPassword");
    const error = document.getElementById("inputerror");
    let inputerror = "";
    
    let data = JSON.parse(localStorage.getItem("userinput"));
    if (!data) {
        inputerror += "No user data found in local storage.";
        errorP.innerHTML = errorinput;
    }
    else {
        // check if email and password match or not in signup file
        let userinput;
        for (let i = 0; i < data.length; i++) {
            if (data[i].inputemail === inputemail.value && data[i].inputpassword === inputpassword.value) {
                user = data[i];
                break;
            }
        }

        if (!user) {
            inputerror += "Email or password is incorrect. ";
            errorP.innerHTML = inputerror;
        } else {
          
            user.note = Math.random().toString(36).substring(2, 12);
         
            localStorage.setItem("data", JSON.stringify(data));
            
            window.location.href = "chatGpt.html";
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].inputemail === inputemail.value && data[i].inputpassword === inputpassword.value) {
                // Show token in a pop-up
                alert(`Your token is: ${data[i].note}`);
                break;
            }
        }

    }
}
