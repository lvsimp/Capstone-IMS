import {Card, Button} from 'react-bootstrap';
import './ItemCard.scss';
import Swal from 'sweetalert2';

export default function ItemCard({itemDetails}){

    const URL = process.env.REACT_APP_SERVER_URL || '';

    const handleAddtoOrder = (data) =>{

        const orders = JSON.parse(localStorage.getItem('tempOrders'));

        Swal.fire({
            title: `Quantity of ${data?.name}`,
            icon: 'question',
            input: 'number', 
            inputValue: 1,
            inputAttributes: {
                min: 1,
                max: 50,
                step: 1
            },
            showCancelButton: true
        }).then(result => {
            data.quantity = result.value
            if(orders === null){
                localStorage.setItem('tempOrders', JSON.stringify([data]));
            }else{
                orders.push(data);
                localStorage.setItem('tempOrders', JSON.stringify(orders));
            }

        })
    }

return(
   <Card key={itemDetails?.id} className='item_card'>
        <Card.Img variant='top' src={`${URL}/${itemDetails?.images}`}/>
        <Card.Body>
            <Card.Title>{itemDetails?.name}</Card.Title>
            <Card.Text> * {itemDetails?.description}</Card.Text>
            <Card.Text>${itemDetails?.price}</Card.Text>
        </Card.Body>
            <Button onClick={()=>handleAddtoOrder(itemDetails)}>Add to Orders</Button>
   </Card>  
);
} 