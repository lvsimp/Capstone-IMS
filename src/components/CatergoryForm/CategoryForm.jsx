import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';
import '../../style/btn.scss';
import '../../pages/Category/Category.scss';
import {Link} from 'react-router-dom';


export default function CategoryForm({ detail, handleOnSubmit}){


    const [categoryName, setCategoryName] = useState(detail?.type);
    const [formSubmit, setFormSubmit] =  useState(false);



    return (
            <Form 
                className='category_form'
                id='catForm'
                onSubmit={ e => {
                            handleOnSubmit(e, {type:categoryName})
                            setFormSubmit(true);
                        }
                    }
            >
                <Form.Group className='category_form__group'>
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control 
                        type = 'text'
                        value={categoryName} 
                        onChange={e => {setCategoryName(e.target.value)}}
                        className ={ 
                            formSubmit && !categoryName 
                            ? "category_form__input category_form__input--invalid"
                            : "category_form__input"

                        }
                        />
                    <Form.Control.Feedback type='invalid' className={formSubmit && !categoryName ? 'category__feedback' : 'category__feedback--hidden' }>
                        Category Name is Required
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='category_form__group'>
                    <Button as={Link} to='/category'>Cancel</Button>
                    <Button type='submit' className='btn_save'>Save</Button>
                </Form.Group>
            </Form>
    );
}