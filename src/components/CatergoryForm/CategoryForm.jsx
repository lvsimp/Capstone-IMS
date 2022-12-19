import {Form, Button } from 'react-bootstrap';
import {useState} from 'react';
import {Link} from 'react-router-dom';


export default function CategoryForm({handleOnSubmit, detail, title}){

    const [categoryName, setCategoryName] = useState(detail?.type);

    return (
        <>
            <h1>{title}</h1>
            <Form onSubmit={e => handleOnSubmit(e, {type:categoryName})}
            >
                <Form.Group>
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control value={categoryName} onChange={e => setCategoryName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Button className='btn_cancel' as={Link} to={'/category'}>Cancel</Button>
                    <Button className='btn_save' type='submit'>Save</Button>
                </Form.Group>
            </Form>
        </>
    );
}