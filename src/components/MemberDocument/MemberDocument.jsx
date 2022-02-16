import { useParams, useHistory} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MemberHeader from '../MemberInfo/MemberHeader';
import PDFDoc from './PDFDoc';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function MemberDocument () {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const documents = useSelector((store) => store.memberDocument);
    console.log('document in PDFDoc', documents);

    useEffect(() => {
        dispatch({
            type: 'FETCH_DOCUMENTS',
            payload: params.idM
        })
    }, [params.idM]);

    return (
        <>
        <button
            onClick={() => history.push(`/addDoc/${params.idM}`)}
        >
            Add Document
        </button>
        <br />
        <Box sx={{width: '100%'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {documents?.map((document, i) => 
                    <Grid item xs={6} key={i}> 
                    <PDFDoc 
                        document={document}
                    />
                    </Grid>
                )}
            </Grid>
        </Box>
        </>
    )
}; // end of MemberDocument

export default MemberDocument;