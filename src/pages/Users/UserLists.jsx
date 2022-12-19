import photo from '../../assets/Images/Laura.jpg';
import PageHeader from '../../components/PageHeader/PageHeader';
import add from '../../assets/Icon/circle-plus-solid.svg';
import del from '../../assets/Icon/trash-can-solid.svg';
import edit from '../../assets/Icon/pencil-solid.svg';
import {Link,useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import '../../style/btn.scss';
import axios from 'axios';
import './User.scss';

export default function UserLists(){

    const editIcon = <img src={edit} alt="edit" className='edit_icon' />;
    const delIcon = <img src={del} alt="delete" className='delete_icon' />;
    const addIcon = <img src={add} alt="add" className='add_icon' onClick={() => navigate('/addUser')} />;
    
    const title = <h1 className='page_header__title'>Employees <span>{addIcon}</span></h1>
    
    const [userList, setUserList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        axios
            .get(`http://localhost:8000/users`)
            .then( res => {
                setUserList(res.data)
            })
            .catch(err => console.log(`Can't retrieve data from the database ${err}`))

    }, [userList])


    return(
        <>
            <PageHeader page_title={title}/>
            <main>
                <div className='user_main'>
                    <table className='user_main_table'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Contact Number</th>
                                <th>Role</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList && 
                                userList.map(item => {
                                    return (
                                        <tr className='user_row' key = {item.id}>
                                            <td>
                                                <img src={photo} alt="profile" />
                                            </td>
                                            <td>{`${item.first_name} ${item.last_name}`}</td>
                                            <td>Vancouver</td>
                                            <td>{item.email}</td>
                                            <td>(495-239-2931)</td>
                                            <td>{item.role}</td>
                                            <td>
                                                <Button 
                                                    className='btn_edit'
                                                    as={Link}
                                                    to={`/editUser/${item.id}`}
                                                >{editIcon}</Button>
                                            </td>
                                            <td>
                                                <Button className='btn_delete'>{delIcon}</Button>
                                            </td>
                                        </tr>
                                    ) 
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}