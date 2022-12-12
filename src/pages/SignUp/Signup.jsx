
import SSForm from "../../components/Signin_Signup/SSForm";

export default function Signup (){
    return (
        <SSForm  
            btn_class='btn_register' 
            btn_name='register' 
            microText='Sign up with Microsoft'
            appleText='Sign up with Apple'
            googleText='Sign up with Google'
        />  
    )
}