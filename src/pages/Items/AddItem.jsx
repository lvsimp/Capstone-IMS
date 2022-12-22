import ItemForm from '../../components/ItemForm/ItemForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function AddItem(){

    const URL = process.env.REACT_APP_SERVER_URL || '';
    const navigate = useNavigate();

    const handleOnAddItem = (event, details) => {
        event.preventDefault();
        console.log(details);
        axios
            .post(`${URL}/items` , details)
            .then(res => {
                console.log(res.data)
                alert('Item has been added.')
                navigate('/items')
            })
            .catch(err => console.log(`Something is wrong. Please try again later. ${err}`))
    }


    return (
        <ItemForm onHandleSubmit={handleOnAddItem}/>
    )
}

