import PageHeader from '../../components/PageHeader/PageHeader';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './Reports.scss';

export default function Reports(){
  
    const URL = process.env.REACT_APP_SERVER_URL || '';
    const title = <h1 className='page_header__title'>Transaction Reports</h1>
    const [transactionList, setTransactionList] = useState();
    const [orderList, setOrderList] = useState();

    useEffect(() => {
      axios
        .get(`${URL}/transaction`)
        .then(res => {
            setTransactionList(res.data.reverse())
            console.log(res.data)
        })
        .catch(err => console.log(err))

      axios
        .get(`${URL}/orders`)
        .then(res => {
            setOrderList(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }, [URL])

    return (
        <>
            <PageHeader page_title={title} /> 
            <main>
                <div className='report_main'>
                   {
                    transactionList && 
                    transactionList.reverse().map(trans => {
                        return(
                            <div className='report_main_container' key={trans.id}>
                                <p>{new Date(trans.trans_date).toDateString()}</p>
                                <h3>{trans.customer_name}</h3>
                                <p>{trans.customer_address}</p>
                                <table className='report_table'>
                                    <th>
                                        <tr><td>Orders:</td></tr>
                                    </th>
                                    <tbody>
                                        {
                                            orderList && 
                                            orderList.filter(item => item.transaction_id === trans.id ).map(order => {
                                                return(
                                                    <tr key={order.id} className='report_row'>
                                                        <td> * {order.name}</td>
                                                        <td>{order.quantity} pcs.</td>
                                                        <td>${order.subtotal}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        )
                    })
                   }
                </div>
            </main>
        </>
    )
}