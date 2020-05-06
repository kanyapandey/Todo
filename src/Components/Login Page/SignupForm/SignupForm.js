import React from "react";
import "./SignupForm.css";

function SignupForm(props) {
    return (
        <div className="SignupForm">
            <section>
                <img src="/assets/LoginPage/Svg/Group 16.png" alt="Hello World !"/>
                <p>Make an account today to start<br />remembering</p>
            </section>
            <section>
                <form>
                    <input type="text" required onChange={e => props.updateStore(e)} placeholder="Full Name" id="fullName" />
                    <input type="text" required onChange={e => props.updateStore(e)} placeholder="Username" id="username" />
                    <input type="password" required onChange={e => props.updateStore(e)} placeholder="Password" id="password" />
                    <input type="button" onClick={props.submit} value="Signup" id="signup-btn" />
                    <input type="reset" value="Reset" id="reset-btn" />
                </form>
                <div className="warning">
                    
                </div>
            </section>
        </div>

    );

}

export default SignupForm;
