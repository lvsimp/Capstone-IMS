import '../../pages/Supplier/Supplier.scss';
import { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function SupplierForm({onHandleSubmit, details}){

    const URL = process.env.REACT_APP_SERVER_URL || '';

    const [supplierName , setSupplierName] = useState(details?.name);
    const [supplierAddress, setSupplierAddress] = useState(details?.address);
    const [supplierPhone, setSupplierPhone] = useState(details?.phone);
    const [supplierEmail, setSupplierEmail] = useState(details?.email);
    const [supplierContactPerson, setSupplierContactPerson] = useState(details?.contact_person);
    const [file, setFile] = useState(details?.images);
    const [preview, setPreview] = useState()

    // const supplierDetails = {
    //     name: supplierName,
    //     address: supplierAddress,
    //     phone: supplierPhone,
    //     email: supplierEmail,
    //     contact_person: supplierContactPerson
    // }

    return(
         <Form 
                className='supplier_form'
                onSubmit={ e => {
                        e.preventDefault();
                        const formData = new FormData();
                        formData.append('name', supplierName);
                        formData.append('address', supplierAddress);
                        formData.append('phone', supplierPhone);
                        formData.append('email', supplierEmail);
                        formData.append('contact_person', supplierContactPerson);
                        onHandleSubmit(formData)
                }}
            >
                <Form.Group className='supplier_form__group'>
                    <Form.Label htmlFor="name" className='supplier_form__label'>Supplier Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name" 
                        id="name" 
                        className='supplier_form__input'
                        value={supplierName}
                        onChange = {e => {setSupplierName(e.target.value)}}
                        
                        />
                </Form.Group>
                <Form.Group className='supplier_form__group'>
                    <Form.Label htmlFor="address" className='supplier_form__label'> Supplier Address</Form.Label>
                    <Form.Control 
                        type="text"
                        name="address" 
                        id="address" 
                        className='supplier_form__input'
                        value={supplierAddress}
                        onChange = {e => {setSupplierAddress(e.target.value)}}
                        />
                </Form.Group>
                <Form.Group className='supplier_form__group'>
                    <Form.Label htmlFor='phone' className='supplier_form__label'>Supplier Phone</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="phone" 
                        id="phone" 
                        className='supplier_form__input' 
                        value = {supplierPhone}
                        onChange = {e => {setSupplierPhone(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group className='supplier_form__group'>
                    <Form.Label htmlFor="email" className='supplier_form__label'>Supplier Email</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="email" 
                        id="email" 
                        className='supplier_form__input'
                        value={supplierEmail}
                        onChange = {e  => {setSupplierEmail(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group className='supplier_form__group'>
                    <Form.Label htmlFor="contact_person" className='supplier_form__label'>Supplier Contact Person</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="contact_person" 
                        id="contact_person" 
                        className='supplier_form__input'
                        value={supplierContactPerson}
                        onChange={e  => {setSupplierContactPerson(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group>
                <Form.Label>Supplier Image Upload</Form.Label>
                    <div className="item_form__group_img">
                        <img className={preview || file ?'':'img_hidden'} src={preview || `${URL}/${file}`} alt ='preview'/>
                        <Form.Control 
                        className='supplier_form__group_input'
                        name = "images"
                        type='file'  
                        onChange={e =>{
                                if(e.target.files){
                                    setFile(e.target.files[0]);
                                    const newfile = window.URL.createObjectURL(e.target.files[0]);
                                    setPreview(newfile);
                                }
                            } 
                        } />
                    </div>
                </Form.Group>
                <Form.Group className='supplier_form__group'>
                    <Button className='btn_cancel' as={Link} to='/supplier'>Cancel</Button> 
                    <Button className='btn_save' type='submit'>Save</Button>
                </Form.Group>
            </Form>
    );

}