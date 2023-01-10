import {Card, Button, Form} from 'react-bootstrap';
import './ItemCard.scss';
import Swal from 'sweetalert2';

export default function ItemCard({itemDetails}){

    const URL = process.env.REACT_APP_SERVER_URL || '';

    const handleAddtoOrder = (data) =>{
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
        }).then(result => {
            
            data.quantity = result.value
            console.log(data)
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