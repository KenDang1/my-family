import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function AddAppointmentForm () {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [newAppointment, setNewAppointment] = useState({
        name: '', 
        location: '', 
        date_time: '',
        comments: ''
    });

    const handleChange = (evt, property) => {
        setNewAppointment({...newAppointment, [property]: evt.target.value})
    }

    const addNewAppointment = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_NEW_APPOINTMENT',
            payload: newAppointment
        })
        // history.push('/user');
    }

    return (
        <>
        <form className="addAppt" onSubmit={addNewAppointment}>
            <input
                required
                type='text'
                placeholder="Name"
                value={newAppointment.name}
                onChange={(evt) => handleChange(evt, "name")}
            />
            <input
                required
                type='text'
                placeholder="Location"
                value={newAppointment.location}
                onChange={(evt) => handleChange(evt, "location")}
            />
            <input
                required
                type='date'
                placeholder="date"
                value={newAppointment.date_time}
                onChange={(evt) => handleChange(evt, "date_time")}
            />
            <textarea
                required
                type='textarea'
                placeholder="Comments"
                value={newAppointment.comments}
                onChange={(evt) => handleChange(evt, "comments")}
            />
            <br />
            <button>Submit</button>
        </form>
        </>
    )
}; //end of AddAppointmentForm

export default AddAppointmentForm;