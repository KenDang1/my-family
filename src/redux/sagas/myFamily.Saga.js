import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* myFamilySaga () {
    yield takeEvery('FETCH_FAMILY', fetchFamily);
};

function* fetchFamily (action) {
    try{
        const response = yield axios.get(`/api/family/${action.payload}`)

        yield put({
            type: "SET_MY_FAMILY",
            payload: response.data
        })
    }
    catch (error) {
        console.log('get my item saga failed', error);
    }
};

export default myFamilySaga;