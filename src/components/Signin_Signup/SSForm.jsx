import './SSForm.scss';
import { Link, useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

//imports icon and logo
import logo from '../../assets/Logo/Logo.svg';
import appleIcon from '../../assets/Icon/apple_icon.svg';
import googleIcon from '../../assets/Icon/google_icon.svg';
import microIcon from '../../assets/Icon/micro_icon.svg';

 
export default function SSForm({btn_class, btn_name, microText, appleText, googleText, handleOnSubmit}){
   
    const URL = process.env.REACT_APP_SERVER_URL || '';
  
    //icons
    const apple = <img src={appleIcon} alt="apple" className='form_icon'/>
    const google = <img src={googleIcon} alt="google" className='form_icon'/>
    const micro = <img src= {microIcon} alt="micro" className='form_icon'/>

    //navigate
    const navigate = useNavigate();

    //useState
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const [email , setEmail] = useState();
    const [password, setPassword] = useState();
    const [formSubmit, setFormSubmit] = useState(false);

    useEffect(() =>{
        const jwtToken = localStorage.getItem('jwt_token');
    
        if(jwtToken){
          loadProfile(jwtToken);
        }
      }, [])
    
      const loadProfile = (jwtToken) => {
        axios
          .get(`${URL}/users`, 
            {
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            }
          )
          .then(res =>{
            setLoggedIn(true);
            setUser(res.data.user);
          })
          .catch( err => {
            console.log(err);
          })
      }

      const handleOnSignin = (event) => {
        event.preventDefault();
    
        const userInfo = {
          email : event.target.email.value,
          password : event.target.password.value
        }
    
        axios
          .post(`${URL}/login`, userInfo)
          .then(res => {
            if(res.data.accessToken){
              loadProfile(res.data.accessToken);
              localStorage.setItem('jwt_token', res.data.accessToken);
              navigate('/home');
            }
          })
          .catch(err => console.log(err));
    
      }


    const handleOnSignOut = () => {
        setLoggedIn(false);
        setUser(null);
        localStorage.removeItem('jwt_token');
    }

    return (
        <div className="form__bg">
            <div className="form__container">
                <img src={logo} alt="logo" className='logo'/>
                <div className="form__container_wrapper">
                    <form className='form'>
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
                                className={btn_class}
                                
                            >{btn_name}</Button>
                        </div>
                    </form>
                    <div className='form_sso__container'>
                            <Button className='btn_icon'>{apple} {appleText}</Button>
                            <Button className='btn_icon'>{google} {googleText} </Button>
                            <Button className='btn_icon'>{micro} {microText}</Button>
                    </div>
                </div>
                <p className='form__terms'>&nbsp;Terms of Use &nbsp;&nbsp;|&nbsp;&nbsp;     Privacy policy</p>
            </div> 
        </div>
    )
}