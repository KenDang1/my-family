import { useHistory } from 'react-router-dom';
import {Button} from '@material-ui/core'
import CancelIcon from '@mui/icons-material/Cancel';

function CancelBtn ({memberId, type}) {
    const history = useHistory();

    return (
        <Button
            onClick={() => type === "toAppointment" ? 
            history.push(`/appointment/${memberId}`)
            :
            history.push(`/memberDetails/${memberId}`)
        }>
            <CancelIcon fontSize='medium'/>
        </Button>
    )
};

export default CancelBtn;