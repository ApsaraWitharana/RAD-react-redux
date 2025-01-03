
export const initialState = {
    count: 0 ,
    show :true
};
export const countReducer = (state = initialState, action:{type:string,payload:number}) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + action.payload };
        case 'DECREMENT':
            return { ...state, count: state.count - action.payload };
        case 'TOGGLE':
            return { ...state, show:true };
        default:
            return state;
    }
};



