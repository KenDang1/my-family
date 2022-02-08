import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import AddFamilyBtn from '../AddFamilyBtn/AddFamilyBtn'
import FamilyMemberList from '../FamilyMemberList/FamilyMemberList'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      {/** family member should render here */}
      <FamilyMemberList className="familyList"/>
      <AddFamilyBtn className="addMember"/>
      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
