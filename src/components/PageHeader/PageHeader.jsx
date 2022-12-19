import './PageHeader.scss';
import avatar from '../../assets/Icon/user-solid.svg';


export default function PageHeader({page_title }){


    return ( 
       <div className='page_header'>
            {page_title} 
            <div className='user_profile'>
                <div className='user_details'>
                    <p>Hey! <span>Laura</span></p>
                    <p>Admin</p>
                </div>
                <img src={avatar} alt='user' className='avatar'/>
            </div>
       </div>

    );
}