import SupplierForm from "../../components/SupplierForm/SupplierForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageHeader from '../../components/PageHeader/PageHeader';
export default function AddSupplier(){

    const URL = process.env.REACT_APP_SERVER_URL || '';
    const navigate = useNavigate();
    const title = <h1 className='page_header__title'> Add Supplier</h1>

    const handleOnSubmitSupplier = ( supplierDetails) => {
     axios
        .post(`${URL}/supplier`, supplierDetails , {
            headers: {'Content-Type' : 'multipart/form-data'}
        })
        .then(res =>{
            console.log(res.data);
            alert("A new Supplier Added.");
            navigate('/supplier');

        })
        .catch(err => console.log(err));
    }
    return(
        <>
            <PageHeader page_title={title}/>
            <main>
                <div className="supplier_main">
                    <SupplierForm  onHandleSubmit={handleOnSubmitSupplier}/>
                </div>
            </main>
        </>
    );

}