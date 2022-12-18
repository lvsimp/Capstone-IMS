import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import axios from 'axios';

export default function Deliveries(){

    const [deliveries, setDeliveries] = useState();

    useEffect(() => {

        axios
            .get(`http://localhost:8000/items/deliveries`)
            .then(res =>{
                setDeliveries(res.data);
            })
            .catch(err => console.log(err))

    }, deliveries);


    

    return(
        <>
            <h2>Latest Deliveries</h2>
            <table>
                <thead>
                    <tr>
                        <th>Delivery Date</th>
                        <th>Supplier</th>
                        <th>Warehouse</th>
                        <th>Item</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {
                        deliveries && 
                        deliveries.map( row =>{
                            return (
                                <tr key={row.id}>
                                    <td>{new Date(row.dateDelivered).toDateString()}</td>
                                    <td>{row.supplier}</td>
                                    <td>{row.warehouse}</td>
                                    <td>{row.item}</td>
                                    <td>
                                        <Button as={Link} to={`/items/$row.id`} >Details</Button>
                                    </td>
                                </tr>
                            )
                        })
                   }
                </tbody>
            </table>
        </>
    )

}