import PageHeader from '../../components/PageHeader/PageHeader';
import add from '../../assets/Icon/circle-plus-solid.svg';
import ItemCard from '../../components/ItemCard/ItemCard';
import del from '../../assets/Icon/trash-can-solid.svg';
import qrcode from '../../assets/Icon/qrcode-solid.svg';
import edit from '../../assets/Icon/pencil-solid.svg';
import {useState, useEffect, useContext} from 'react';
import {Link , useNavigate} from 'react-router-dom';
import UserContext from '../../UserContext';
import {Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
import '../../style/btn.scss';
import axios from 'axios';
import './Item.scss';

export default function ItemLists(){
    
    const {user} = useContext(UserContext);
    const URL = process.env.REACT_APP_SERVER_URL || '';

    const editIcon = <img src={edit} alt="edit" className='edit_icon' />;
    const delIcon = <img src={del} alt="delete" className='delete_icon' />;
    const addIcon = <img src={add} alt="add" className='add_icon' onClick={() => navigate('/addItem')} />;
    const qrIcon = <img src={qrcode} alt="qr" className='qr_icon'/>;
    const title = <h1 className='page_header__title'>Items <span>{addIcon}</span></h1>
    const anotitle = <h1 className='page_header__title'>Items</h1>
    

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

    async function handleOnToOrders(){
        const { value: formValues } = await Swal.fire({
            title: 'Recipient',
            html:
              '<input id="swal-input1" class="swal2-input" placeholder="Name">' +
              '<input id="swal-input2" class="swal2-input" placeholder="Address">',
            focusConfirm: false,
            showCancelButton: true,
            preConfirm: () => {
              return (
                {
                  customer_name: document.getElementById('swal-input1').value,
                  customer_address: document.getElementById('swal-input2').value  
                }
              )
            }
          })
          
          if (formValues) {
            const inputData ={
              ...formValues,
              total_cost: 0,
              created_by: user?.id
            }
            axios
              .post(`${URL}/transaction`, inputData)
              .then(res => { navigate('/orders')})
              .catch(err => console.log(err))
         }
    }
            
    return (
        <>
            {
                user?.role === 'Admin'
                ? 
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
                :
                <>
                    <PageHeader page_title={anotitle} />
                    <main>
                        <div className='item_main'>
                            <div className="item_order">
                                <Button onClick={() => handleOnToOrders()}>Go to Orders</Button>
                            </div>
                            <div className="item_main_card">
                                {
                                    itemList && 
                                    itemList.map( item => {
                                        return(
                                            <ItemCard 
                                                key={item.id}
                                                itemDetails={item}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </main>
                </>
            }
            
        </>
    );
}