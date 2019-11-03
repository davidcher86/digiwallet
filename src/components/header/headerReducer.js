import {name as appName} from './../app.json';

const initialState = {
    value: name
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_HEADER':
            return Object.assign({}, state, { value: action.value });
        default:
            return state;
    }
};