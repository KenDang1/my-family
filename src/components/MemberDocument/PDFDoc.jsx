import React from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function PDFDoc ({ memberId }) {
    const dispatch = useDispatch();
    const documents = useSelector((store) => store.memberDocument);
    console.log('document in PDFDoc', documents);


    useEffect(() => {
        dispatch({
            type: 'FETCH_DOCUMENTS',
            payload: memberId
        })
    }, [memberId]);

    return (
        <>
        </>
    )
};

export default PDFDoc;
