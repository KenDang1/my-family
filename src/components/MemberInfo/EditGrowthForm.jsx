import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditGrowthForm () {
    const dispatch = useDispatch();
    const history = useHistory();
    const {idM, idG} = useParams();   // { id: 2 }
    console.log('growthId in editForm', idM, idG);
    // Grab the "selected member appointment" from the redux store
    const selectedMember = useSelector(store => store.selectedMember);
    console.log('selcted member for update growth', selectedMember);
    useEffect(() => {
        dispatch({
            type: 'FETCH_SELECTED_MEMBER_GROWTH',
            payload: {
                memberId: idM,
                growthId: idG
            }
        });
    }, [idM]); // 👈 fetch the member again, if the url changes

    // Called when the submit button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();

    // Save the updated `activeStudent`
    // to the db (via sagas, axios)
        dispatch({
        type: 'SAVE_MEMBER_GROWTH',
        payload: selectedMember
        });

    // go back home
    // The saveStudent saga will call FETCH_STUDENTS
    // so the list view will be up to date
        history.push(`/memberDetails/${idM}`);
    };


    return (
    <>
        <h2>Edit Growth</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="integer"
                // The big change: 
                // bind inputs to redux (instead of local state)
                value={selectedMember.age}
                onChange={(evt) => dispatch({
                type: 'UPDATE_MEMBER',
                payload: { age: evt.target.value }
                })}
            />
            <input
                type="integer"
                value={selectedMember.height}
                onChange={(evt) => dispatch({
                type: 'UPDATE_MEMBER',
                payload: { height: evt.target.value }
                })}
            />
            <input
                type="integer"
                value={selectedMember.weight}
                onChange={(evt) => dispatch({
                type: 'UPDATE_MEMBER',
                payload: { weight: evt.target.value }
                })}
            />
            <input
                type="date"
                date-format="MON DD, YYYY"
                value={selectedMember.date}
                onChange={(evt) => dispatch({
                type: 'UPDATE_MEMBER',
                payload: { date: evt.target.value }
                })}
            />
      
            <input
                type='submit'
                value='Update GrowthInfo'
            />
        </form>
    </>
    );
}

export default EditGrowthForm;