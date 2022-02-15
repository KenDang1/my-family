import { useDispatch } from 'react-redux';
// import { useHistory, useParams } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@material-ui/core';
import Swal from 'sweetalert2'

function DeleteBtn ({type, appointmentId, memberId, payload, growthId}) {
    const dispatch = useDispatch();
    console.log('delete payload', payload);
    return (
        <>
        <Button
            onClick={() => 
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        type === "DELETE_APPOINTMENT" ? 
                        dispatch({
                            type,
                            payload: {
                                appointmentId: appointmentId,
                                memberId: memberId
                            }
                        })
                        :
                        dispatch({
                            type,
                            payload: {
                                growthId: growthId,
                                memberId: memberId
                            }
                        })
                        // Swal.fire(
                        //     'Deleted!',
                        //     'Your file has been deleted.',
                        //     'success'
                        // )
                    }
                })}>
            <DeleteForeverIcon fontSize="medium"/>
        </Button>
        </>
    )
}; // end of Delete

export default DeleteBtn;
