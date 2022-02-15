import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

function BackBtn ({type, memberId}) {
    const history = useHistory();

    return (
        <Button
            variant="contained"
            color="primary"
            size="small"
            className='backBtn'
            onClick={() => type === "toUserPage" ? 
            history.push(`/user`)
            :
            history.push(`/memberDetails/${memberId}`)
        }> 
            Back
        </Button>
    )
};

export default BackBtn;