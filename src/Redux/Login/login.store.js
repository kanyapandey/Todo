import { createStore } from 'redux';
import { rootReducer } from './login.reducer';


export const store = createStore(rootReducer);


