import './Home.scss';

import SideNav from '../../components/SideNav/SideNav';
import Signin from '../SignIn/SignIn';



export default function Home({handleOnSignOut, loggedIn, user}){
    return (

        <div className='home_page'>
            <SideNav handleOnSignOut={handleOnSignOut}/>
            <div className='home_page__wrapper'>
                <Signin />
            </div>
        </div>

    );
}