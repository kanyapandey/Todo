import { CURRENT_ROUTE, CURRENT_USER_SET, CURRENT_USER_SET_DATA } from './login.actiontype';
import { combineReducers } from 'redux';

const inititalRouteState = {
    currRoute: "/",
}
const inititalUserState = {
    currUser: {}
}
const inititalUserDataState = {
    currFullName: "",
    currUserName: "",
    currPassword: ""
}


function loginReducer(state = inititalRouteState, action) {
    switch (action.type) {
        case CURRENT_ROUTE:
            return {
                ...state,
                currRoute: action.currRoute ? action.currRoute : "/"
            }
        default:
            return state;
    }
}


function loginCurrentUser(state = inititalUserState, action) {
    switch (action.type) {
        case CURRENT_USER_SET:
            return {
                ...state,
                currUser: action.currUser !== {} ? action.currUser : state.currUser
            };
        default:
            return state;
    }
}

function signupCurrentUserData(state = inititalUserDataState, action) {
    switch (action.type) {
        case CURRENT_USER_SET_DATA:
            return {
                ...state,
                currFullName: action.currFullName ? action.currFullName : "Unset",
                currUserName: action.currUserName ? action.currUserName : "Unset",
                currPassword: action.currPassword ? action.currPassword : "Unset"
            };
        default:
            return state;
    }
}

export const rootReducer = combineReducers({ loginReducer, loginCurrentUser, signupCurrentUserData});
