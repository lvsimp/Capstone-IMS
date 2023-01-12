import CategoryForm from "../../components/CatergoryForm/CategoryForm";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function AddCategory(){

    const URL = process.env.REACT_APP_SERVER_URL || '';
    const navigate = useNavigate();
    const title = <h1 className='page_header__title'> Add Category</h1>

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
        <>
            <PageHeader page_title={title} />
            <main>
                <div className="category_main">
                     <CategoryForm  handleOnSubmit={handleOnAddCategory} />

                </div>
            </main>
        </>
    );
}