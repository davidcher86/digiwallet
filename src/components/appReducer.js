const initialState = {
    loggedIn: false,
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, { loggedIn: true });
        case 'LOG_OUT':
            return Object.assign({}, state, { loggedIn: false });
        case 'START_LOADING':
            return Object.assign({}, state, { loading: true });
        case 'FINISH_LOADING':
            return Object.assign({}, state, { loading: false });
        // case 'CHANGE_ERROR':
        //     return Object.assign({}, state, { error: action.value });
        // case 'RESET_FORM':
        //     return Object.assign({}, state, { error: '', username: '', password: '', loading: false });
        default:
            return state;
    }
};