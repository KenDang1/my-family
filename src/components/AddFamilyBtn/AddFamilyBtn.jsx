import { useHistory } from "react-router-dom";

function AddFamilyBtn (props) {
    const history = useHistory();

    return (
        <>
        <button
            // When click on this button it should take user to AddMemberForm
            className={props.className}
            onClick={() => history.push("/addMemberForm")}
        >
            Add Member
        </button>
        </>
    )
}; // end of AddFamily

export default AddFamilyBtn;