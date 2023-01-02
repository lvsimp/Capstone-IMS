import './PageHeader.scss';
import avatar from '../../assets/Icon/user-solid.svg';
import UserContext from '../../UserContext';
import { useContext} from 'react';



export default function PageHeader({page_title }){

    const {user} = useContext(UserContext);

    return ( 
       <div className='page_header'>
            {page_title} 
            <div className='user_profile'>
                <div className='user_details'>
                    <p>Hey! <span>{user?.name}</span></p>
                    <p>{user?.role}</p>
                </div>
                <img src={avatar} alt='user' className='avatar'/>
            </div>
       </div>

    );
}