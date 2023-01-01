import axios from "axios";
import SSForm from "../../components/Signin_Signup/SSForm";
import Swal from "sweetalert2";
import logo from '../../assets/Logo/Logo.svg';
import { Link, useNavigate } from 'react-router-dom';


export default function Signup (){

    const handleSignUp = (e , detail) =>{
        e.preventDefault();

        axios
            .post(`${URL}/register`, detail)
            .then(res =>{
                if(res.data.success){
                    Swal.fire({
                        icon: 'success',
                        title : 'Registration Successful',
                        text: `Thanks for registering ${detail.email}`
                    })

                }
            })
            .catch(err => {
                Swal.fire({
                    icon:'error',
                    title: 'Registration Failed',
                    text: err
                })
            });
    }

    // const renderSignUp =()=>(
    //     <SSForm  
    //         btn_class='btn_register' 
    //         btn_name='register' 
    //         microText='Sign up with Microsoft'
    //         appleText='Sign up with Apple'
    //         googleText='Sign up with Google'
    //         handleOnSubmit={handleSignUp}
    //     />  
    // }

    return (
        <SSForm  
            microText='Sign up with Microsoft'
            appleText='Sign up with Apple'
            googleText='Sign up with Google'
        />  
    )
}