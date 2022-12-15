import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//import pages
import Signin from './pages/SignIn/SignIn';
import Signup from  './pages/SignUp/Signup';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import AddSupplier from './pages/Supplier/AddSupplier';
import EditSupplier from './pages/Supplier/EditSupplier';
import SupplierDetails from './pages/Supplier/SupplierDetails';
import SideNav from './components/SideNav/SideNav';
import SupplierList from './components/SupplierList/SupplierList';
import WarehouseList from './components/WarehouseList/WarehouseList';
import AddWarehouse from './pages/Warehouse/AddWarehouse';
import EditWarehouse from './pages/Warehouse/EditWarehouse';
import AddUsers from './pages/Users/AddUsers';
import UserLists from './pages/Users/UserLists';
import EditUsers from './pages/Users/EditUsers';
import UserDetails from './pages/Users/UserDetails';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <SideNav />
        <div className="app__wrapper">
          <Routes>
              <Route path='/' element={<LandingPage />}/>
              <Route path='/Home' element={<Home />} />
              <Route path='/supplier' element={<SupplierList />} />
              <Route path ='/supplier/:supplierId' element={<SupplierDetails  />}/>
              <Route path='/addSupplier' element={<AddSupplier />} />
              <Route path='/editSupplier/:supplierId' element={<EditSupplier />} />
              <Route path ='/warehouse' element={<WarehouseList />}/>
              <Route path ='/addWarehouse' element={<AddWarehouse />}/>
              <Route path ='/editWarehouse/:warehouseId' element={<EditWarehouse />}/>
              <Route path = '/user' element={<UserLists />} />
              <Route path = '/user/:userId' element={<UserDetails />}/>
              <Route path = '/addUser' element={<AddUsers />}/>
              <Route path = '/editUser/:userId' element={<EditUsers />}/>
              <Route  path='/Signin' element={<Signin />}/>
              <Route path='/Signup' element={<Signup />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
