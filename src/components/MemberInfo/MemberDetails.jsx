import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Link }  from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MemberHeader from './MemberHeader';
import { Button, Icon, TextField, Typography } from "@material-ui/core";
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Delete from './DeleteBtn';
import Edit from './EditBtn';
import GrowthChart from '../GrowthChart/GrowthChart'
import BackBtn from './BackBtn'

function MemberDetails () {
    const params = useParams();
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
        <div>
            <Link 
                to={`/appointment/${params.idM}`}
                
            >
                Appointment
            </Link>
        </div>
        <br />
        <div>
            <button>Document</button>
        </div>
        <BackBtn type="toUserPage"/>
        <MemberHeader member={member} className="memberHeader" />
        <br />
        <Button 
            variant="contained"
            color="primary"
            size="small"
            onClick={() => history.push(`/addGrowthForm/${params.idM}`)}
        >
            <DataSaverOnIcon />
        </Button>
        <br />
        {member[0].age === null ?
            ""
        :
        <GrowthChart 
            memberID={params.idM}
        />}
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
                    { memberInfo.age === null ? 
                        null
                        :
                        <Edit
                        memberId={params.idM} 
                        growthId={memberInfo.growthId}
                    /> 
                    }
                </TableCell>
                <TableCell align="center">
                    { memberInfo.age === null ? 
                        null
                        :
                        <Delete 
                        type="DELETE_GROWTH_DATA"
                        memberId={params.idM}
                        growthId={memberInfo.growthId}
                    /> 
                    }
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