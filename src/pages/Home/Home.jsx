import './Home.scss';
import mainLogo from '../../assets/Logo/Logo2.svg';
import { useNavigate } from 'react-router-dom';

export default function Home(){
    
    const navigate = useNavigate();

    return (
        <div className="home__bg">
            <div className="home__container">
                <img src={mainLogo} alt="logo" className='home_logo' onClick={() => navigate('/Signin')}/>
            </div>
        </div>
    )
}