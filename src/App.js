import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//import component and pages
import Signin from './pages/SignIn/SignIn';
import Signup from  './pages/SignUp/Signup';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Signin' element={<Signin />}/>
        <Route path='/Signup' element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
