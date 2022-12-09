import {validateSignUp} from "./ValidateForm";

export default function startButton(){
    let password=document.querySelector(".password").value;
    let login=document.querySelector(".login").value;
    if(validateSignUp(login,password)){
        console.log(login);
        console.log(password);
        console.log("user started");

    window.location.assign("../../main");
    }
}

