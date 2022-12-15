import axios from "axios";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import { useNavigate } from "react-router-dom";

export default function AddWarehouse(){

    const navigate = useNavigate();

    const handleOnAddWarehouse=(event, warehouseDetails) =>{
        event.preventDefault();
        axios
            .post('http://localhost:8000/warehouse', warehouseDetails)
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
        <WarehouseForm  onHandleSubmit={handleOnAddWarehouse}/>
    );
}