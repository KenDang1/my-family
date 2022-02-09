const memberAppointment = (state = [], action) => {
    switch(action.type) {
        case 'SET_MEMBER_APPOINTMENT':
            return action.payload;
        default:
            return state;
    }
};

export default memberAppointment;