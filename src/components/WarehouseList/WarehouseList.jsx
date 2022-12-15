import axios from "axios";
import { useEffect , useState} from "react";
import {Button} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import edit from '../../assets/Icon/pencil-solid.svg';
import del from '../../assets/Icon/trash-can-solid.svg';


export default function WarehouseList(){

    const editIcon = <img src={edit} alt="edit" className='supplier_form_edit' />;
    const delIcon = <img src={del} alt="delete" className='supplier_form_delete' />;

    const [warehouseList, setWarehouseList] = useState();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios
        .get(`http://localhost:8000/warehouse`)
        .then(res => {
            setWarehouseList(res.data.map(item => {
                return (
                    <tr key={item.id}>
                        <td onClick={() => navigate(`/warehouse/${item.id}`) }>{item.name}</td>
                        <td>{item.address}</td>
                        <td>
                            <Button 
                                    className='warehouse_form__icon_edit'
                                    as={Link}
                                    to={`/editWarehouse/${item.id}`}
                                >{editIcon}</Button>
                            <Button className='warehouse_form__icon_delete'>{delIcon}</Button>
                        </td>
                    </tr>
                )
            }))
        })
    }, [warehouseList] )

    
    return (
        <>
            <h2 className='supplier__title'>Warehouse</h2>
            <Button className='btn_save' as={Link} to='/addSupplier'>Add Supplier</Button>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Address</td>
                        <td>CTA</td>
                    </tr>
                </thead>
                <tbody>
                    {warehouseList}
                </tbody>
            </table>
        </>
    );
}