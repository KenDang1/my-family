import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';



function AddDocument () {
    const params = useParams();
    const dispatch = useDispatch();
    const [fileData, setFileData] = useState();
    const history = useHistory();

    // const fileChangeHandler = (evt) => {
    //     setFileData(evt.target.files[0])
    // };

    const onSubmitHandler = (evt) => {
        evt.preventDefault();

        const data = new FormData();
        console.log('data:', data);
        data.append('file', fileData)
        dispatch({
            type:'DOCUMENT_UPLOAD',
            payload: {
                data: data,
                memberId: params.idM
            }
        })
        history.push(`/document/${params.idM}`);
    };

    return (
        <>
        <div>
            <h2>Document Upload</h2>
            <form  onSubmit={onSubmitHandler} >
                <input type="file" onChange={(evt) => setFileData(evt.target.files[0])}/>
                <button type="submit">Submit</button>
            </form> 
        </div>
        </>
    )
}; // end of AddDocument

export default AddDocument;