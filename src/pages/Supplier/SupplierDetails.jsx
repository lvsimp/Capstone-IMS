import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import back from '../../assets/Icon/chevron-left-solid.svg';

export default function SupplierDetails(){

    const URL = process.env.REACT_APP_SERVER_URL || '';
    const {supplierId} = useParams();
    const navigate = useNavigate();
    const [supplierDetail, setSupplierDetail] = useState();

    useEffect(() => {

        axios
            .get(`${URL}/supplier/${supplierId}`)
            .then(res =>{
                console.log(res.data[0]);
                setSupplierDetail(res.data[0]);
            })
            .catch(err => console.log(`Can't retrieve data ${err}`));

    }, [supplierId, URL]);


    return (
       <div>
            <img src={back} alt="back btn" onClick={() => navigate('/supplier')} />
            <h1>{supplierDetail?.name}</h1>
            <p><span>Address:</span>{supplierDetail?.address}</p>
            <p><span>Phone:</span>{supplierDetail?.phone}</p>
            <p><span>Email:</span>{supplierDetail?.email}</p>
            <p><span>Contact Person:</span>{supplierDetail?.contact_person}</p>
            

       </div>
    );
}