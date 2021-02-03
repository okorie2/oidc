let getbtn = document.querySelector(".get-started");
let logbtn = document.querySelector(".login-btn");
let signUpForm = document.getElementById("sign-up-form");
let signInForm = document.getElementById("sign-in-form");


showSignUp = () => {
    if (signInForm.classList.contains("show")) {
        signInForm.classList.remove("show");
        signUpForm.classList.toggle("show");
        signInForm.style.zIndex="-5";
        signUpForm.style.zIndex="5";
        
    } else {
        signUpForm.classList.add("show");
        signUpForm.style.zIndex="5";
    }
}
getbtn.addEventListener("click", showSignUp);

showSignin = () => {
    if (signUpForm.classList.contains("show")) {
        signUpForm.classList.remove("show");
        signInForm.classList.toggle("show");
        signUpForm.style.zIndex="-5";
        signInForm.style.zIndex="5";
    } else {
        signInForm.classList.add("show");
        signInForm.style.zIndex="5";
    }
}
logbtn.addEventListener("click", showSignin);


// Glide Slider Activation 
const config = {
            type: 'carousel',
            perView: 1,
            autoplay: 5000,
            animationDuration: 1000,
            animationTimingFunc: 'ease-out',
        }
        new Glide('.glide', config).mount()

// Glide Slider Ends Here 
