const initialState = {
    username: '',
    password: '',
    loading: false,
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_USERNAME_FIELD':
            return Object.assign({}, state, { username: action.value });
        case 'CHANGE_PASSWORD_FIELD':
            return Object.assign({}, state, { password: action.value });
        case 'CHANGE_LOADING_STATE':
            return Object.assign({}, state, { loading: action.value });
        case 'CHANGE_ERROR':
            return Object.assign({}, state, { error: action.value });
        default:
            return state;
    }
};