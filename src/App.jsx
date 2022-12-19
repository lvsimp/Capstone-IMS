import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//import pages
//for signin/signup and home
import Signin from './pages/SignIn/SignIn';
import Signup from  './pages/SignUp/Signup';
import LandingPage from './pages/LandingPage/LandingPage';
//for suppliers
import AddSupplier from './pages/Supplier/AddSupplier';
import EditSupplier from './pages/Supplier/EditSupplier';
import SupplierDetails from './pages/Supplier/SupplierDetails';
import SupplierList from './pages/Supplier/SupplierList';
//sidenav
import SideNav from './components/SideNav/SideNav';
//for warehouse
import WarehouseList from './pages/Warehouse/WarehouseList';
import AddWarehouse from './pages/Warehouse/AddWarehouse';
import EditWarehouse from './pages/Warehouse/EditWarehouse';
//for users/employees
import AddUsers from './pages/Users/AddUsers';
import UserLists from './pages/Users/UserLists';
import EditUsers from './pages/Users/EditUsers';
import UserDetails from './pages/Users/UserDetails';
//for reports
import Reports from './pages/Reports/Reports';
//for item/inventory and category
import ItemLists from './pages/Items/ItemLists';
import ItemDetail from './pages/Items/ItemDetail'; 
import AddItem from './pages/Items/AddItem';
import CategoryList from './pages/Items/CategoryList';
import AddCategory from './pages/Items/AddCategory';
import EditCategory from './pages/Items/EditCategory';
import EditItem from './pages/Items/EditItem';
//dashboard
import Dashboard from './pages/Dashboard/Dashboard';

function App() {

  //have a useState here for navigation

  return (
    <div className="app">
      <BrowserRouter>
        <SideNav />
        <div className="app__wrapper">
          <Routes>
            {/*  for home routes and Signin/Signup */}
              <Route path='/' element={<LandingPage />}/>
              <Route  path='/Signin' element={<Signin />}/>
              <Route path='/Signup' element={<Signup />}/>
              {/* for dashboard */}
              <Route path='/dashboard' element={<Dashboard />}/>

              {/* for items and category */}
              <Route path='/items' element={<ItemLists />}/>
              <Route path='/items/:itemId' element={< ItemDetail/>} />
              <Route path='/addItem' element={<AddItem />}/>
              <Route path='/editItem/:itemId' element={<EditItem />} />
              <Route path='/addCategory' element={<AddCategory />} />
              <Route path='/editCategory/:categoryId' element={<EditCategory />}/>
              <Route path='/category' element= {<CategoryList />} />
              {/* for reports */}
              <Route path='/reports' element={<Reports />}/>
              {/* for suppliers */}
              <Route path='/supplier' element={<SupplierList />} />
              <Route path='/supplier/:supplierId' element={<SupplierDetails  />}/>
              <Route path='/addSupplier' element={<AddSupplier />} />
              <Route path='/editSupplier/:supplierId' element={<EditSupplier />} />
              {/* for warehouses */}
              <Route path ='/warehouse' element={<WarehouseList />}/>
              <Route path ='/addWarehouse' element={<AddWarehouse />}/>
              <Route path ='/editWarehouse/:warehouseId' element={<EditWarehouse />}/>
              {/* for users/employees */}
              <Route path = '/user' element={<UserLists />} />
              <Route path = '/user/:userId' element={<UserDetails />}/>
              <Route path = '/addUser' element={<AddUsers />}/>
              <Route path = '/editUser/:userId' element={<EditUsers />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
