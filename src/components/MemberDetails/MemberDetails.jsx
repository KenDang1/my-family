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
import AppointmentBtn from './AppointmentBtn';


function createData(age, height, weight, date) {
    return { age, height, weight, date };
  }

function MemberDetails () {
    const { id } = useParams();
    console.log('member id', id);
    const dispatch = useDispatch();

    const member = useSelector ((store) => store.memberInfo);
    console.log('member info', member);

    useEffect (() => {
        dispatch({
            type: 'FETCH_MEMBER_INFO',
            payload: id
        })
    }, []);


    return (
        <>
        <div>
            <AppointmentBtn 
                className="appointmentBtn" 
                id={id}
            />
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
                <TableCell align="center">{memberInfo.to_char}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </>
    )
};  // end of MemberDetails

export default MemberDetails;