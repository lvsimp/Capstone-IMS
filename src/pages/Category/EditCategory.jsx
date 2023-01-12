import CategoryForm from "../../components/CatergoryForm/CategoryForm";
import { useNavigate , useParams} from "react-router-dom";
import { useState, useEffect} from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function EditCategory(){

    const title = <h1 className='page_header__title'> Edit Category</h1>
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
                if(res.data){
                    Swal.fire({
                        icon: 'success',
                        title: 'Category Updated Successfully',
                        text: ` You updated ${res.data[0].type}`
                    })
                    navigate('/category')
                }
            })
            .catch(err =>  {
                Swal.fire({
                    icon: 'error',
                    title: 'Unexpected Error',
                    text: err
                })
            });
    }
     

    return(
        <>
            <PageHeader page_title={title} />
            <main>
                <div className="category_main">
                    {
                        categoryDetail &&
                        <CategoryForm title='Edit Category' handleOnSubmit={handleOnUpdateCategory} detail={categoryDetail}/>
                    }
                </div>
            </main>
        </>
    )
}
