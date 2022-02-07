import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function AddMemberForm () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [newMember, setNewMember] = useState({firstName: '', lastName: '', birthday: ''})

    const handleChange = (evt, property) => {
        setNewMember({...newMember, [property]: evt.target.value})
    }

    const addNewMember = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_NEW_MEMBER',
            payload: newMember
        })
        history.push('/');
    }

    return (
        <>
        <form className="addFamMem" onSubmit={addNewMember}>
            <input
                required
                type='text'
                placeholder="First Name"
                value={newMember.firstName}
                onChange={(evt) => handleChange(evt, "firstName")}
            />
            <input
                required
                type='text'
                placeholder="Last Name"
                value={newMember.lastName}
                onChange={(evt) => handleChange(evt, "lastName")}
            />
            <input
                required
                type='integer'
                placeholder="Birthday"
                value={newMember.birthday}
                onChange={(evt) => handleChange(evt, "birthday")}
            />
            <button>Submit</button>
        </form>
        </>
    )
}; //end of AddMemberForm

export default AddMemberForm;