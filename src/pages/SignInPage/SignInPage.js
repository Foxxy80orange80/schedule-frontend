//already have acc

import React from "react";
import "./SignInPage.css"
import continueButton from "../../components/Authorization/ContinueButton";

export default function SignInPage(){

    return(

        <div className="page-container">
            {/*<div className="hat-container">*/}
            {/*    <div className="hat-left">E M E L I A N O V</div>*/}
            {/*    <div className="hat-center"></div>*/}
            {/*    <div className="hat-right">Group - P32111<br/>Variant - 1881</div>*/}
            {/*</div>*/}
            <h1>Welcome back!</h1>

            <form className="form">
                <div className="form-container">
                    <p>Username or email address</p>

                    <input className="login field" type="text" maxLength={8}/>

                    <p>Password</p>

                    <input className="password field" type="password" maxLength={11}/>
                    <br/><br/>

                    <div className="button-container">
                        <button type="submit" className="continue-button" onClick={continueButton}>
                            <label>Continue</label>
                        </button>

                    </div>
                </div>
            </form>
        </div>
    );
}