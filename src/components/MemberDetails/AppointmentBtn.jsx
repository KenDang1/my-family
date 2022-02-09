import { useHistory, useParams } from "react-router-dom";


function AppointmentBtn (props) {
    console.log('appt Btn id', props.id);
    
    const history = useHistory();

    return (
        <>
        <button
            // When click on this button it should take user to AddMemberForm
            className={props.className}
            onClick={() => history.push(`/MUIForm/${props.id}`)}
        >
            Appointment
        </button>
        </>
    )
}; // end of AddFamily

export default AppointmentBtn;