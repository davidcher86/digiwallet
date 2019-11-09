
export const changeFieldValue = (field, value) => {
    return {
        type: 'UPDATE_ACCOUNT_FORM',
        value,
        field
    };
};