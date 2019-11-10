const initialState = {
    user: {
        firstName: '',
        lastName: '',
        gender: 'male'
    },
    amount: 0,
    creditCard: {
        company: '',
        billingDate: '1/1',
        amountLiabilities: 0
    },
    sallary: {
        paymentDate: '1/1',
        amount: 10000
    },
    transactions: [],
    liability: 0,
    assets: 0,
    validationErrors: {
        firstNameError: '',
        lastNameError: ''
    },
    pageSettings: {
        step: 1
    }
}

export default (state = initialState, action) => {
    let { user, creditCard, user, sallary } = state;
    switch (action.type) {
        case 'UPDATE_ACCOUNT_FORM_ACCOUNT':
            return Object.assign({}, state, { [action.field]: action.value });
        case 'UPDATE_ACCOUNT_FORM_USER':
            user[action.field] = action.value;
            return Object.assign({}, state, { user: user });
        case 'UPDATE_ACCOUNT_FORM_CREDIT':
            creditCard[action.field] = action.value;
            return Object.assign({}, state, { creditCard: creditCard });
        case 'UPDATE_ACCOUNT_FORM_SALLARY':
            sallary[action.field] = action.value;
            return Object.assign({}, state, { sallary: sallary });
        default:
            return state;
    }
};