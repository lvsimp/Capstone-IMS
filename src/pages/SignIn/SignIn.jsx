
import SSForm from '../../components/Signin_Signup/SSForm';

export default function Signin({handleOnSigin}){
    return(
        <SSForm  
            btn_class='btn_login' 
            btn_name='login' 
            microText='Sign in with Microsoft'
            appleText='Sign in with Apple'
            googleText='Sign in with Google'
            handleOnSubmit={handleOnSigin}
        />
    );
}