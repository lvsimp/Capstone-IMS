import PageHeader from '../../components/PageHeader/PageHeader';
import add from '../../assets/Icon/circle-plus-solid.svg';
import del from '../../assets/Icon/trash-can-solid.svg';
import edit from '../../assets/Icon/pencil-solid.svg';
import { Link , useNavigate } from 'react-router-dom';
import { useEffect ,useState} from 'react';
import {Button} from 'react-bootstrap';
import '../../style/btn.scss';
import axios from 'axios';
import './Supplier.scss';

export default function SupplierList(){

    const URL = process.env.REACT_APP_SERVER_URL || '';
    const navigate = useNavigate();
    const editIcon = <img src={edit} alt="edit" className='edit_icon' />;
    const delIcon = <img src={del} alt="delete" className='delete_icon' />;
    const addIcon = <img src={add} alt="add" className='add_icon' onClick={() => navigate('/addSupplier')} />;

    const title = <h1 className='page_header__title'>Supplier <span>{addIcon}</span></h1>
    const [supplierList, setSupplierList] = useState(null);
    
    useEffect(() => {
        axios
            .get(`${URL}/supplier`)
            .then(res =>{
                setSupplierList(res.data);
            })
            .catch(err => console.log(` Unable to retrieve data ${err} `));
    },[supplierList, URL])



    return (
        <>
            <PageHeader page_title={title}/> 
            <main>
                <div className="supplier_main">
                    <table className='supplier_main_table'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone Number</th>
                                <th>Last Delivery Date</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                supplierList &&
                                supplierList.map(item => {
                            
                                    return (
                                        <tr key = {item.id} className='supplier_row'>
                                            <td>
                                                <img  src={`${URL}/${item.images}`} alt='supplier'/>
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phone}</td>
                                            <td>{new Date(item.created_on).toDateString()}</td>
                                            <td>
                                                <Button 
                                                    className='btn_edit'
                                                    as={Link}
                                                    to={`/editSupplier/${item.id}`}
                                                >{editIcon}</Button>
                                            </td>
                                            <td>
                                                <Button className='btn_delete'>{delIcon}</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                          
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}