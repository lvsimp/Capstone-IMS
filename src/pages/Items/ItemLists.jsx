import {useState, useEffect} from 'react';
import {Link , useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import edit from '../../assets/Icon/pencil-solid.svg';
import del from '../../assets/Icon/trash-can-solid.svg';


export default function ItemLists(){
    const editIcon = <img src={edit} alt="edit" className='supplier_form_edit' />;
    const delIcon = <img src={del} alt="delete" className='supplier_form_delete' />;

    const [itemList, setItemList] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/items`)
            .then(res =>{
                setItemList(res.data)
            })
            .catch(err => console.log(`Something is wrong please try again later ${err}`));

    }, [itemList])

    return (
        <>
            <h2>Inventory</h2>
            <Button as={Link} to={'/addItem'}>Add Item</Button>
            <Button as={Link} to={'/category'}>View Category</Button>

            <table>
                <thead>
                    <tr>
                        <th>Inventory Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>CTA</th>
                    </tr>
                </thead>
                <tbody>
                {
                    itemList && 
                    itemList.map(item =>{
                        return(
                            <tr key= {item.id}>
                                <td onClick={() => navigate(`/items/${item.id}`)}>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.category}</td>
                                <td>
                                    <Button 
                                        className='item_form__icon_edit'
                                        as={Link}
                                        to={`/editItem/${item.id}`}
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