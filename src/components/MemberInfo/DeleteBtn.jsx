import { useDispatch } from 'react-redux';

function DeleteBtn () {

    const removeShelfItem = (id) => {
        console.log('In removeShelfItem');
        dispatch({
            type:   'DELETE_ITEM',
            payload: {id: id}
        })
    }

    return (
        <>
        
        </>
    )
}; // end of Delete

export default DeleteBtn;