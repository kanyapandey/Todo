import React from "react";
import LoginForm from "./loginForm/LoginForm";
import LoginGraphic from "./loginGraphic/LoginGraphic";
import SignupForm from "./SignupForm/SignupForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { store } from '../../Redux/Login/login.store';
import { Provider } from "react-redux";
import { updateUserData } from "../../Redux/Login/login.action";
import "./index.css";

function Login(props) {
    store.subscribe(e => console.log);
    return (
        <Provider store={store}>
            <Router>
                <div className="login_wrapper">
                    <div className="loginAction">
                        <Switch>
                            <Route path="/" exact component={LoginForm} />
                            <Route path="/Signup" render={(props) => <SignupForm submit={onSubmit} updateStore={updateStore}/>} />
                        </Switch>
                        <LoginGraphic />
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default Login;



function onSubmit() {
    const currState = store.getState().signupCurrentUserData;
    fetch("http://localhost:4000/api/v1/addUser", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(currState) }).then(e => e.json()).then(e => {
        if (e.type === ("info" || "error")) {
            document.getElementsByClassName("warning")[0].innerHTML = e.message;
            setTimeout(e => {
                document.getElementsByClassName("warning")[0].innerHTML = "";
            },3000);
        }
    });
}

function updateStore(data) {
    const currState = store.getState().signupCurrentUserData;
    if (data.target.id === "fullName") {
        const localData = { FullName: data.target.value, UserName: currState.currUserName, Password: currState.currPassword };
        store.dispatch(updateUserData(localData));
    }
    else if (data.target.id === "username") {
        const localData = { FullName: currState.currFullName, UserName: data.target.value, Password: currState.currPassword };
        store.dispatch(updateUserData(localData));
    }
    else if (data.target.id === "password") {
        const localData = { FullName: currState.currFullName, UserName: currState.currUserName, Password: data.target.value };
        store.dispatch(updateUserData(localData));
    }
}
