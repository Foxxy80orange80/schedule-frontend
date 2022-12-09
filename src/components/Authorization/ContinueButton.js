import  {validateSignIn} from "./ValidateForm";

export default function continueButton(){
    let password=document.querySelector(".password").value;
    let login=document.querySelector(".login").value;


    if(validateSignIn(login, password)){
        console.log(login);
        console.log(password);
        console.log("user continued");
        window.location.assign("../../main");

    }
}