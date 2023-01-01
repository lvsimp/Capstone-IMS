import './SSForm.scss';
import {Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';


//imports icon and logo
import appleIcon from '../../assets/Icon/apple_icon.svg';
import googleIcon from '../../assets/Icon/google_icon.svg';
import microIcon from '../../assets/Icon/micro_icon.svg';

 
export default function SSForm({ microText, appleText, googleText}){
  
    //icons
    const apple = <img src={appleIcon} alt="apple" className='form_icon'/>
    const google = <img src={googleIcon} alt="google" className='form_icon'/>
    const micro = <img src= {microIcon} alt="micro" className='form_icon'/>

    return (
      <div className='form_sso__container'>
              <Button className='btn_icon'>{apple} {appleText}</Button>
              <Button className='btn_icon'>{google} {googleText} </Button>
              <Button className='btn_icon'>{micro} {microText}</Button>
      </div>       
    )
}