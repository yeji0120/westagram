const id_input = document.getElementsByClassName("id-input")[0];
const password_inout = document.getElementsByClassName("password-input")[0];
const login_btn = document.getElementsByClassName("login-btn")[0];

const btnHandler = () => {
    //console.log(id_input.value.length)
    if((id_input.value.length > 6) && (password_inout.value.length > 6)){
        login_btn.className= "login-btn-hover";
        login_btn.style.opacity = 1;
    }
    else{
        login_btn.className= "login-btn"
        login_btn.style.opacity = 0.5;
    }
}
const pagePush = () => {
    if((id_input.value.length > 6) && (password_inout.value.length > 6)){  
       location.href="main.html";
    }
}