const selectedMember = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_MEMBER':
            return action.payload;
        case 'UPDATE_MEMBER':
            return{
                ...state,
                ...action.payload,
            };
    }
    return state;
};

export default selectedMember;