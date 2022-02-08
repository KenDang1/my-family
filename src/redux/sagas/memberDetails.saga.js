import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* memberDetailsSaga () {
    yield takeEvery('FETCH_MEMBER_INFO', fetchMemberDetails);
};

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
};

export default memberDetailsSaga;