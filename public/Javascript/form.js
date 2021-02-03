let signUpForm = document.getElementById("sign-up-form");
let signInForm = document.getElementById("sign-in-form");
let login = document.querySelector(".l-8");


showVendLog = () => {
    if (signUpForm.classList.contains("d-none")) {
        signInForm.classList.toggle("d-block");
        signUpForm.classList.toggle("d-block");
        // login.innerHTML = "Sign up"
    }
   
}

changeText = () => {
    if (signInForm.classList.contains("d-block")) {
        login.innerHTML = "Sign up"
    }
    else{
        login.innerHTML = "Log in"
    }
}

login.addEventListener("click", () => {
    showVendLog();
    changeText();
});


