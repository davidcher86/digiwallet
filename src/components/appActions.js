export const successLogin = () => {
    return {
        type: 'LOGIN_SUCCESS'
    };
};

export const logout = () => {
    return {
        type: 'LOG_OUT'
    };
};

export const beginLoading = () => {
    return {
        type: 'START_LOADING'
    };
};

export const finishLoading = () => {
    return {
        type: 'FINISH_LOADING'
    };
};