import { useState } from "react";
import { Button } from "react-bootstrap";
import {Link, useMatch} from 'react-router-dom';
import back from '../../assets/Icon/chevron-left-solid.svg';


export default function WarehouseForm({onHandleSubmit, details}){

    const backIcon = <img src={back} alt="back"  className='supplier_form_back'/>

    console.log(details?.name);

    const [warehouseName, setWarehouseName] = useState(details?.name);
    const [warehouseAddress, setWarehouseAddress] = useState(details?.address);

    const warehouseDetails = {
        name: warehouseName,
        address: warehouseAddress
    }

    return(
        <div>
            <form 
                className='warehouse'
                onSubmit={ e => {
                        console.log('This was clicked')
                        onHandleSubmit(e, warehouseDetails)
                }}
            >
                {
                    useMatch('/warehouse/:warehouseId') 
                    ?<>
                        <div className="warehouse_form">
                            <Button className='warehouse_form__icon_back' as={Link} to='/warehouse' >{backIcon}</Button>
                            <input 
                                type="text" 
                                name="warehouse_name" 
                                id="warehouse_name" 
                                className='warehouse_form__input_title'
                                value={warehouseName}  
                                readOnly={true}
                            />
                        </div>
                        <label htmlFor="address" className='warehouse_form__label'>address</label>
                        <input 
                            type="text"
                            name="address" 
                            id="address" 
                            className='warehouse_form__input'
                            value={warehouseAddress}
                            onChange = {e => {setWarehouseAddress(e.target.value)}}
                            readOnly={true}
                        />
                    </>
                    :<>
                        <label htmlFor="name" className='warehouse_form__label'>Warehouse Name</label>
                        <input 
                            type="text"
                            name="name" 
                            id="name" 
                            className='warehouse_form__input'
                            value={warehouseName}
                            onChange = {e => {setWarehouseName(e.target.value)}}
                        />
                    </>
                }    
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