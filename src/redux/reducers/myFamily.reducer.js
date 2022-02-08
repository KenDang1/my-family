const myFamilyReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_MY_FAMILY':
            return action.payload;
        default:
            return state;
    }
};

export default myFamilyReducer;