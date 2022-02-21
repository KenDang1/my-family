import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Delete from './DeleteBtn';
import Edit from './EditBtn';
import { Button } from '@material-ui/core'
import { useHistory, useParams, Link }  from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


function MemberDetails ({ member }) {

    return (
        <>
        <TableContainer component={Paper} className="tableContainer">
            <h3>Growth Table</h3>
        <Table sx={{ minWidth: 100, border: 2, borderColor: 'black' }}  aria-label="simple table">
            <TableHead className='tableHead'>
            <TableRow>
                <TableCell align="center">Height&nbsp;(in)</TableCell>
                <TableCell align="center">Weight&nbsp;(lbs)</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {member.map((memberInfo, index) => (
                <TableRow
                key={index}
                sx={ { border: 2, minWidth: 100 } }
                >
                <TableCell align="center">{memberInfo.height}</TableCell>
                <TableCell align="center">{memberInfo.weight}</TableCell>
                <TableCell align="center">{memberInfo.date}</TableCell>
                <TableCell align="center">
                    { memberInfo.age === null ? 
                        null
                        :
                        <Edit
                        memberId={memberInfo.memberId} 
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
                        memberId={memberInfo.memberId}
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
}; // end of the MemberDetails

export default MemberDetails;