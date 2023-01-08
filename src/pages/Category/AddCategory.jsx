import CategoryForm from "../../components/CatergoryForm/CategoryForm";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";
export default function AddCategory(){

    const URL = process.env.REACT_APP_SERVER_URL || '';
    const navigate = useNavigate();

    const handleOnAddCategory = ( categoryDetail) =>{

        axios
            .post(`${URL}/category`, categoryDetail)
            .then( res => {
                if(res.data){
                    Swal.fire({
                        icon: 'success',
                        title: 'Category Added Successfully',
                        text: ` You updated ${res.data[0].type}`
                    })
                    navigate('/category');
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Unexpected Error',
                    text: err
                })
            })
        
    }

    return(
        <CategoryForm title='Add Category' handleOnSubmit={handleOnAddCategory} />
    );
}