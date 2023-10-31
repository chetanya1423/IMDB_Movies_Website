import { createStore } from 'redux';

// This is the initial state
const initialState = {
 value: ''
};

// This is the reducer function
function reducer(state = initialState, action) {

      return { value: action.type };
    
 
}

// This creates the Redux store
const store = createStore(reducer);

export default store;