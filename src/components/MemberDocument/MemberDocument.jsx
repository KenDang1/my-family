import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MemberHeader from '../MemberInfo/MemberHeader';
import PDFDoc from './PDFDoc';


function MemberDocument () {
    const params = useParams();
    const history = useHistory();

    return (
        <>
        <button
            onClick={() => history.push(`/addDoc/${params.idM}`)}
        >
            Add Document
        </button>
        <br />
        {/* <MemberHeader /> */}
        <PDFDoc memberId={params.idM}/>
        </>
    )
}; // end of MemberDocument

export default MemberDocument;