import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import myFamilyReducer from './myFamily.reducer';
import memberInfo from './memberInfo.reducer';
import memberAppointment from './memberAppointment.reducer';
import selectedMember from './selectedMember.reducer';
import memberDocument from './memberDocument.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  myFamilyReducer, // will have all the family members
  memberInfo,  // get everything related to this id
  memberAppointment, // all member appointments
  selectedMember, // single appointment or growth 
  memberDocument, 
});
console.log('my family in root reducer', myFamilyReducer);

export default rootReducer;
