

// при успешном(логин и пароль есть бд) sign in должно возвращать 1
// при успешном(такого логина нет в бд) sign up должно возвращать 2
// при неуспешном должно возвращать 0



const username_re= /^[a-z][a-z0-9]*?([-_][a-z0-9]+){0,2}$/;
const email_re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let errorsNumber=0;

function validateCorrect(login, password){

    let passwordField= document.querySelector(".password");
    let loginField=document.querySelector(".login");
    if(login===null || login==="" || login.length<=4){
        if(errorsNumber!==0){
            removeValidation("login");
        }
        let error = generateError("Login cannot be empty or too little","login");
        loginField.parentElement.insertBefore(error,loginField);
        errorsNumber+=1;
    }

    if(password===null || password==="" || password.length<=4){
        if(errorsNumber!==0){
            removeValidation("password");
        }
        let error = generateError("Password cannot be empty or too little","password");
        passwordField.parentElement.insertBefore(error,passwordField);
        errorsNumber+=1;

    }

    if(!(username_re.test(String(login)) || email_re.test(String(login)))){
        if(errorsNumber!==0){
            removeValidation("login");
        }
        let error = generateError("This is not an email or username","login");
        loginField.parentElement.insertBefore(error,loginField);
        errorsNumber+=1;
    }

    if(password===login){
        if(errorsNumber!==0){
            removeValidation("password");
        }
        let error = generateError("Login and password cannot be the same","password");
        loginField.parentElement.insertBefore(error,passwordField);
        errorsNumber+=1;
    }
    if(errorsNumber===0){
        return true;
    }else{
        return false;
    }


}

export function validateSignIn(login, password){

    // errorsNumber=0;
    if(validateCorrect(login, password)){
        //доделать с бд
        return true;
    }else{
        return false;
    }
}

export function validateSignUp(login,password){
    errorsNumber=0;
    if(validateCorrect(login, password)){
        //доделать с бд
        return true;
    }else{
        return false;
    }
}


function generateError(text,type) {
    let tip = document.createElement('div');
    if(type==="password"){
        tip.className = 'tip-password';
    }
    if(type==="login"){
        tip.className = 'tip-login';
    }

    tip.style.color = "red";
    tip.innerHTML = text;
    return tip;
}

function removeValidation(type) {
    if(type==="password") {
        let tip = document.querySelector('.tip-password');
        tip.remove();
    }
    if(type==="login"){
        let tip = document.querySelector('.tip-login');
        tip.remove();
    }

}
