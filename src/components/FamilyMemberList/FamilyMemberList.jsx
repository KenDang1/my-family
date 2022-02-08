import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Member from '../Member/Member'


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
            <li key={member.id}>
                <Member 
                    member={member}
                />
            </li>
        ))}

        </>
    )
}; // end of FamilyMemberList

export default FamilyMemberList;