const redux = require('redux');
const createStore = redux.createStore;


const initialState = {
    counter: 0
}
// Reducer - store all our logic
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};


// Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription (make sure we don't need to call manually getState) will inform us about any changes
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
})


// Dispathicng Action - call some function
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

