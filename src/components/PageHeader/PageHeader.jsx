import './PageHeader.scss';
import UserContext from '../../UserContext';
import { useContext} from 'react';



export default function PageHeader({page_title }){

    const {user} = useContext(UserContext);
    const URL = process.env.REACT_APP_SERVER_URL || '';

    return ( 
       <div className='page_header'>
            {page_title} 
            <div className='user_profile'>
                <div className='user_details'>
                    <p>Hey! <span>{user?.name}</span></p>
                    <p>{user?.role}</p>
                </div>
                <img src={`${URL}/${user?.avatar}`} alt='user' className='avatar'/>
            </div>
       </div>

    );
}