import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Link }  from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MemberHeader from './MemberHeader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppointmentBtn from './AddAppointmentBtn';
import Delete from './DeleteBtn';
import Edit from './EditAppointmentBtn';



function createData(name, location, date, comments) {
    return { name, location, date, comments };
    }

function MemberAppointment () {
    const params = useParams();
    console.log('memberId in memberAppointment', params.id);
    const dispatch = useDispatch();
    const member = useSelector ((store) => store.memberInfo);
    const appointment = useSelector ((store) => store.memberAppointment);
    const payload = {}
    
    useEffect (() => {
        dispatch({
            type: 'FETCH_MEMBER_APPOINTMENT',
            payload: params.id
        })
    }, [params.id]);


    return (
        <>
        <div>
            <AppointmentBtn 
                className="appointmentBtn" 
                id={params.id}
            />
        </div>
        <br />
        <div>
            <button>Document</button>
        </div>
        <MemberHeader member={member} className="memberHeader" />
        <br />
        <TableContainer component={Paper}>
            <h3>Appointment</h3>
        <Table sx={{ minWidth: 100, border: 2, borderColor: 'black' }}  aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Where</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Comments</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {appointment.map((appointment, index) => (
                <TableRow
                key={index}
                sx={ { border: 2, minWidth: 100 } }
                >
                <TableCell align="center">{appointment.name}</TableCell>
                <TableCell align="center">{appointment.location}</TableCell>
                <TableCell align="center">{appointment.date}</TableCell>
                <TableCell align="center">{appointment.comments}</TableCell>
                <TableCell align="center">
                    <Edit 
                        type="editAppointment"
                        memberId={params.id} 
                        appointmentId={appointment.id}
                    />
                </TableCell>
                <TableCell align="center">
                    <Delete 
                        type="DELETE_APPOINTMENT"
                        appointmentId={appointment.id}
                        memberId={params.id}
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

export default MemberAppointment;