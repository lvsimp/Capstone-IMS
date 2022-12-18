import axios from 'axios';
import ItemForm from '../../components/ItemForm/ItemForm';
import { useNavigate, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';

export default function EditItem(){

    const {itemId} = useParams();
    const navigate = useNavigate();
    const [itemDetail, setItemDetail] = useState();
    useEffect(() => {

        axios
            .get(`http://localhost:8000/items/${itemId}`)
            .then(res => setItemDetail(res.data[0]))
            .catch(err => {
                alert(`Can't load data of the item with id ${itemId} . ${err}` )
            })

    }, [itemId])

    const handleOnUpdateItem = (event, detail) =>{
        event.preventDefault();

        axios
            .put(`http://localhost:8000/items/${itemId}`, detail)
            .then(res => {
                console.log(res.data);
                alert(`Item has been updated.`)
                navigate('/items')
            })
            .catch(err => console.log(`Can't Update item. ${err}`))
        
    }

    return(
        <>
            {
                itemDetail &&
                <ItemForm detail={itemDetail} onHandleSubmit={handleOnUpdateItem}/>
            }
        </>
    );

}