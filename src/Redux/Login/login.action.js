import { CURRENT_ROUTE, CURRENT_USER_SET, CURRENT_USER_SET_DATA } from './login.actiontype';

export const setCurrentRoute = (currRoute) => {
    return {
        type: CURRENT_ROUTE,
        currRoute: currRoute ? currRoute : "/"
    }
}


export const setUserData = (currUser) => {
    return {
        type: CURRENT_USER_SET,
        currUser: currUser ? currUser : {}
    }
}

export const updateUserData = (data) => {
    return {
        type: CURRENT_USER_SET_DATA,
        currFullName: data.FullName ? data.FullName : "",
        currUserName: data.UserName ? data.UserName : "",
        currPassword: data.Password ? data.Password : ""
    };
}
