export const customerInitialState = {
    customerName: '',
};

export const customerReducer = (state = customerInitialState, action) => {
    switch (action.type) {
        case 'SET_CUSTOMER':
            return { ...state, customerName: action.payload };
        default:
            return state;
    }
};
