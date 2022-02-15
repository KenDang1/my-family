import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Member from '../Member/Member'
import './FamilyMemberList.css';

function FamilyMemberList () {
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
        <>
        {myFamily.map((member) => (
            <Member 
                key={member.id}
                member={member}
            />
        ))}
        </>
    )
}; // end of FamilyMemberList

export default FamilyMemberList;