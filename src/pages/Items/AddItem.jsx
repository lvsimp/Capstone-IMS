import ItemForm from '../../components/ItemForm/ItemForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import Swal from 'sweetalert2';

export default function AddItem(){

    const title = <h1 className='page_header__title'> Add Items</h1>

    const URL = process.env.REACT_APP_SERVER_URL || '';
    const navigate = useNavigate();

    const handleOnAddItem = ( details) => {
       
        axios
            .post(`${URL}/items` , details, {
                headers: {'Content-Type' : 'multipart/form-data'}
            })
            .then(res => {
               if(res.data){
                Swal.fire({
                    icon: 'success',
                    title: 'Added Item Successfully',
                    text:  `You added ${res.data[0].name}`
                })
                navigate('/items');
               }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Unexpected Error',
                    text: err
                })
            })
    }


    return (
        <>
            <PageHeader page_title={title}/>
            <main>
                <div className="item_main">
                    <ItemForm onHandleSubmit={handleOnAddItem}/>
                </div>
            </main>
        </>
    )
}

