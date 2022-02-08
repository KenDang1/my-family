import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';



function Member ({member}) {
    const history = useHistory();

    return (
        <>
        <button key={member.id} onClick={() => history.push(`/memberDetails/${member.id}`)}>
            {member.firstName} {member.lastName}
        </button>
        </>
    )
}; // end of Member

export default Member;