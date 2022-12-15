import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import of components
import SupplierForm from '../../components/SupplierForm/SupplierForm';

export default function SupplierDetails(){
    
    const {supplierId} = useParams();
    const [supplierDetail, setSupplierDetail] = useState();

    useEffect(() => {

        axios
            .get(`http://localhost:8000/supplier/${supplierId}`)
            .then(res =>{
                console.log(res.data[0]);
                setSupplierDetail(res.data[0]);
            })
            .catch(err => console.log(`Can't retrieve data ${err}`));

    }, [supplierId]);


    return (
        <>
            {
                supplierDetail && 
                <SupplierForm details={supplierDetail} />
            }
        </>
    );
}