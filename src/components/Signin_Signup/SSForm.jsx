import './SSForm.scss';
// import { useState } from 'react';
import Btn from '../Btn/Btn';
import { useNavigate } from 'react-router-dom';

//imports icon and logo
import logo from '../../assets/Logo/Logo.svg';
import appleIcon from '../../assets/Icon/apple_icon.svg';
import googleIcon from '../../assets/Icon/google_icon.svg';
import microIcon from '../../assets/Icon/micro_icon.svg';

 
export default function SSForm({btn_class, btn_name, microText, appleText, googleText, handleOnSubmit}){
    //icons
    const apple = <img src={appleIcon} alt="apple" className='form_icon'/>
    const google = <img src={googleIcon} alt="google" className='form_icon'/>
    const micro = <img src= {microIcon} alt="micro" className='form_icon'/>

    //navigate
    const navigate = useNavigate();

    return (
        <div className="form__bg">
            <div className="form__container">
                <img src={logo} alt="logo" className='logo'/>
                <div className="form__container_wrapper">
                    <form className='form'>
                        <label htmlFor="email" className='form__label'> 
                            Email
                        </label>
                        <input type="text" name="email" id="email" className='form__input' />
                        <label htmlFor="password" className='form__label'>
                             Password
                        </label>
                        <input type="password" name="password" id="password" className='form__input'/>
                        <div className='form_btn_container'>
                            <Btn 
                                icon='' 
                                classname='btn_cancel' 
                                text='cancel' 
                                onClick={() => navigate('/')}
                            />
                            <Btn 
                                icon='' 
                                classname={btn_class} 
                                text={btn_name} 
                                onClick={() => {
                                    handleOnSubmit();
                                    navigate('/home')
                                }}
                            />
                        </div>
                    </form>
                    <div className='form_sso__container'>
                            <Btn icon={apple}  text={appleText} classname='btn_icon'/>
                            <Btn icon={google}  text={googleText} classname='btn_icon'/>
                            <Btn icon={micro}  text={microText} classname='btn_icon'/>
                    </div>
                </div>
                <p className='form__terms'>&nbsp;Terms of Use &nbsp;&nbsp;|&nbsp;&nbsp;     Privacy policy</p>
            </div> 
        </div>
    )
}