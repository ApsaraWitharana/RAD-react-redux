export const itemInitialState = {
    itemName: '',
};

export const itemReducer = (state = itemInitialState, action) => {
    switch (action.type) {
        case 'SET_ITEM':
            return { ...state, itemName: action.payload };
        default:
            return state;
    }
};
