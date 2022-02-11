import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* selectedMember () {
    yield takeEvery('FETCH_SELECTED_MEMBER_APPOINTMENT', fetchSelectedMemberAppointment);
    yield takeEvery('SAVE_MEMBER_APPOINTMENT', saveMemberAppointment);
    yield takeEvery('FETCH_SELECTED_MEMBER_GROWTH', fetchSelectedMemberGrowth);
    yield takeEvery('SAVE_MEMBER_GROWTH', saveMemberGrowth);
};


function* fetchSelectedMemberAppointment (action) {
    try{
        const response = yield axios.get(`/api/family/selectAppointment/${action.payload.memberId}/${action.payload.appointmentId}`);
        console.log('select member result', response.data);
        
        yield put({
            type: 'SET_SELECTED_MEMBER',
            payload: response.data
        });
    }
    catch (err) {
        console.log('FAILED fetch selected member', err);
    }
}; // end fetchSelectedMemberAppointment

function* fetchSelectedMemberGrowth (action) {
    try{
        const response = yield axios.get(`/api/family/selectGrowth/${action.payload.memberId}/${action.payload.growthId}`);
        console.log('select member result', response.data);
        
        yield put({
            type: 'SET_SELECTED_MEMBER',
            payload: response.data
        });
    }
    catch (err) {
        console.log('FAILED fetch selected member', err);
    }
}; // end fetchSelectedMemberGrowth

function* saveMemberAppointment (action) {
    console.log('updated appointment', action.payload);
    
    try{
        yield axios.put(`/api/family/appointment/${action.payload.memberId}`, action.payload);

        yield put({
            type: 'FETCH_MEMBER_APPOINTMENT',
            payload: action.payload.memberId
        });
    }
    catch (err) {
        console.log('FAILED update selected member appointment', err);
    }
}; // end saveMemberAppointment

function* saveMemberGrowth (action) {
    console.log('updated growth', action.payload);
    
    try{
        yield axios.put(`/api/family/growth/${action.payload.memberId}`, action.payload);

        yield put({
            type: 'FETCH_MEMBER_INFO',
            payload: action.payload.memberId
        });
    }
    catch (err) {
        console.log('FAILED update selected member growth', err);
    }
}; // end saveMemberGrowth


export default selectedMember;