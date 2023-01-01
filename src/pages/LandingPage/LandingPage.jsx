import './LandingPage.scss';
import mainLogo from '../../assets/Logo/Logo2.svg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../UserContext';

export default function LandingPage(){
    
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
   
    return (
        <div className="landingpage__bg">
                <img 
                    src={mainLogo} 
                    alt="logo" 
                    className='landingpage_logo'
                    onClick={() => {
                        user.role === 'Admin'
                        ? navigate('/dashboard')
                        : navigate('/Signin')
                        }
                    }
                />
        </div>
    )
}