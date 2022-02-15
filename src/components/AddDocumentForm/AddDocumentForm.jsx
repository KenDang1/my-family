import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';



function AddDocument () {
    const params = useParams();
    const dispatch = useDispatch();
    const [fileData, setFileData] = useState();

    const fileChangeHandler = (evt) => {
        setFileData(evt.target.files[0])
    }

    const onSubmitHandler = (evt) => {
        evt.preventDefault();

        const data = new FormData();

        data.append('image', fileData)

        dispatch({
            type:'DOCUMENT_UPLOAD',
            payload: data
        })
    }

    return (
        <>
        <div>
            <h2>Document Upload</h2>
            <form  onSubmit={onSubmitHandler} >
                <br></br>
                <input type="file" onChange={fileChangeHandler}/>
                <button type="submit">Submit</button>
            </form> 
        </div>
        </>
    )
}; // end of AddDocument

export default AddDocument;