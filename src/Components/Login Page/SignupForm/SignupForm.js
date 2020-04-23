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
                    <input type="text" placeholder="Full Name" id="fullName" />
                    <input type="text" placeholder="Username" id="username" />
                    <input type="password" placeholder="Password" id="password" />
                    <input type="button" value="Signup" id="signup-btn" />
                    <input type="reset" value="Reset" id="reset-btn" />
                </form>
            </section>
        </div>

    );

}

export default SignupForm;
