
import firebase from 'firebase';

export const changeAccountFieldValue = (field, value) => {
    return {
        type: 'UPDATE_ACCOUNT_FORM_ACCOUNT',
        value,
        field
    };
};

export const changeUserFieldValue = (field, value) => {
    return {
        type: 'UPDATE_ACCOUNT_FORM_USER',
        value,
        field
    };
};

export const changeCreditFieldValue = (field, value) => {
    return {
        type: 'UPDATE_ACCOUNT_FORM_CREDIT',
        value,
        field
    };
};

export const changeSallaryFieldValue = (field, value) => {
    return {
        type: 'UPDATE_ACCOUNT_FORM_SALLARY',
        value,
        field
    };
};

export const changePageSettings = (value) => {
    return {
        type: 'UPDATE_ACCOUNT_FORM',
        value,
        field
    };
};

export const handleStep = (value) => {
    return {
        type: 'UPDATE_ACCOUNT_FORM',
        value
    };
};

export const handlePickerChange = (itemValue, itemIndex) => {
    console.log(itemValue);
    console.log(itemIndex);
    return {
        type: 'UPDATE_ACCOUNT_FORM',
        value
    };
};

export const handleRegisterAccount = (account) =>
    (dispatch) => {
        console.log(account);
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/account`)
            .push(account)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    };

export const handleEditAccount = (account) =>
    (dispatch) => {
        console.log(account);
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/account/${account.uid}`)
            .set(account)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    };