# Redux Explained
Redux is a state management library for JavaScript applications. First I also thought that redux is only built for React but then I realized that it's used with every JavaScript Frameworks for example :
1. React Js
2. Angular Js
3. Vue Js

We can also use it with very simple JavaScript applications without any frameworks and libraries. The concept behind it is very simple and we can very easily understand it.

### Technical Words Used In Redux
1. Store: its a container for our state or variables that we wanna change dynamically any component can access and modify state stored inside a store at any point from anywhere without having to use props and lifting up the state.

```javascript
import React from "react";
import { createStore } from "redux";

const store = createStore();
/*
	createStore method takes 2 arguments
		1. Reducer
		2. Initital State ( optional )
*/

```

2. Reducers: its the logic that changes the values stored in a store when a action is dispatched and a reducer is just a function with conditional statements to check which action is dispatched and then it simply executes the conditional code depending on the condition set

```javascript
import React from "react";
import { createStore } from "redux";

// Reducer function
const inititalState = { count: 0 }

const countReducer = (state = inititalState, action) => {
	switch(action.type){
		case ADD_COUNT:
			return {
				...state,
				count: state.count++
			}
		default:
			return state;
	}
}
/*
	Reducer function also takes 2 arguments
		1. inititalState
		2. action ( whenever a action is dispatched it's passed here )

	we can use if statements as well its not compulsory to use switch statements but conventionally people use switch statements
*/

const store = createStore(countReducer);
/*
	createStore method takes 2 arguments
		1. Reducer
		2. Initital State ( optional )
*/
```
3. Actions: action is just a identifier for the action that the user is  trying to perform on our application and a action can be dispatched by any means for example:
	1. Clicking a button
	2. Resizing browser
	3. Updating of a component

```javascript
import React from "react";
import { createStore } from "redux";

// Reducer function
const inititalState = { count: 0 }

const countReducer = (state = inititalState, action) => {
	switch(action.type){
		case ADD_COUNT:
			return {
				...state,
				count: state.count++
			}
		default:
			return state;
	}
}
/*
	Reducer function also takes 2 arguments
		1. inititalState
		2. action ( whenever a action is dispatched it's passed here )

	we can use if statements as well its not compulsory to use switch statements but conventionally people use switch statements
*/

const store = createStore(countReducer);
/*
	createStore method takes 2 arguments
		1. Reducer
		2. Initital State ( optional )
*/

// Actions can be defined like this
const ADD_COUNT = "ADD_COUNT";
// It not necessary to type it in all caps but its a convention so it upto you


// This step is not necessary but it can be very helpful in long run and save your time so you don't have to change the action in every single file and place you type it

const addCountAction = (name="parameters can also be passed here to use within reducers") => {
	return {
		type: ADD_COUNT,
		info: "Any amount of properties can be added here",
		name: name,
		comment: "anything can be returned not just objects it can be strings, numbers or anything depending on what you are checking in your reducer functions"
	}
}
// This function I've defined above is known as I think actionGetter I don't really care but it's used to make our life easier so we don't have to change it (actions) in multiple files
```
