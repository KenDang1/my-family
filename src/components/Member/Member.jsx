import { Link }  from 'react-router-dom';


function Member ({member}) {

    return (
        <Link 
            to={`/memberDetails/${member.id}`}
        >
            {member.firstName} {member.lastName}
        </Link>
    )
}; // end of Member

export default Member;