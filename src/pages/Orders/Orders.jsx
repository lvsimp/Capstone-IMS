import PageHeader from '../../components/PageHeader/PageHeader';
import './Orders.scss';
import { useEffect, useState, useContext} from 'react';
import {Button, Form} from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import UserContext from '../../UserContext';
import { useNavigate} from 'react-router-dom'; 

export default function Orders(){

    const nav = useNavigate();
    const title = <h1 className='page_header__title'>Orders</h1>
    const {user} = useContext(UserContext);
    const URL = process.env.REACT_APP_SERVER_URL ||'';
    const [orderLists, setOrderLists] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [customerList, setCustomerList] = useState();
    const [itemList, setItemList] = useState();
    const [trans, setTrans] = useState();

    useEffect(() => {
      const tempOrder = JSON.parse(localStorage.getItem('tempOrders'));
      if(tempOrder !== null){
        setOrderLists(tempOrder)
      }
      axios
        .get(`${URL}/transaction`)
        .then(res => {
          setCustomerList(res.data)
          console.log(res.data)
        })
        .catch(err => console.log(err))
        axios.get(`${URL}/items`)
        .then(res => {
          setItemList(res.data);
        })
        .catch(err => console.log(err))

    }, [URL])   

    useEffect(() => {
        const total = orderLists.map(item =>{
          return item.price * item.quantity
        }).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        setTotalCost(total)
    }, [orderLists]);

    const updateTransaction = () =>{
        axios
        .put(`${URL}/transaction/${trans}`, {total_cost: totalCost})
        .then(res => console.log(res.data[0]))
        .catch(err => console.log(err))
    }

    const addToOrderTable = (orderList) =>{
       const dataInput = orderList.map(element =>
         (
        {
          transaction_id : trans,
          item_id: element.id,
          quantity: element.quantity,
          subtotal: element.price * element.quantity
        }
      ))
      console.log(dataInput)
      
      const result = dataInput.map(elem => axios.post(`${URL}/orders`, elem))
      
      Promise.all(result)
        .then(response => {
          response.forEach(res => console.log(res.data))
        })
        .catch(err => console.log(err)) 

    }

    const handleUpdateInventory = () => {

      
      const newItem = orderLists.map(elem => {
        const foundItem =itemList.find(item => item.id === elem.id);
        const updateData = foundItem.quantity - elem.quantity;
        return axios.put(`${URL}/items/${foundItem.id}`, {quantity: updateData })
      })
      
      Promise.all(newItem)
      .then( response => {
        response.forEach(res => console.log(res.data))
      })
      .catch(err => console.log(err))
    }

    

    const handleOnConfirm = () =>{
      if(!trans){
        Swal.fire({
          icon: 'info',
          title: 'Please select Name of Customer'
        })
      }
      handleUpdateInventory();
      updateTransaction();
      addToOrderTable(orderLists);
      localStorage.removeItem('tempOrders')
      nav('/items');

    }

    const handleOnCancel = () => {
      setTotalCost(0);
      localStorage.removeItem('tempOrders');
      nav('/items');
    }

    return(
        <>
          <PageHeader page_title={title}/>
          <main>
                <div className='order_main'>
                    <div className='order_name'>
                        <Form.Select onChange={e => setTrans(e.target.value)}>
                            <option>---- Select Customer Name ----</option>
                            {
                              customerList && 
                              customerList.map(item => {
                                return <option key={item.id} value={item.id}>{item.customer_name}</option>
                              })
                            }
                        </Form.Select>
                    </div>
                    <table className='order_main_table'>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Quantity</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                          {
                            orderLists &&
                            orderLists.map(item => {
                              const subtotal = item.quantity * item.price;
                              return (
                                <tr key={item.id} className='order_row'>
                                  <td>
                                    <img src={`${URL}/${item.images}`} alt='item' />
                                  </td>
                                  <td>{item.name}</td>
                                  <td>{item.quantity}</td>
                                  <td>${subtotal}</td>
                                </tr>
                              )
                            })
                          }
                          <tr className='order_total'>
                              <td><span>TOTAL</span></td>
                              <td></td>
                              <td></td>
                              <td>${totalCost}</td>
                          </tr>
                      </tbody>
                    </table>
                   
                    <div className="order_main_btn_con">
                          <Button className='btn_cancel' onClick={()=>handleOnCancel()}>Cancel</Button>
                          <Button className='btn_save' onClick={() => handleOnConfirm(orderLists)}>Confirm</Button>
                    </div>
                </div>
          </main>
        </>
    );
}