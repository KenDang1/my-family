import { useHistory } from "react-router-dom";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {Button} from '@material-ui/core'

function AddFamilyBtn (props) {
    const history = useHistory();

    return (
        <>
        <Button
            // When click on this button it should take user to AddMemberForm
            className={props.className}
            onClick={() => history.push("/addMemberForm")}
        >
            <PersonAddIcon />
        </Button>
        </>
    )
}; // end of AddFamily

export default AddFamilyBtn;