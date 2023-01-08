import {Form, Button} from 'react-bootstrap';
import axios from "axios";
import { useNavigate , useParams, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import './User.scss';
import Swal from 'sweetalert2';

export default function EditUsers(){

    const URL = process.env.REACT_APP_SERVER_URL || '';
    const navigate = useNavigate();
    const {userId} = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        axios
            .get(`${URL}/users/${userId}`, {
                headers : {
                    Authorization:`Bearer ${sessionStorage.getItem('token')}` 
                }
            })
            .then(res => {
                const detail = res.data[0];
                setFirstName(detail?.first_name);
                setLastName(detail?.last_name);
                setEmail(detail?.email);
                setUsername(detail?.username);
                setRole(detail?.role);
            })
            .catch(err => console.log(`Something is wrong. Please try again later. ${err}`))
    },[userId, URL])

    const handleOnUpdateUser = (event, userDetail ) =>{

        event.preventDefault();
        console.log(userDetail)

        axios
            .put(`${URL}/users/${userId}`, userDetail)
            .then(res => {
                if(res.data){
                    Swal.fire({
                        icon: 'success',
                        title: 'User Updated Successfully',
                        text: ` You updated ${res.data[0].first_name}`
                    })
                    navigate('/user')
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Unexpected Error',
                    text: err
                })
            });

    }

    const  userDetail = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        role: role
    }

    return(
        <div className='user_container'>
            <h1 className="user_title">Edit Employee</h1>
            <Form className='user_form' onSubmit={(e) => handleOnUpdateUser(e, userDetail)}>
                <Form.Group className='user_form_group'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type='text'
                        value={firstName} 
                        onChange ={(e) => setFirstName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className='user_form_group'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type='text'
                        value={lastName} 
                        onChange ={(e) => setLastName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className='user_form_group'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type='email'
                        value={email} 
                        onChange ={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className='user_form_group'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type='text'
                        value={username} 
                        onChange ={(e) => setUsername(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className='user_form_group'>
                    <Form.Label>Role</Form.Label>
                    <Form.Select value={role} onChange={(e) => {setRole(e.target.value)}}>
                        <option >Select A Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Sales Rep">Sales Rep</option>
                        <option value="Cashier">Cashier</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='btn_container'>
                    <Button className='btn_cancel' as={Link} to={'/user'}>Cancel</Button>
                    <Button className='btn_save' type='submit'>Save</Button>
                </Form.Group>
            </Form>
        </div>
    );
}