import SSForm from '../../components/Signin_Signup/SSForm';
import { useState , useContext} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';
import UserContext from '../../UserContext';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/Logo/Logo.svg';


export default function Signin(){

    //function should be here then just pass it 
    const URL = process.env.REACT_APP_SERVER_URL || '';

    const {user, setUser} = useContext(UserContext);

    const navigate = useNavigate(); 

    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formSubmit, setFormSubmit] = useState(false);




    const handleSignIn = (e , detail) =>{
        e.preventDefault();

        axios
            .post(`${URL}/login`, detail)
            .then(res =>{
                if(res.data.accessToken){
                    
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Successful',
                        text: 'Thank you for logging in.'
                    })

                    sessionStorage.setItem('token', res.data.accessToken);
                   

                    axios
                        .get(`${URL}/user-profile`, {
                            headers:{
                                Authorization: `Bearer ${sessionStorage.getItem('token')}`
                            }
                        })
                        .then(res => {
                            setUser(res.data.user)
                            if(res.data.role === 'Admin'){
                                navigate('/dashboard')
                            }else{
                                navigate('/items')
                            }
                        })
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Login failed.',
                    text: err.message
                })

               
            });
    }
   
    const detail = {
        email: email,
        password: password
    }



    return(
        user?.id
        ?
        navigate('/items')
        : 
        <div className="form__bg">
            <div className="form__container">
                <img src={logo} alt="logo" className='logo'/>
                <div className="form__container_wrapper">
                    <form 
                      className='form'
                      onSubmit={(e) => handleSignIn(e, detail )}
                    >
                        <label 
                            htmlFor="email" 
                            className='form__label'
                        > 
                            Email
                        </label>
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            className='form__input'
                            value={email}
                            onChange = {(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password" className='form__label'>
                             Password
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className='form__input'
                            value={password}
                            onChange = {(e) => setPassword(e.target.value)}
                        />
                        <div className='form_btn_container'>
                            <Button
                                className='btn_cancel'
                                as={Link}
                                to='/'
                            >Cancel</Button>
                            <Button
                                type='submit'
                                className='btn_save'  
                            >Login</Button>
                        </div>
                    </form>
                    <SSForm 
                        microText='Sign in with Microsoft'
                        appleText='Sign in with Apple'
                        googleText='Sign in with Google'
                    />
                </div>
                <p className='form__terms'>&nbsp;Terms of Use &nbsp;&nbsp;|&nbsp;&nbsp;     Privacy policy</p>
            </div> 
        </div>
    )
}