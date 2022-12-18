import {Form, Button} from 'react-bootstrap';
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function UserForm({onHandleSubmit, details}){
    
    const [firstName, setFirstName] = useState(details?.first_name);
    const [lastName, setLastName] = useState(details?.last_name);
    const [email, setEmail] = useState(details?.email);
    const [username, setUsername] = useState(details?.username);
    const [password, setPassword] = useState(details?.password);
    const [role, setRole] = useState(details?.role);

    const  userDetail = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        password: password,
        role: role
    }

    return(
        <Form onSubmit={(e) => onHandleSubmit(e, userDetail)}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    type='text'
                    value={firstName} 
                    onChange ={(e) => setFirstName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    type='text'
                    value={lastName} 
                    onChange ={(e) => setLastName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type='email'
                    value={email} 
                    onChange ={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type='text'
                    value={username} 
                    onChange ={(e) => setUsername(e.target.value)}
                    required
                />
            </Form.Group>
            {/* <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type='password'
                    value={password} 
                    onChange ={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group> */}
            <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Select value={role} onChange={(e) => {setRole(e.target.value)}}>
                    <option >Select A Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Sales Rep">Sales Rep</option>
                    <option value="Cashier">Cashier</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Button className='btn_cancel' as={Link} to={'/user'}>Cancel</Button>
                <Button className='btn_save' type='submit'>Save</Button>
            </Form.Group>
        </Form>
    )

}