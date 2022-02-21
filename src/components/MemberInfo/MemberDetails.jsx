import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Link }  from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MemberHeader from './MemberHeader';
import { Button, Icon, TextField, Typography } from "@material-ui/core";
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Delete from './DeleteBtn';
// import Edit from './EditBtn';
import GrowthChart from '../GrowthChart/GrowthChart'
import BackBtn from './BackBtn'
import DetailTable from './MemberDetailTable';
import './MemberInfo.css';

function MemberDetails () {
    const params = useParams();
    console.log('memberid in detail page', params);
    const dispatch = useDispatch();
    const history = useHistory();

    const member = useSelector ((store) => store.memberInfo);
    console.log('member info', member);

    useEffect (() => {
        dispatch({
            type: 'FETCH_MEMBER_INFO',
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
        <br />
            <Link
                to={`/document/${params.idM}`}
            >
                Document
            </Link>
        </div>
        <BackBtn type="toUserPage"/>
        <MemberHeader member={member} className="memberHeader" />
        <br />
        {member.length === 0 || member[0].date === null ?
            ""
        :
        <GrowthChart 
            memberID={params.idM}
        />}
        <br />
        <div className='addGrowth'>
        <Button 
            variant="contained"
            color="primary"
            size="small"
            onClick={() => history.push(`/addGrowthForm/${params.idM}`)}
        >
            <DataSaverOnIcon />
        </Button>
        </div>
        {member.length === 0 || member[0].date === null ?
            "" 
        :
        <div className="tableContainer">
            <DetailTable 
                member={member}
            />
        </div>
        }
        </>
    )
};  // end of MemberDetails

export default MemberDetails;