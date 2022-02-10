import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* memberInfoSaga () {
    yield takeEvery('FETCH_MEMBER_INFO', fetchMemberDetails);
    yield takeEvery('ADD_NEW_MEMBER', addNewMember);
    yield takeEvery('ADD_NEW_APPOINTMENT', addNewAppointment);
    yield takeEvery('FETCH_MEMBER_APPOINTMENT', fetchMemberAppointment);
    yield takeEvery('DELETE_APPOINTMENT', deleteAppointment);
};

function* deleteAppointment (action) {
    try {
        console.log('In deleteAppointment saga', action.payload);
        yield axios.delete(`/api/family/${action.payload.appointmentId}`);

        yield put({
            type: 'FETCH_MEMBER_APPOINTMENT',
            payload: action.payload.memberId
        });
    }
    catch (err) {
        console.error('DELETE Appointment failed', err);
    }
}

function* fetchMemberDetails (action) {
    try{
        const response = yield axios.get(`/api/family/member/${action.payload}`)

        yield put({
            type: "SET_MEMBER_INFO",
            payload: response.data
        })
    }
    catch (error) {
        console.log('get my item saga failed', error);
    }
}; // end of fetchMemberDetails

function* addNewMember (action) {
    console.log('in addNewMember', action);
    try{
        yield axios.post('/api/family', action.payload);

        yield put({
            type: 'FETCH_FAMILY'
        });
    }
    catch {
        console.log('get all error in addNewMember');
    };

}; //end of addNewMember

function* fetchMemberAppointment (action) {
    console.log('action', action.payload);
    
    try{
        const response = yield axios.get(`/api/family/appointment/${action.payload}`)

        yield put({
            type: "SET_MEMBER_APPOINTMENT",
            payload: response.data
        })
    }
    catch (error) {
        console.log('get my item saga failed', error);
    }
}; // end of fetchMemberAppointment

function* addNewAppointment (action) {
    console.log('in addNewAppointment', action.payload);
    try{
        yield axios.post(`/api/family/appointment/${action.payload.memberId}`, action.payload);

        yield put({
            type: 'FETCH_MEMBER_APPOINTMENT',
            payload: action.payload.memberId
        });
    }
    catch {
        console.log('get all error in addNewAppointment');
    };

}; //end of addNewAppointment

export default memberInfoSaga;