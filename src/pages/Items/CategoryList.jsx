import axios from "axios";
import {Link} from 'react-router-dom';
import { useState , useEffect} from "react";
import { Button } from "react-bootstrap";
import edit from '../../assets/Icon/pencil-solid.svg';
import del from '../../assets/Icon/trash-can-solid.svg';


export default function CategoryList(){

    const URL = process.env.REACT_APP_SERVER_URL || '';

    const editIcon = <img src={edit} alt="edit" className='supplier_form_edit' />;
    const delIcon = <img src={del} alt="delete" className='supplier_form_delete' />;

    const [categoryList, setCategoryList] = useState();

    useEffect(() => {
        axios
            .get(`${URL}/category`)
            .then(res => {
                setCategoryList(res.data);
            })
            .catch(err => console.log(`Something is wrong Please try again later. ${err}`));

    }, [categoryList])


    return (
        <>
            <div>
                <h1>Category</h1>
                <Button as={Link} to='/addCategory'>Add Category</Button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Categories</th>
                        <th>CTA</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categoryList && 
                        categoryList.map(cat => {
                            return (
                                <tr key ={cat.id}>
                                    <td>{cat.type}</td>
                                    <td>
                                        <Button 
                                            className='item_form__icon_edit'
                                            as={Link}
                                            to={`/editCategory/${cat.id}`}
                                        >{editIcon}</Button>
                                        <Button className='item_form__icon_delete'>{delIcon}</Button>
                                
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}