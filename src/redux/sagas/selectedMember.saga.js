import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* selectedMember () {
    yield takeEvery('FETCH_SELECTED_MEMBER_APPOINTMENT', fetchSelectedMember);
    yield takeEvery('SAVE_MEMBER_APPOINTMENT', saveMemberAppointment);
    // yield takeEvery('FETCH_SELECTED_MEMBER_GROWTH', fetchSlectedMember);
    // yield takeEvery('SAVE_MEMBER_GROWTH', saveMemberGrowth);
};


function* fetchSelectedMember (action) {
    console.log('fetchselectedmember action', action.payload);
    
    try{
        const response = yield axios.get(`/api/family/select/${action.payload.memberId}/${action.payload.appointmentId}`);
        console.log('select member result', response.data);
        
        yield put({
            type: 'SET_SELECTED_MEMBER',
            payload: response.data
        });
    }
    catch (err) {
        console.log('FAILED fetch selected member', err);
    }
};

function* saveMemberAppointment(action) {
    console.log('updated appointment', action.payload);
    
    try{
        yield axios.put(`/api/family/${action.payload.memberId}`, action.payload);

        yield put({
            type: 'FETCH_MEMBER_APPOINTMENT',
            payload: action.payload.memberId
        });
    }
    catch (err) {
        console.log('FAILED update selected member', err);
    }
}; 


export default selectedMember;