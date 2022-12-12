import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

//import pages
import Signin from './pages/SignIn/SignIn';
import Signup from  './pages/SignUp/Signup';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() =>{
    const jwtToken = localStorage.getItem('jwt_token');

    if(jwtToken){
      loadProfile(jwtToken);
    }
  }, [])

  const loadProfile = (jwtToken) => {
    axios
      .get('http//localhost:8000/users', 
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then(res =>{
        setLoggedIn(true);
        setUser(res.data.user);
      })
      .catch( err => {
        console.log(err);
      })
  }

  const handleOnSignin = (event , userInfo) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8000/login`, userInfo)
      .then(res => {
        if(res.data.accessToken){
          loadProfile(res.data.accessToken);
          localStorage.setItem('jwt_token', res.data.accessToken);
        }
      })
      .catch(err => console.log(err));

  }


  const handleOnSignOut = () => {
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem('jwt_token');
  }



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route 
          path='/Signin' 
          element={
            <Signin 
              handleOnSignin={handleOnSignin}  
            />
          }/>
        <Route path='/Signup' element={<Signup />}/>
        <Route 
          path='/home' 
          element={
          <Home 
            loggedIn={loggedIn}
            user={user}
            handleOnSignOut={handleOnSignOut}
          />
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
