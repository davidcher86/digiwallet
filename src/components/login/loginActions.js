export const changeUsername = (value) => {
    return {
        type: 'CHANGE_USERNAME_FIELD',
        value
    };
};

export const changePassword = (value) => {
    return {
        type: 'CHANGE_PASSWORD_FIELD',
        value
    };
};

export const changeLoading = (value) => {
    return {
        type: 'CHANGE_LOADING_STATE',
        value
    };
};

export const handleError = (value) => {
    return {
        type: 'CHANGE_ERROR',
        value
    };
};