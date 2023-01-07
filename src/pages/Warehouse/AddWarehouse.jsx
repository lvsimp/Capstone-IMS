import axios from "axios";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import Swal from "sweetalert2";

export default function AddWarehouse(){

    const title = <h1 className="page_header__title">Add Warehouse</h1>
    const navigate = useNavigate();
    const URL = process.env.REACT_APP_SERVER_URL || '';

    const handleOnAddWarehouse=( warehouseDetails) =>{
       
        axios
            .post(`${URL}/warehouse`, warehouseDetails , {
                headers: {'Content-Type' : 'multipart/form-data'}
            })
            .then(res => {
                console.log(res.data)
               if(res.data){
                Swal.fire({
                    icon: 'success', 
                    title: 'Added Warehouse Sucessfully',
                    text: `You added ${res.data[0].name}`
                })
                navigate('/warehouse');
               }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Unexpected Error',
                    text: `${err}`
                })
            });
    }

    return(
        <>
            <PageHeader page_title={title} />
            <main>
                <div className="warehouse_main">
                    <WarehouseForm  onHandleSubmit={handleOnAddWarehouse}/>
                </div>
            </main>
        </>
    );
}