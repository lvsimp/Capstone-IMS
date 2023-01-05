import PageHeader from '../../components/PageHeader/PageHeader';
import add from '../../assets/Icon/circle-plus-solid.svg';
import del from '../../assets/Icon/trash-can-solid.svg';
import edit from '../../assets/Icon/pencil-solid.svg';
import {Link, useNavigate} from 'react-router-dom';
import { useEffect , useState} from "react";
import {Button} from 'react-bootstrap';
import '../../style/btn.scss';
import axios from "axios";
import './Warehouse.scss';


export default function WarehouseList(){

    const URL = process.env.REACT_APP_SERVER_URL || '';

    const navigate = useNavigate();
    const editIcon = <img src={edit} alt="edit" className='edit_icon' />;
    const delIcon = <img src={del} alt="delete" className='delete_icon' />;
    const addIcon = <img src={add} alt="add" className='add_icon' onClick={() => navigate('/addWarehouse')} />;

    const title = <h1 className='page_header__title'>Warehouse <span>{addIcon}</span></h1>
    const [warehouseList, setWarehouseList] = useState();
     
    useEffect(() => {
        axios
        .get(`${URL}/warehouse`)
        .then(res => {
            setWarehouseList(res.data);
        })
    }, [warehouseList, URL] )

    
    return (
        <>
            <PageHeader page_title={title} />
            <main>
                <div className='warehouse_main'>
                    <table className='warehouse_main_table'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Contact Person </th>
                                <th>Contact Number</th>
                                <th>Item Count</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                warehouseList && 
                                warehouseList.map(item => {
                                    return (
                                        <tr key={item.id} className='warehouse_row'>
                                            <td>
                                                <img src={`${URL}/${item.images}`} alt="warehouse" />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.address}</td>
                                            <td>Stepahy Dola</td>
                                            <td>(495-239-2931)</td>
                                            <td>3000</td>
                                            <td>
                                                <Button 
                                                        className='btn_edit'
                                                        as={Link}
                                                        to={`/editWarehouse/${item.id}`}
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