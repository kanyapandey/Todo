import React, {useState} from "react";
import "./LoginGraphic.css";
import { withRouter, Link, Redirect } from "react-router-dom";
import { setCurrentRoute } from '../../../Redux/Login/login.action';
import { connect } from "react-redux";


function LoginGraphic(props) {
    const checkRoute = () => {
        props.setRoute(window.location.pathname);
        return window.location.pathname;
    }

    return (
        <div className="LoginGraphic">
            <div className="LoginGraphic_Content">
                <img src="./assets/LoginPage/Svg/REDUX & TODO.svg" alt="Logo" />
                <p>
                    We made this application to help everyone remember all the tasks in your busy days.
                </p>

                <section>
                    <p>{props.route === "/Signup" ? "Already a user ? Login here" : "New user ? Make a profile here"}</p>
                    {props.route == "/Signup" ? <Redirect to="/" /> : <Redirect to="Signup" />}
                    <input type="button" onClick={checkRoute} value={props.route === "/Signup" ? "Login" : "Signup"} id="login-btn" />
                </section>

                <section className="loginSocials">
                    <div className="social_icons">
                        <img src="./assets/LoginPage/Svg/Messenger.svg" alt="Messenger" />
                        <img src="./assets/LoginPage/Svg/Discord.svg" alt="Messenger" />
                        <img src="./assets/LoginPage/Svg/Skype.svg" alt="Messenger" />
                    </div>
                    <p>Copyright Of Ben Parkinson</p>
                </section>
            </div>
        </div>

    );
}



function mapStateToProps(state) {
    console.log(state);
    return {
        route: state.loginReducer.currRoute
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setRoute : (route) => dispatch(setCurrentRoute(route))        
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginGraphic);
