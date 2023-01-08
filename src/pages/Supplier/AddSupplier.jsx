import SupplierForm from "../../components/SupplierForm/SupplierForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageHeader from '../../components/PageHeader/PageHeader';
import Swal from 'sweetalert2';

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
            if(res.data){
                Swal.fire({
                    icon : 'success',
                    title: 'Supplier Added Successfully',
                    text: `You added ${res.data[0].name}`
                })
                navigate('/supplier')
            }
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Unexpected Error',
                text: err
            })
        });
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