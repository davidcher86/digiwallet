import { Actions, ActionConst } from 'react-native-router-flux';
import firebase from 'firebase';

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

export const onSignInPress = (username, password) =>
    (dispatch) => {
        Actions.account({ formType: 'new' });
        // dispatch(changeLoading(true));        
        // firebase.auth().createUserWithEmailAndPassword(username, password)
        //     .then((r) => {
        //         dispatch(resetForm());
        //         Actions.account({ formType: 'new' });
        //         return null;
        //     })
        //     .catch((res) => {
        //         dispatch(resetForm());
        //         dispatch(handleError(res.toString()));
        //         return null;
        //     });
    }

export const onLoginPress = (username, password) =>
    (dispatch) => {
        dispatch(changeLoading(true));
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then((r) => {
                console.log(r)
                dispatch(resetForm());
                Actions.dashboard();
                return null;
            })
            .catch((res) => {
                console.log(res)
                dispatch(resetForm());
                dispatch(handleError(res.toString()));
                return null;
            });
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

export const changeTab = (value) => {
    return {
        type: 'CHANGE_TAB',
        value
    };
};