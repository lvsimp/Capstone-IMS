import axios from 'axios';
import ItemForm from '../../components/ItemForm/ItemForm';
import { useNavigate, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Swal from 'sweetalert2';

export default function EditItem(){
    
    const title = <h1 className='page_header__title'> Edit Items</h1>
    const URL = process.env.REACT_APP_SERVER_URL || '';
    const {itemId} = useParams();
    const navigate = useNavigate();
    const [itemDetail, setItemDetail] = useState();
    useEffect(() => {

        axios
            .get(`${URL}/items/${itemId}`)
            .then(res => setItemDetail(res.data[0]))
            .catch(err => {
                alert(`Can't load data of the item with id ${itemId} . ${err}` )
            })

    }, [itemId, URL])

    const handleOnUpdateItem = (detail) =>{
       
        axios
            .put(`${URL}/items/${itemId}`, detail, {
                headers: {'Content-Type' : 'multipart/form-data'}
            })
            .then(res => {
                if(res.data){
                    Swal.fire({
                        icon: 'success',
                        title: 'Update Successful',
                        text: ` You updated ${res.data[0].name}`
                    })
                    navigate('/warehouse');
                }
            })
            .catch(err => console.log(`Can't Update item. ${err}`))
        
    }

    return(
        <>
            <PageHeader page_title={title} />
            <main>
                <div className="item_main">
                    {
                        itemDetail &&
                        <ItemForm detail={itemDetail} onHandleSubmit={handleOnUpdateItem}/>
                    }
                </div>
            </main>
        </>
    );

}