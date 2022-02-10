import { useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";


function DeleteBtn ({appointmentId, id}) {
    console.log('apptId', appointmentId);
    const dispatch = useDispatch();
    const history = useHistory();

    const removeAppointment = (appointmentId) => {
        console.log('In removeShelfItem');
        dispatch({
            type:   'DELETE_APPOINTMENT',
            payload: {
                appointmentId: appointmentId, 
                memberId: id
            }
        })
    }

    return (
        <>
        <button onClick={() => removeAppointment(appointmentId)}>Delete</button>
        </>
    )
}; // end of Delete

export default DeleteBtn;