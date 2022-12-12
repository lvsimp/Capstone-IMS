import './LandingPage.scss';
import mainLogo from '../../assets/Logo/Logo2.svg';
import { useNavigate } from 'react-router-dom';

export default function LandingPage(){
    
    const navigate = useNavigate();

    return (
        <div className="landingpage__bg">
            <div className="landingpage__container">
                <img src={mainLogo} alt="logo" className='landingpage_logo' onClick={() => navigate('/Signin')}/>
            </div>
        </div>
    )
}