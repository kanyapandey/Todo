import { CURRENT_ROUTE, CURRENT_USER_SET } from './login.actiontype';
import { combineReducers } from 'redux';

const inititalRouteState = {
    currRoute: "/",
}
const inititalUserState = {
    currUser: {}
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


export const rootReducer = combineReducers({loginReducer, loginCurrentUser});
