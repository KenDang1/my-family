import { Link }  from 'react-router-dom';

function EditAppointmentBtn ({ memberId, appointmentId }) {
    console.log('member and appoint id', memberId, appointmentId);
    return (
        <>
        <Link to={`/appointment/${memberId}/edit/${appointmentId}`}>
            Edit
        </Link>
        </>
    )
}; // end of EditAppointmentBtn

export default EditAppointmentBtn;