import { useHistory } from 'react-router-dom';

function CancelBtn ({memberId, type}) {
    const history = useHistory();

    return (
        <button
            onClick={() => type === "toAppointment" ? 
            history.push(`/appointment/${memberId}`)
            :
            history.push(`/memberDetails/${memberId}`)
        }>
            Cancel
        </button>
    )
};

export default CancelBtn;