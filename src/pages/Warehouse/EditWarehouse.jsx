import axios from 'axios';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Swal from 'sweetalert2';

export default function EditWarehouse(){
    const URL = process.env.REACT_APP_SERVER_URL || '';
    const navigate = useNavigate();
    const {warehouseId} = useParams();
    const [warehouseDetails, setWarehouseDetails] = useState();
    const title = <h1 className='page_header__title'> Edit Warehouse</h1>


    useEffect(()=>{

        axios
            .get(`${URL}/warehouse/${warehouseId}`)
            .then(res => {
                setWarehouseDetails(res.data[0]);
            })
            .catch(err => console.log(`Can't load warehouse ${err}`));

    }, [warehouseId, URL]);

    const handleOnUpdateWarehouse = (warehouseDetails) =>{
  
        axios
            .put(`${URL}/warehouse/${warehouseId}`, warehouseDetails, {
                headers: {'Content-Type' : 'multipart/form-data'}
            })
            .then(res => {
               if(res.data){
                Swal.fire({
                    icon: 'success',
                    title: 'Warehouse Updated Successfully',
                    text: `You updated ${res.data[0].name}`
                })
                navigate('/warehouse')
               }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Unexpected Error',
                    text: `${err}`
                })
            })

    }
    return(
        <>
            <PageHeader page_title={title}/>
            <main>
                <div className="warehouse_main">
                    {
                        warehouseDetails &&
                        <WarehouseForm details={warehouseDetails} onHandleSubmit={handleOnUpdateWarehouse} />
                    }
                </div>
            </main>
        </>
    );
}