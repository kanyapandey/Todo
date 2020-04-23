import React from "react";
import "./LoginForm.css";
import { setCurrentRoute, setUserData } from '../../../Redux/Login/login.action';
import { connect } from "react-redux";


function LoginForm(props) {
    
    const collectData = () => {
        //@ts-expect-error
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        props.setUser({ username, password });
        //@ts-expect-error
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }

    return (

        <div className="LoginForm">
            <section>
                <img src="/assets/LoginPage/Svg/Group 16.png" alt="Hello" />
                <p>Welcome login to get started</p>
            </section>
            <section>
                <form>
                    <input type="text" placeholder="Username" id="username" />
                    <input type="password" placeholder="Password" id="password" />
                    <input type="button" onClick={collectData} value="Login" id="login-btn" />
                    <input type="reset" value="Reset" id="reset-btn" />
                </form>
            </section>
        </div>

    );
}


function mapStateToProps(state) {
    console.log(`Store From LoginForm : ${JSON.stringify(state)}`);
    return {
        currUser: state.loginCurrentUser.currUser
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setUser: (user) => dispatch(setUserData(user))
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
