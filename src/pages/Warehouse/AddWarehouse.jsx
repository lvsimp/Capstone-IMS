import axios from "axios";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";


export default function AddWarehouse(){

    const title = <h1 className="page_header__title">Add Warehouse</h1>
    const navigate = useNavigate();
    const URL = process.env.REACT_APP_SERVER_URL || '';

    const handleOnAddWarehouse=(event, warehouseDetails) =>{
        event.preventDefault();
        axios
            .post(`${URL}/warehouse`, warehouseDetails)
            .then(res => {
                console.log(res.data)
                alert('The warehouse is added');
                navigate('/warehouse')
            })
            .catch(err => {
                alert('Something is wrong please try again later.');
                console.log(err);
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