import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* upload(action) {
    console.log('upload payload', action.payload);
    
    try {

    yield axios.post(`/api/upload/${action.payload.memberId}`, action.payload.data);
    console.log('action.payload is:', action.payload);

    yield put({ 
        type: 'FETCH_DOCUMENTS', 
        payload: action.payload.memberId
    });

    } catch (error) {
        console.log('Add item failed', error);
    }
};

function* fetchDocuments(action) {
    console.log('fetchDocument', action.payload);
    try{
        const response = yield axios.get(`/api/upload/${action.payload}`)

        yield put({
            type: "SET_MEMBER_DOCUMENT",
            payload: response.data
        })
    }
    catch (error) {
        console.log('get my item saga failed', error);
    }
};

function* deleteDocument (action) {
    try {
        console.log('In deleteDocument saga', action.payload);
        yield axios.delete(`/api/upload/${action.payload.documentId}`);

        yield put({
            type: 'FETCH_DOCUMENTS',
            payload: action.payload.memberId
        });
    }
    catch (err) {
        console.error('DELETE Document failed', err);
    }
}; // end of deleteAppointment

function* document() {
    yield takeEvery('DOCUMENT_UPLOAD', upload);
    yield takeEvery('FETCH_DOCUMENTS', fetchDocuments);
    yield takeEvery('DELETE_DOCUMENT', deleteDocument);
}

export default document;