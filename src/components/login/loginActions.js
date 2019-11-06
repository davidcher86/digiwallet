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

export const changeFieldValue = (field, value) => {
    return {
        type: 'UPDATE_LOGIN_FORM',
        value,
        field
    };
};

export const onLoginPress = (username, password) =>
    dispatch => {
        dispatch(changeLoading(true));
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(() => dispatch(resetForm())
            .catch((res) => {
                dispatch(resetForm());
                dispatch(handleError(res.toString()));
            }));
    }

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

export const resetForm = () => {
    return {
        type: 'RESET_FORM'
    };
};