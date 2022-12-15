import './SupplierList.scss';
import '../SupplierForm/SupplierForm.scss';
import { useEffect ,useState} from 'react';
import axios from 'axios';
import edit from '../../assets/Icon/pencil-solid.svg';
import del from '../../assets/Icon/trash-can-solid.svg';
import { Link , useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';

export default function SupplierList(){

    const navigate = useNavigate();
    const editIcon = <img src={edit} alt="edit" className='supplier_form_edit' />;
    const delIcon = <img src={del} alt="delete" className='supplier_form_delete' />;

    const [supplierList, setSupplierList] = useState(null);



    useEffect(() => {
        axios
            .get(`http://localhost:8000/supplier`)
            .then(res =>{
                setSupplierList(res.data.map(item => {
                    
                    return (
                        <tr key = {item.id} >
                            <td  onClick={() =>{navigate(`/supplier/${item.id}`);}} >{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.email}</td>
                            <td>
                                <Button 
                                    className='supplier_form__icon_edit'
                                    as={Link}
                                    to={`/editSupplier/${item.id}`}
                                >{editIcon}</Button>
                                <Button className='supplier_form__icon_delete'>{delIcon}</Button>
                            </td>
                        </tr>
                    )
                }));
            })
            .catch(err => console.log(` Unable to retrieve data ${err} `));
    },[supplierList])



    return (
        <div className="supplier_container">
            <h2 className='supplier__title'>Suppliers</h2>
            <Button className='btn_save' as={Link} to='/addSupplier'>Add Supplier</Button>
            <table>
                <thead>
                    <tr>
                        <td>Supplier Name</td>
                        <td>Address</td>
                        <td>Email</td>
                        <td>CTA</td>
                    </tr>
                </thead>
                <tbody>
                    {supplierList }
                </tbody>
            </table>
        </div>
    );
}