import axios from 'axios';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function EditWarehouse(){
    const navigate = useNavigate();
    const {warehouseId} = useParams();
    const [warehouseDetails, setWarehouseDetails] = useState();

    useEffect(()=>{

        axios
            .get(`http://localhost:8000/warehouse/${warehouseId}`)
            .then(res => {
                console.log(res.data[0]);
                setWarehouseDetails(res.data[0]);
            })
            .catch(err => console.log(`Can't load warehouse ${err}`));

    }, [warehouseId]);

    const handleOnUpdateWarehouse = (event, warehouseDetails) =>{
        event.preventDefault();
        axios
            .put(`http://localhost:8000/warehouse/${warehouseId}`, warehouseDetails)
            .then(res => {
                console.log(res.data);
                alert(`Warehouse with ${warehouseId} has been updated`);
                navigate('/warehouse');
            })
            .catch(err => {
                alert('Something is wrong please try again later.');
                console.log(err);
            })

    }
    return(
        <WarehouseForm details={warehouseDetails} onHandleSubmit={handleOnUpdateWarehouse} />
    );
}