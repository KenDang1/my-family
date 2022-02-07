import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import AddFamilyBtn from '../AddFamilyBtn/AddFamilyBtn'


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const myFamily = useSelector((store) => store.myFamilyReducer);
  console.log('myfamily', myFamily);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch({
      type: "FETCH_FAMILY",
      payload: user.id
    })
  }, []);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      {/** fmaily member should render here */}
      <AddFamilyBtn className="addMember"/>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
