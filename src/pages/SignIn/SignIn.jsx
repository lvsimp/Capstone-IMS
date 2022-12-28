import SSForm from '../../components/Signin_Signup/SSForm';
import { useState } from 'react';
import axios from 'axios';

export default function Signin(){

    //function should be here then just pass it 
    const URL = process.env.REACT_APP_SERVER_URL || '';

    const [isSignedUp, setIsSignedUp] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isSignedInError, setIsSignedInError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = (e , detail) =>{
        e.preventDefault();

        axios
            .post(`${URL}/register`, detail)
            .then(res =>{
                if(res.data.success){
                    setIsSignedUp(true);
                }
            })
            .catch(err => console.log(err));
    }

    const handleSignIn = (e , detail) =>{
        e.preventDefault();

        axios
            .post(`${URL}/login`, detail)
            .then(res =>{
                console.log(res.data)
                if(res.data.accessToken){
                    setIsSignedIn(true);
                    sessionStorage.setItem('token', res.data.accessToken);
                    setIsSignedInError(false);
                    setErrorMessage('');
                }
            })
            .catch(err => {
                console.log(err.response);
                setIsSignedInError(true);
                setErrorMessage(err.response.data.message);
            });
    }
   
    const renderSignIn =()=>(
        <SSForm  
            btn_class='btn_login' 
            btn_name='login' 
            microText='Sign in with Microsoft'
            appleText='Sign in with Apple'
            googleText='Sign in with Google'
            handleOnSubmit={handleSignIn}
            isSignedIn={isSignedInError}
            errorMessage={errorMessage}
        />
        
    )
    const renderSignUp =()=>(
        <SSForm  
            btn_class='btn_register' 
            btn_name='register' 
            microText='Sign up with Microsoft'
            appleText='Sign up with Apple'
            googleText='Sign up with Google'
            handleOnSubmit={handleSignUp}
        />  
    )

        if(!isSignedUp) return renderSignUp();
        if(!isSignedIn) return renderSignIn();

    return(
        <>
        </>
    )
}