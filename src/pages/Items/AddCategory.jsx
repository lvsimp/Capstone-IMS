import CategoryForm from "../../components/CatergoryForm/CategoryForm";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function AddCategory(){

    const URL = process.env.REACT_APP_SERVER_URL || '';
    const navigate = useNavigate();

    const handleOnAddCategory = (event, categoryDetail) =>{
        event.preventDefault();

        axios
            .post(`${URL}/category`, categoryDetail)
            .then( res => {
                alert("Category added.");
                console.log(res.data);
                navigate('/category')
            })
            .catch(err => console.log(`Something is wrong ${err}`));
    }

    return(
        <CategoryForm title='Add Category' handleOnSubmit={handleOnAddCategory} />
    );
}