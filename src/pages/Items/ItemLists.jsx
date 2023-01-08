import PageHeader from '../../components/PageHeader/PageHeader';
import add from '../../assets/Icon/circle-plus-solid.svg';
import del from '../../assets/Icon/trash-can-solid.svg';
import qrcode from '../../assets/Icon/qrcode-solid.svg';
import edit from '../../assets/Icon/pencil-solid.svg';
import {Link , useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import '../../style/btn.scss';
import axios from 'axios';
import './Item.scss';


export default function ItemLists(){

    const URL = process.env.REACT_APP_SERVER_URL || '';

    const editIcon = <img src={edit} alt="edit" className='edit_icon' />;
    const delIcon = <img src={del} alt="delete" className='delete_icon' />;
    const addIcon = <img src={add} alt="add" className='add_icon' onClick={() => navigate('/addItem')} />;
    const qrIcon = <img src={qrcode} alt="qr" className='qr_icon'/>;
    const title = <h1 className='page_header__title'>Items <span>{addIcon}</span></h1>
    
    const [itemList, setItemList] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${URL}/items`)
            .then(res =>{
                setItemList(res.data)
            })
            .catch(err => console.log(`Something is wrong please try again later ${err}`));


    }, [itemList, URL])


    return (
        <>
            <PageHeader page_title={title} />
            <main>
                <div className='item_main'>
                    <table className='item_main_table'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Count</th>
                                <th>Warehouse</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            itemList && 
                            itemList.map(item =>{
                               
                                return(
                                    <tr key= {item.id} className='item_row'>
                                        <td>
                                            <img src={`${URL}/${item.images}`} alt="item" />    
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.warehouse}</td>
                                        <td>
                                            <Button
                                            className='btn_qr'
                                            as={Link}
                                            to={`/items/${item.id}`}
                                            >
                                                {qrIcon}
                                            </Button>
                                        </td>
                                        <td>
                                            <Button 
                                                className='btn_edit'
                                                as={Link}
                                                to={`/editItem/${item.id}`}
                                            >{editIcon}</Button>
                                        </td>
                                        <td>
                                            <Button className='btn_delete'>{delIcon}</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </main>
            
        </>
    );
}