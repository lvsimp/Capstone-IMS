import SupplierForm from "../../components/SupplierForm/SupplierForm";
import axios from 'axios';
import { useState , useEffect} from "react";
import { useNavigate , useParams} from "react-router-dom";
import Swal from 'sweetalert2';

export default function EditSupplier(){

    const URL = process.env.REACT_APP_SERVER_URL || '';
    const {supplierId} = useParams();
    const [supplierDetail, setSupplierDetail] = useState();

    const navigate = useNavigate();

    useEffect(() =>{

        axios
            .get(`${URL}/supplier/${supplierId}`)
            .then(res => {
                setSupplierDetail(res.data[0]);
            })
            .catch(err => console.log(`Can't load supplier ${err}`));

    },[supplierId, URL])

    function onHandleUpdateSupplier( supplierDetails){

        axios
            .put(`${URL}/supplier/${supplierId}`, supplierDetails, {
                headers : {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res =>{
               if(res.data){
                    Swal.fire({
                        icon: 'success',
                        title: 'Supplier Updated Successfully',
                        text: `You updated ${res.data[0].name}`
                    })
                    navigate('/supplier')
                }
            })
            .catch(error => {
                Swal.fire({
                    icon : 'error',
                    title: 'Unexpected Error',
                    text: error
                })
             })

    }


    return (
        <>
            {
                supplierDetail &&
                <SupplierForm details={supplierDetail} onHandleSubmit={onHandleUpdateSupplier}/>
            }
        </>
    );

}