import React from "react";
import {signIn} from "../../components/Enter/SignIn";
import {signUp} from "../../components/Enter/SignUp";
import "./StartPage.css";
export default function StartPage(){
    return(
        <div className="page-container">
        {/*//     <div className="hat-container">*/}
        {/*//         <div className="hat-left">EMELIANOV</div>*/}
        {/*//         <div className="hat-center"></div>*/}
        {/*//         <div className="hat-right">Group - P32111<br/>Variant - 1881</div>*/}
        {/*//     </div>*/}
            <div className="footer-container">
                <div className="footer-left"> Emelianov Dmitriy Sergeevich</div>
                <div className="footer-right">Group-P32111</div>
                <div className="footer-right">Variant-1881</div>
            </div>
            <h1>Welcome! You want to use schedule? <br/> So sign up if you don't have an account or sign in if you do!</h1>
            <h3>What will you choose?</h3>
            <div className="button-container">
                <button type="submit" className="sign-in" onClick={signIn}>
                    <label>Sing in</label>
                </button>
                <button type="submit" className="sign-Up" onClick={signUp}>
                    <label>Sing up</label>
                </button>
            </div>
        </div>
    );
}