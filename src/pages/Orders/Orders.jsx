import PageHeader from '../../components/PageHeader/PageHeader';
import './Orders.scss';
import { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';

export default function Orders(){

    const title = <h1 className='page_header__title'>Orders</h1>

    const URL = process.env.REACT_APP_SERVER_URL ||'';
    const [orderLists, setOrderLists] = useState([]);
    const [totalCost, setTotalCost] = useState();

    useEffect(() => {
      const tempOrder = JSON.parse(localStorage.getItem('tempOrders'));
      if(tempOrder !== null){
        setOrderLists(tempOrder)
      }
    }, [])   

    useEffect(() => {
        const total = orderLists.map(item =>{
          return item.price * item.quantity
        }).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        setTotalCost(total)
    }, [orderLists]);

    return(
        <>
          <PageHeader page_title={title}/>
          <main>
                <div className='order_main'>
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
                          <Button className='btn_cancel'>Cancel</Button>
                          <Button className='btn_save'>Confirm</Button>
                    </div>
                </div>
          </main>
        </>
    );
}