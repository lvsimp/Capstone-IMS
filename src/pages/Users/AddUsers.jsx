import UserForm from "../../components/UserForm/UserForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddUsers(){
    const navigate = useNavigate();


    const handleOnAddUser = (event, userDetail ) =>{

        event.preventDefault();

        axios
            .post(`http://localhost:8000/users`, userDetail)
            .then(res => {
                console.log(res.data)
                alert('a user is added.');
                navigate('/user');
            })
            .catch(err => console.log(`Something is wrong please try again later ${err}`));

    }

    return(
        <UserForm onHandleSubmit={handleOnAddUser}/>
    );
}