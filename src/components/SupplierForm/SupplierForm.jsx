import './SupplierForm.scss';
import { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Link , useMatch} from 'react-router-dom';


//icons
import back from '../../assets/Icon/chevron-left-solid.svg';


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
                            console.log('This was clicked')
                            onHandleSubmit(e, supplierDetails)
                    }}
                >
                    {
                        useMatch('/supplier/:supplierId') 
                        ?<>
                            <div className="supplier_form">
                                <Button className='supplier_form__icon_back' as={Link} to='/supplier' >
                                    <img src={back} alt="back"  className='supplier_form_back'/>
                                </Button>
                                <input 
                                    type="text" 
                                    name="supplier_name" 
                                    id="supplier_name" 
                                    className='supplier_form__input_title'
                                    defaultValue={supplierName}  
                                    readOnly={true}
                                />
                            </div>
                            <label htmlFor="address" className='supplier_form__label'>address</label>
                            <input 
                                type="text"
                                name="address" 
                                id="address" 
                                className='supplier_form__input'
                                defaultValue={supplierAddress}
                                onChange = {e => {setSupplierAddress(e.target.value)}}
                                readOnly={true}
                            />
                            <label htmlFor='phone' className='supplier_form__label'>phone</label>
                            <input 
                                type="text" 
                                name="phone" 
                                id="phone" 
                                className='supplier_form__input' 
                                defaultValue = {supplierPhone}
                                onChange = {e => {setSupplierPhone(e.target.value)}}
                                readOnly={true}
                            />
                            <label htmlFor="email" className='supplier_form__label'>email</label>
                            <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                className='supplier_form__input'
                                defaultValue={supplierEmail}
                                onChange = {e  => {setSupplierEmail(e.target.value)}}
                                readOnly={true}
                            />
                            <label htmlFor="contact_person" className='supplier_form__label'>contact person</label>
                            <input 
                                type="text" 
                                name="contact_person" 
                                id="contact_person" 
                                className='supplier_form__input'
                                defaultValue={supplierContactPerson}
                                onChange={e  => {setSupplierContactPerson(e.target.value)}}
                                readOnly={true}
                            />
                        </>
                        :<>
                            <label htmlFor="name" className='supplier_form__label'>Supplier Name</label>
                            <input 
                                type="text"
                                name="name" 
                                id="name" 
                                className='supplier_form__input'
                                value={supplierDetails.supplierName}
                                onChange = {e => {setSupplierName(e.target.value)}}
                                placeholder='Supplier Name'
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
                        </>
                    }
                </form>
        </div>
    );

}