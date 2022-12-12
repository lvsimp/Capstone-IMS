import './SideNav.scss';

import logo from '../../assets/Logo/Logo.svg';
import Btn from '../Btn/Btn';
import { useNavigate } from 'react-router-dom';

export default function SideNav({handleOnSignOut}){

    const navigate = useNavigate();

    return (
        <div className='sidebar_container'>
            <img src={logo} alt='logo' className='sidebar_logo'/>
            <ul className='sidebar_list'>
                <li className='sidebar_list__item active'>
                    <p>Dashboard</p>
                </li>
                <li className='sidebar_list__item'>
                    <p>Items</p>
                </li>
                <li className='sidebar_list__item'>
                    <p>Reports</p>
                </li>
                <li className='sidebar_list__item'>
                    <p>Suppliers</p>
                </li>
                <li className='sidebar_list__item'>
                    <p>Warehouse</p>
                </li>
                <li className='sidebar_list__item '>
                    <p>User</p>
                </li>
                <li className='sidebar_list__item '>
                    <p>Setting</p>
                </li>
            </ul>
            <Btn 
                icon='' 
                classname='btn_logout' 
                text='logout' 
                onClick={() => {
                    handleOnSignOut();
                    navigate('/');
                }}
            />
        </div>
    )
}