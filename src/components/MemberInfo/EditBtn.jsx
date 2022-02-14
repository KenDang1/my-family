import { Link }  from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

function EditBtn ({ type, memberId, appointmentId, growthId }) {
    console.log('member and appoint id', memberId, appointmentId);
    return (
        <>
        <Link 
            to= { type === "editAppointment" ? 
                `/appointment/${memberId}/edit/${appointmentId}` 
            : 
                `/growth/${memberId}/edit/${growthId}` 
        }>
            <EditIcon />
        </Link>
        </>
    )
}; // end of EditAppointmentBtn

export default EditBtn;