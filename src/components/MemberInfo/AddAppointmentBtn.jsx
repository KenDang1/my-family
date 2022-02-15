import { useHistory } from "react-router-dom";
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import { Button } from '@material-ui/core';

function AddAppointmentBtn (props) {
    console.log('appt Btn id', props.memberId);
    
    const history = useHistory();

    return (
        <>
        <Button
            variant="contained"
            color="primary"
            size="small"
            className={props.className}
            onClick={() => history.push(`/addAppointmentForm/${props.memberId}`)}
        >
            <AddAlarmIcon fontSize="medium"/>Appointment
        </Button>
        </>
    )
}; // end of AddAppointmentBtn

export default AddAppointmentBtn;