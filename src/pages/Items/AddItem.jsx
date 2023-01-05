import ItemForm from '../../components/ItemForm/ItemForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';

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
                console.log(res.data)
                alert('Item has been added.')
                navigate('/items')
            })
            .catch(err => console.log(`Something is wrong. Please try again later. ${err}`))
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

