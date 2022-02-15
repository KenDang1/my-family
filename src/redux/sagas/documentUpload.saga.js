import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* upload(action) {
    console.log('upload payload', action.payload);
    
    try {

    yield axios.post(`/api/upload/${action.payload.memberId}`, action.payload);
    console.log('action.payload is:', action.payload);

    yield put({ 
        type: 'FETCH_MEMBER_INFO', 
        payload: action.payload.memberId
    });

    } catch (error) {
        console.log('Add item failed', error);
    }
}

function* uploadDocument() {
    yield takeEvery('DOCUMENT_UPLOAD', upload);
}

export default uploadDocument;