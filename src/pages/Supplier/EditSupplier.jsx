import SupplierForm from "../../components/SupplierForm/SupplierForm";
import axios from 'axios';
import { useState , useEffect} from "react";
import { useNavigate , useParams} from "react-router-dom";


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

    function onHandleUpdateSupplier(event , supplierDetails){
        event.preventDefault();

        console.log(supplierDetails);

        axios
            .put(`${URL}/supplier/${supplierId}`, supplierDetails)
            .then(res =>{
                console.log(res.data);
                alert(`supplier with id ${supplierId} has been updated.`);
                navigate('/supplier');
            })
            .catch(error => {
                alert('Something is wrong please try again later.');
                console.log(error);
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