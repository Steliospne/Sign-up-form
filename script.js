pwd = document.querySelector("input#pwd");
pwd_conf = document.querySelector("input#conf-pwd");
errorMsg = document.getElementsByClassName("errorMsg");

pwd.addEventListener("keyup", validityCheck);

pwd_conf.addEventListener("keyup", validityCheck);

function validityCheck() {
    if (pwd.value != pwd_conf.value) {
        pwd.classList.add("error");
        pwd_conf.classList.add("error");
        errorMsg[0].textContent = "Passwords do not match!";
        errorMsg[1].textContent = "Passwords do not match!";
    } else {
        pwd.classList.remove("error");
        pwd_conf.classList.remove("error");
        errorMsg[0].textContent = "";
        errorMsg[1].textContent = "";
    }
}