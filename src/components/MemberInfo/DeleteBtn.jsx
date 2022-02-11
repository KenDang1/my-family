import { useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";


function DeleteBtn ({type, appointmentId, memberId, payload, growthId}) {
    const dispatch = useDispatch();
    console.log('delete payload', payload);
    return (
        <>
        <button 
            onClick={() => type === "DELETE_APPOINTMENT" ? 
                dispatch({
                    type,
                    payload: {
                        appointmentId: appointmentId,
                        memberId: memberId
                    }
                })
                :
                dispatch({
                    type,
                    payload: {
                        growthId: growthId,
                        memberId: memberId
                    }
                })
        }>
            Delete
        </button>
        </>
    )
}; // end of Delete

export default DeleteBtn;
