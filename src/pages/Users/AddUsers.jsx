import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';
import { useState } from 'react';
import './User.scss';

export default function AddUsers(){
    const navigate = useNavigate();
    const URL = process.env.REACT_APP_SERVER_URL || '';

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();

    const  userDetail = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        password: password,
        role: role
    }

    const handleOnAddUser = (event, userDetail ) =>{

        event.preventDefault();

        axios
            .post(`${URL}/users`, userDetail)
            .then(res => {
                console.log(res.data)
                alert('a user is added.');
                navigate('/user');
            })
            .catch(err => console.log(`Something is wrong please try again later ${err}`));

    }

    return(
        <div className='user_container'>
            <h1 className="user_title">Add Employee</h1>
            <Form className='user_form' onSubmit={(e) => handleOnAddUser(e, userDetail)}>
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
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type='password'
                    value={password} 
                    onChange ={(e) => setPassword(e.target.value)}
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