const memberDocument= (state = [], action) => {
    switch(action.type) {
        case 'SET_MEMBER_DOCUMENT':
            return action.payload;
        default:
            return state;
    }
};

export default memberDocument;