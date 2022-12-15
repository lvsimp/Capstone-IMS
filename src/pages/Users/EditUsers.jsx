import UserForm from "../../components/UserForm/UserForm";
import axios from "axios";
import { useNavigate , useParams} from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditUsers(){

    const navigate = useNavigate();
    const {userId} = useParams();
    const [userDetail, setUserDetail] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/users/${userId}`)
            .then(res => {
                setUserDetail(res.data[0]);
            })
            .catch(err => console.log(`Something is wrong. Please try again later. ${err}`))
    },[userId])

    const handleOnUpdateUser = (event, userDetail ) =>{

        event.preventDefault();

        axios
            .put(`http://localhost:8000/users`, userDetail)
            .then(res => {
                console.log(res.data)
                alert('a user is added.');
                navigate('/user');
            })
            .catch(err => console.log(`Something is wrong please try again later ${err}`));

    }

    return(
        <>
            {
                userDetail &&
                <UserForm onHandleSubmit={handleOnUpdateUser} details={userDetail}/>
            }
        </>
    );
}