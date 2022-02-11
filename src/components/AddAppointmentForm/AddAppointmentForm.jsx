import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Input from '@mui/material/Input';


import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function AddAppointmentForm () {
    const dispatch = useDispatch();
    const history = useHistory();
    const memberId = useParams();
    console.log('appt member id', memberId.id);
    
    const [newAppointment, setNewAppointment] = useState({
        name: '', 
        location: '', 
        date_time: '',
        comments: ''
    });

    const handleChange = (evt, property) => {
        setNewAppointment({...newAppointment, [property]: evt.target.value})
    };

    const addNewAppointment = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_NEW_APPOINTMENT',
            payload: {
                newAppointment: newAppointment,
                memberId: memberId.id
            }
        })
        history.push(`/appointment/${memberId.id}`);
    };

    const useStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1)
        },
        leftIcon: {
            marginRight: theme.spacing(1)
        },
        rightIcon: {
            marginLeft: theme.spacing(1)
        },
        iconSmall: {
            fontSize: 20
        },
        root: {
            padding: theme.spacing(3, 2)
        },
        container: {
            display: "flex",
            flexWrap: "wrap"
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200
        }
        }));
    


    return (
        <div>
        <Paper className="container">
            <form onSubmit={addNewAppointment}>
                <Input
                    required
                    type='text'
                    placeholder="Name"
                    value={newAppointment.name}
                    onChange={(evt) => handleChange(evt, "name")}
                />
                <br />
                <Input
                    required
                    type='text'
                    placeholder="Location"
                    value={newAppointment.location}
                    onChange={(evt) => handleChange(evt, "location")}
                />
                <br />
                <Input
                    required
                    type='date'
                    placeholder="date"
                    value={newAppointment.date_time}
                    onChange={(evt) => handleChange(evt, "date_time")}

                />
                <br />
                <TextField
                    required
                    id="margin-normal"
                    name="Comments"
                    placeholder="Comments"
                    value={newAppointment.comments}
                    onChange={(evt) => handleChange(evt, "comments")}
                />
                <br />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="small"
                >
                Submit
                </Button>
            </form>
        </Paper>
    </div>
    )
}; //end of AddAppointmentForm

export default AddAppointmentForm;