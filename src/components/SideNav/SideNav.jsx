import './SideNav.scss';


import {Link, useLocation } from 'react-router-dom';
import {Button} from 'react-bootstrap';

//import logo and icon
import logo from '../../assets/Logo/Logo.svg';
import dashboard from '../../assets/Icon/table-columns-solid.svg';
import items from '../../assets/Icon/cart-flatbed-solid.svg';
import report from '../../assets/Icon/chart-simple-solid.svg';
import supplier from '../../assets/Icon/truck-moving-solid.svg';
import warehouse from '../../assets/Icon/warehouse-solid.svg';
import users from '../../assets/Icon/users-solid.svg';
import setting from '../../assets/Icon/gears-solid.svg';


export default function SideNav({handleOnSignOut}){

    const location = useLocation();


    return (
        <div className={
                location.pathname !== '/' 
                ? 'sidebar_container'
                :'sidebar_container__hidden'
            }>
            <img src={logo} alt='logo' className='sidebar_logo'/>
            <ul className='sidebar_list'>
                <li>
                    <Link className='sidebar_list__item active' to='/dashboard'>
                        <img src={dashboard} alt='dashboard' className='sidebar_icons' /> 
                        <span> Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link className='sidebar_list__item' to='/items'>
                        <img src={items} alt='items' className='sidebar_icons' />
                        <span>Items</span>
                    </Link>
                </li>
                <li>
                    <Link className='sidebar_list__item' to='/reports'>
                        <img src={report} alt='report' className='sidebar_icons' />
                        <span>Reports</span>
                    </Link>
                </li>
                <li>
                    <Link className='sidebar_list__item' to='/supplier'>
                        <img src={supplier} alt='supplier' className='sidebar_icons' />
                        <span>Suppliers</span>
                    </Link>
                </li>
                <li>
                    <Link className='sidebar_list__item' to='/warehouse'>
                        <img src={warehouse} alt='warehouse' className='sidebar_icons' />
                        <span>Warehouse</span>
                    </Link>
                </li>
                <li>
                    <Link className='sidebar_list__item' to='/user'>
                        <img src={users} alt='users' className='sidebar_icons' />
                        <span>User</span>
                    </Link>
                </li>
                <li>
                    <Link className='sidebar_list__item' to=''>
                        <img src={setting} alt='setting' className='sidebar_icons' />
                        <span>Setting</span>
                    </Link>
                </li>
                <li className='sidebar_list__item '>
                    <Button className='btn btn_logout' as={Link} to='/'>Logout</Button>  
                </li>
            </ul>
        </div>
    )
}