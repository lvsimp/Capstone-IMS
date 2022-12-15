import {Button} from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import edit from '../../assets/Icon/pencil-solid.svg';
import del from '../../assets/Icon/trash-can-solid.svg';


export default function UserLists(){

    const editIcon = <img src={edit} alt="edit" className='supplier_form_edit' />;
    const delIcon = <img src={del} alt="delete" className='supplier_form_delete' />;
    const [userList, setUserList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        axios
            .get(`http://localhost:8000/users`)
            .then( res => {
               
                setUserList(res.data.map(item => {
                    return (
                        <tr key = {item.id}>
                            <td onClick={() => navigate(`/user/${item.id}`)}>{`${item.first_name} ${item.last_name}`}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                                <Button 
                                        className='warehouse_form__icon_edit'
                                        as={Link}
                                        to={`/editUser/${item.id}`}
                                    >{editIcon}</Button>
                                <Button className='warehouse_form__icon_delete'>{delIcon}</Button>
                            </td>
                        </tr>
                    ) 
                }))
            })
            .catch(err => console.log(`Can't retrieve data from the database ${err}`))

    }, [userList])


    return(
        <div>
            <h2>Employee List</h2>
            <Button as={Link} to={'/addUser'}>Add Employee</Button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>CTA</th>
                    </tr>
                </thead>
                <tbody>
                    {userList}
                </tbody>
            </table>
        </div>
    );
}