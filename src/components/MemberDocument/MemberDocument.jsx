import { useParams, useHistory, Link} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MemberHeader from '../MemberInfo/MemberHeader';
import PDFDoc from './PDFDoc';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Test from './PDFtest'
import { Button } from '@material-ui/core'
import BackBtn from '../MemberInfo/BackBtn';

function MemberDocument ({}) {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const documents = useSelector((store) => store.memberDocument);
    const member = useSelector ((store) => store.memberInfo);
    console.log('document in PDFDoc', documents);

    useEffect(() => {
        dispatch({
            type: 'FETCH_DOCUMENTS',
            payload: params.idM
        })
    }, [params.idM]);

    return (
        <>
        <div className='link'>
            <Link 
                to={`/appointment/${params.idM}`}
                
            >
                Appointment
            </Link>
        </div>
        <div className='backBtnDoc'>
        <BackBtn 
            type="toMemberDetails"
            memberId={params.idM}
        />
        </div>
        <MemberHeader member={member}/>
        <div  className='addDocBtn'>
        <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => history.push(`/addDoc/${params.idM}`)}
        >
            Add Document
        </Button>
        </div>
        <Box sx={{width: '100%'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {documents?.map((document, i) => 
                    <Grid item xs={6} key={i}> 
                    <PDFDoc 
                        document={document}
                        memberId={params.idM}
                    />
                    </Grid>
                )}
            </Grid>
        </Box>
        </>
    )
}; // end of MemberDocument

export default MemberDocument;