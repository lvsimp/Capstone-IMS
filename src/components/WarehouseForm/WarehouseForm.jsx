import { useState } from "react";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

export default function WarehouseForm({title, onHandleSubmit, details}){

    const [warehouseName, setWarehouseName] = useState(details?.name);
    const [warehouseAddress, setWarehouseAddress] = useState(details?.address);

    const warehouseDetails = {
        name: warehouseName,
        address: warehouseAddress
    }

    return(
        <div>
            <h1>{title}</h1>
            <form 
                className='warehouse'
                onSubmit={ e => {
                        onHandleSubmit(e, warehouseDetails)
                }}
            >
                       <label htmlFor="name" className='warehouse_form__label'>Warehouse Name</label>
                        <input 
                            type="text"
                            name="name" 
                            id="name" 
                            className='warehouse_form__input'
                            value={warehouseName}
                            onChange = {e => {setWarehouseName(e.target.value)}}
                        />   
                    <label htmlFor="address" className='warehouse_form__label'>address</label>
                    <input 
                        type="text"
                        name="address" 
                        id="address" 
                        className='warehouse_form__input'
                        value={warehouseAddress}
                        onChange = {e => {setWarehouseAddress(e.target.value)}}
                    />
                    <div className="supplier_form__btn_container">
                        <Button className="btn_cancel" as={Link} to='/warehouse'>Cancel</Button>
                        <Button className="btn_save" type='submit'>Save</Button>
                    </div>
            </form>
        </div>
    );
}