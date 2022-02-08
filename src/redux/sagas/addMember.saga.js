import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


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

}; //end of addNewItem




function* addMemberSaga (){    
    yield takeEvery('ADD_NEW_MEMBER', addNewMember)
}; // end of addItemSaga


export default addMemberSaga;