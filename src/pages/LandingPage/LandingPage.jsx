import './LandingPage.scss';
import mainLogo from '../../assets/Logo/Logo2.svg';
import { useNavigate } from 'react-router-dom';

export default function LandingPage({status}){
    
    const navigate = useNavigate();
   
    return (
        <div className="landingpage__bg">
                <img 
                    src={mainLogo} 
                    alt="logo" 
                    className='landingpage_logo'
                    onClick={() => {
                         status 
                        ? navigate('/dashboard')
                        : navigate('/Signin')
                        }
                    }
                />
        </div>
    )
}