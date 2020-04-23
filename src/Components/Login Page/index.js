import React, { useEffect, useMemo } from "react";
import LoginForm from "./loginForm/LoginForm";
import LoginGraphic from "./loginGraphic/LoginGraphic";
import "./index.css";
import SignupForm from "./SignupForm/SignupForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { store } from '../../Redux/Login/login.store';
import { Provider } from "react-redux";

function Login(props) {
    store.subscribe(e => console.log);
    return (
        <Provider store={store}>
            <Router>
                <div className="login_wrapper">
                    <div className="loginAction">
                        <Switch>
                            <Route path="/" exact component={LoginForm} />
                            <Route path="/Signup" component={SignupForm} />
                        </Switch>
                        <LoginGraphic />
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default Login;
