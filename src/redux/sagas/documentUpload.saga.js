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

function* uploadDocument() {
    yield takeEvery('DOCUMENT_UPLOAD', upload);
    yield takeEvery('FETCH_DOCUMENTS', fetchDocuments);
}

export default uploadDocument;