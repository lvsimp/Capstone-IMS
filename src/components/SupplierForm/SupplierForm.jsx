import './SupplierForm.scss';
import { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function SupplierForm({onHandleSubmit, details}){

    const [supplierName , setSupplierName] = useState(details?.name);
    const [supplierAddress, setSupplierAddress] = useState(details?.address);
    const [supplierPhone, setSupplierPhone] = useState(details?.phone);
    const [supplierEmail, setSupplierEmail] = useState(details?.email);
    const [supplierContactPerson, setSupplierContactPerson] = useState(details?.contact_person);

    const supplierDetails = {
        name: supplierName,
        address: supplierAddress,
        phone: supplierPhone,
        email: supplierEmail,
        contact_person: supplierContactPerson
    }

    return(
        <div className='supplier_container'>
         
            <form 
                className='supplier'
                onSubmit={ e => {
                        console.log(supplierDetails);
                        onHandleSubmit(e, supplierDetails)
                }}
            >
                <label htmlFor="name" className='supplier_form__label'>Supplier Name</label>
                <input 
                    type="text"
                    name="name" 
                    id="name" 
                    className='supplier_form__input'
                    value={supplierName}
                    onChange = {e => {setSupplierName(e.target.value)}}
                    
                />
                <label htmlFor="address" className='supplier_form__label'>address</label>
                <input 
                    type="text"
                    name="address" 
                    id="address" 
                    className='supplier_form__input'
                    value={supplierAddress}
                    onChange = {e => {setSupplierAddress(e.target.value)}}
                />
                <label htmlFor='phone' className='supplier_form__label'>phone</label>
                <input 
                    type="text" 
                    name="phone" 
                    id="phone" 
                    className='supplier_form__input' 
                    value = {supplierPhone}
                    onChange = {e => {setSupplierPhone(e.target.value)}}
                />
                <label htmlFor="email" className='supplier_form__label'>email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    className='supplier_form__input'
                    value={supplierEmail}
                    onChange = {e  => {setSupplierEmail(e.target.value)}}
                />
                <label htmlFor="contact_person" className='supplier_form__label'>contact person</label>
                <input 
                    type="text" 
                    name="contact_person" 
                    id="contact_person" 
                    className='supplier_form__input'
                    value={supplierContactPerson}
                    onChange={e  => {setSupplierContactPerson(e.target.value)}}
                />
                <div className="supplier_form__btn_container">
                    <Button className='btn_cancel' as={Link} to='/supplier'>Cancel</Button> 
                    <Button className='btn_save' type='submit'>Save</Button>
                </div>
            </form>
        </div>
    );

}