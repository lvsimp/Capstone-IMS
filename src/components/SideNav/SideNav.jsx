import './SideNav.scss';
import '../../style/btn.scss';
import UserContext from '../../UserContext';
import {useContext} from 'react';
import {Link, useLocation, useNavigate ,useMatch,} from 'react-router-dom';
import {Button} from 'react-bootstrap';

//import logo and icon
import logo from '../../assets/Logo/Logo2.svg';
import dashboard from '../../assets/Icon/table-columns-solid.svg';
import items from '../../assets/Icon/cart-flatbed-solid.svg';
import report from '../../assets/Icon/chart-simple-solid.svg';
import supplier from '../../assets/Icon/truck-moving-solid.svg';
import warehouse from '../../assets/Icon/warehouse-solid.svg';
import users from '../../assets/Icon/users-solid.svg';
import logout from '../../assets/Icon/right-from-bracket-solid.svg';
import category from '../../assets/Icon/sitemap-solid.svg';
import order from '../../assets/Icon/receipt-solid.svg';

export default function SideNav({handleOnSignOut}){

    const {user} = useContext(UserContext);
    const location = useLocation();
    const match = useMatch('/items/:itemId');
    const nav = useNavigate();

    return (
        <div className={
                location.pathname === '/' || match || location.pathname ==='/Signin'
                ? 'sidebar_container__hidden'
                :'sidebar_container'
            }>
            <img src={logo} alt='logo' className='sidebar_logo' onClick={() => { nav('/dashboard')}}/>
            {
                user?.role === 'Admin'
                ?
                <>
                    <Link className={
                        location.pathname === '/dashboard'
                        ? 'sidebar_list__item active'
                        : 'sidebar_list__item'
                    } to='/dashboard'>
                        <img src={dashboard} alt='dashboard' className='sidebar_icons' /> 
                        <span> Dashboard</span>
                    </Link>
                    <Link className={
                        location.pathname === '/items'
                        ? 'sidebar_list__item active'
                        : 'sidebar_list__item'
                    } to='/items'>
                        <img src={items} alt='items' className='sidebar_icons' />
                        <span>Items</span>
                    </Link>
                    <Link className={
                        location.pathname === '/reports'
                        ? 'sidebar_list__item active'
                        : 'sidebar_list__item'
                    } to='/reports'>
                        <img src={report} alt='report' className='sidebar_icons' />
                        <span>Reports</span>
                    </Link>
                    <Link className={
                        location.pathname === '/category'
                        ? 'sidebar_list__item active'
                        : 'sidebar_list__item'
                    } to='/category'>
                        <img src={category} alt='category' className='sidebar_icons' />
                        <span>Categories</span>
                    </Link>
                    <Link className={
                        location.pathname === '/supplier'
                        ? 'sidebar_list__item active'
                        : 'sidebar_list__item'
                    } to='/supplier'>
                        <img src={supplier} alt='supplier' className='sidebar_icons' />
                        <span>Suppliers</span>
                    </Link>
                    <Link className={
                        location.pathname === '/warehouse'
                        ? 'sidebar_list__item active'
                        : 'sidebar_list__item'
                    } to='/warehouse'>
                        <img src={warehouse} alt='warehouse' className='sidebar_icons' />
                        <span>Warehouse</span>
                    </Link>
                    <Link className={
                        location.pathname === '/user'
                        ? 'sidebar_list__item active'
                        : 'sidebar_list__item'
                    } to='/user'>
                        <img src={users} alt='users' className='sidebar_icons' />
                        <span>User</span>
                    </Link>
                </>
                :
                <>
                    <Link className={
                        location.pathname === '/items'
                        ? 'sidebar_list__item active'
                        : 'sidebar_list__item'
                    } to='/items'>
                        <img src={items} alt='items' className='sidebar_icons' />
                        <span>Items</span>
                    </Link>
                    <Link className={
                        location.pathname === '/orders'
                        ? 'sidebar_list__item active'
                        : 'sidebar_list__item'
                    } to='/orders'>
                        <img src={order} alt='order' className='sidebar_icons' />
                        <span>Orders</span>
                    </Link>
                </>
            }
            <Button 
            
                className='sidebar_list__item btn' 
                onClick={() => {
                    handleOnSignOut();
                    nav('/');
                }}
            >
                <img src={logout} alt='logout' className='sidebar_icons'/>
                Logout
            </Button>  
        </div>
    )
}