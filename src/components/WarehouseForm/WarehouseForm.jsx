import { useState } from "react";
import { Button , Form} from "react-bootstrap";
import {Link} from 'react-router-dom';


export default function WarehouseForm({ onHandleSubmit, details}){

    const URL = process.env.REACT_APP_SERVER_URL || '';
    const [warehouseName, setWarehouseName] = useState(details?.name);
    const [warehouseAddress, setWarehouseAddress] = useState(details?.address);
    const [file, setFile] = useState(details?.images);
    const [preview, setPreview] = useState()

    return(
            <Form
                className='warehouse_form'
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData();
                        formData.append("images", file, file.name)
                        formData.append("name", warehouseName)
                        formData.append("address", warehouseAddress)
    
                    onHandleSubmit(formData)
                }}
            >
                <Form.Group className="warehouse_form__group">
                    <Form.Label htmlFor="name" className='warehouse_form__label'>Warehouse Name</Form.Label>
                    <Form.Control 
                        type="text"
                        name="name" 
                        id="name" 
                        className='warehouse_form__input'
                        value={warehouseName}
                        onChange = {e => {setWarehouseName(e.target.value)}}
                    />   
                </Form.Group>
                <Form.Group className="warehouse_form__group">
                    <Form.Label htmlFor="address" className='warehouse_form__label'>Address</Form.Label>
                    <Form.Control
                        type="text"
                        name="address" 
                        id="address" 
                        className='warehouse_form__input'
                        value={warehouseAddress}
                        onChange = {e => {setWarehouseAddress(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group className='warehouse_form__group'>
                <Form.Label>Warehouse Image Upload</Form.Label>
                <div className="warehouse_form__group_img">
                    <img className={preview || file ?'':'img_hidden'} src={preview || `${URL}/${file}`} alt ='preview'/>
                    <Form.Control 
                    className='warehouse_form__group_input'
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
                <Form.Group className="warehouse_form__group">
                        <Button className="btn_save" type='submit'>Save</Button>
                        <Button className="btn_cancel" as={Link} to='/warehouse'>Cancel</Button>
                </Form.Group>
            </Form>
    );
}