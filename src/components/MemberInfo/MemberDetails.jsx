import React, { useEffect, useState } from 'react';
import { useHistory, useParams }  from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MemberHeader from './MemberHeader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Delete from './DeleteBtn';
import Edit from './EditBtn';

function createData(age, height, weight, date) {
    return { age, height, weight, date };
  }

function MemberDetails () {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const member = useSelector ((store) => store.memberInfo);
    console.log('member info', member);

    useEffect (() => {
        dispatch({
            type: 'FETCH_MEMBER_INFO',
            payload: params.id
        })
    }, [params.id]);


    return (
        <>
        <div>
            <button onClick={() => history.push(`/appointment/${params.id}`)} >
                Appointment
            </button>
        </div>
        <br />
        <div>
            <button>Document</button>
        </div>
        <MemberHeader member={member} className="memberHeader" />
        <br />
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100, border: 2, borderColor: 'black' }}  aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">Age&nbsp;(month)</TableCell>
                <TableCell align="center">Height&nbsp;(in)</TableCell>
                <TableCell align="center">Weight&nbsp;(lbs)</TableCell>
                <TableCell align="center">Date</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {member.map((memberInfo, index) => (
                <TableRow
                key={index}
                sx={ { border: 2, minWidth: 100 } }
                >
                <TableCell align="center">{memberInfo.age}</TableCell>
                <TableCell align="center">{memberInfo.height}</TableCell>
                <TableCell align="center">{memberInfo.weight}</TableCell>
                <TableCell align="center">{memberInfo.date}</TableCell>
                <TableCell align="center">
                    <Edit
                        memberId={params.id} 
                        growthId={memberInfo.growthId}
                    />
                </TableCell>
                <TableCell align="center">
                    <Delete 
                        type="DELETE_GROWTH_DATA"
                        memberId={params.id}
                        growthId={memberInfo.growthId}
                    />
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </>
    )
};  // end of MemberDetails

export default MemberDetails;