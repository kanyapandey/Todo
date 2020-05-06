import { CURRENT_ROUTE, CURRENT_USER_SET } from './login.actiontype';

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