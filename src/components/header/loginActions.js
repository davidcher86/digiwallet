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