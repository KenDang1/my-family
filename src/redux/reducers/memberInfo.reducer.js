const memberInfo = (state = [], action) => {
    switch(action.type) {
        case 'SET_MEMBER_INFO':
            return action.payload;
        default:
            return state;
    }
};

export default memberInfo;