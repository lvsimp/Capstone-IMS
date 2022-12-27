import PageHeader from '../../components/PageHeader/PageHeader';
import add from '../../assets/Icon/circle-plus-solid.svg';
import del from '../../assets/Icon/trash-can-solid.svg';
import edit from '../../assets/Icon/pencil-solid.svg';
import { useState , useEffect} from "react";
import { Button } from "react-bootstrap";
import { Link , useNavigate} from 'react-router-dom';
import axios from "axios";

export default function CategoryList(){

    const URL = process.env.REACT_APP_SERVER_URL || '';
    const addIcon = <img src={add} alt="add" className='add_icon' onClick={() => navigate('/addCategory')} />;
    const editIcon = <img src={edit} alt="edit" className='edit_icon' />;
    const delIcon = <img src={del} alt="delete" className='delete_icon' />;
    const title = <h1 className='page_header__title'>Category <span>{addIcon}</span></h1>

    const [categoryList, setCategoryList] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${URL}/category`)
            .then(res => {
                setCategoryList(res.data);
            })
            .catch(err => console.log(`Something is wrong Please try again later. ${err}`));

    }, [categoryList, URL])

    
    return (
        <>
            <PageHeader page_title={title} />
            <main>
                <div className="category_main">
                    <table className='category_main_table'>
                        <thead>
                            <tr>
                                <th>Categories</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categoryList && 
                                categoryList.map(cat => {
                                    return (
                                        <tr key ={cat.id} className='category_row'>
                                            <td>{cat.type}</td>
                                            <td>
                                                <Button 
                                                    className='btn_edit'
                                                    as={Link}
                                                    to={`/editCategory/${cat.id}`}
                                                >{editIcon}</Button>
                                            </td>
                                            <td>
                                                <Button className='btn_delete'>{delIcon}</Button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}