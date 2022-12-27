import CategoryForm from "../../components/CatergoryForm/CategoryForm";
import { useNavigate , useParams} from "react-router-dom";
import { useState, useEffect} from "react";
import axios from 'axios';

export default function EditCategory(){

    const URL = process.env.REACT_APP_SERVER_URL || '';
    const navigate = useNavigate();
    const {categoryId} = useParams();
    const [categoryDetail, setCategoryDetail] = useState();

    useEffect(() => {

        axios
            .get(`${URL}/category/${categoryId}`)
            .then( res => {
                setCategoryDetail(res.data[0]);
            })
            .catch(err => console.log(`Something is wrong Please try again later. ${err}`));

    }, [categoryId, URL]);

    const handleOnUpdateCategory = (event, details) =>{
        event.preventDefault();
        axios
            .put(`${URL}/category/${categoryId}`, details)
            .then(res => {
                console.log(res.data);
                alert('Category has been updated.')
                navigate('/category');
            })
            .catch(err => console.log(`Can't update category. ${err}`));
    }
     

    return(
        <>
            {
                categoryDetail &&
                <CategoryForm title='Edit Category' handleOnSubmit={handleOnUpdateCategory} detail={categoryDetail}/>
            }
        </>
    )
}
