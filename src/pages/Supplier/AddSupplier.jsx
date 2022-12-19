import SupplierForm from "../../components/SupplierForm/SupplierForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddSupplier(){

    const navigate = useNavigate();

    const handleOnSubmitSupplier = (event , supplierDetails) => {
        event.preventDefault();
        console.log(supplierDetails)

        axios
        .post(`http://localhost:8000/supplier`, supplierDetails)
        .then(res =>{
            console.log(res.data);
            alert("A new Supplier Added.");
            navigate('/supplier');

        })
        .catch(err => console.log(err));
    }
    return(
        <SupplierForm  onHandleSubmit={handleOnSubmitSupplier}/>
    );

}