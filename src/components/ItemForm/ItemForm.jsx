import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';


export default function ItemForm({onHandleSubmit, detail}){

    const URL = process.env.REACT_APP_SERVER_URL || '';
    const nav = useNavigate();

    //for select values
    const [categoryList, setCategoryList] = useState([]);
    const [warehouseList, setWarehouseList] =useState([]);
    const [supplierList, setSupplierList] = useState([]);

    //for form 
    const [itemName, setItemName] = useState(detail?.name);
    const [description, setDescription] = useState(detail?.description);
    const [price, setPrice] = useState(detail?.price);
    const [qty, setQty] = useState(detail?.quantity);
    const [category, setCategory] = useState(detail?.category_id);
    const [supplier, setSupplier] = useState(detail?.supplier_id);
    const [warehouse, setWarehouse] = useState(detail?.warehouse_id);


    //for Lists Values
    useEffect(() =>{
        axios
            .get(`${URL}/warehouse`)
            .then(res =>{
                setWarehouseList(res.data);
            })
            .catch(err => console.log( `Can't load warehouses ${err}`));
        axios
            .get(`${URL}/supplier`)
            .then(res =>{
                setSupplierList(res.data);
            })
            .catch(err => console.log( `Can't load Supplier ${err}`));
        axios
            .get(`${URL}/category`)
            .then(res =>{
                setCategoryList(res.data);
            })
            .catch(err => console.log( `Can't load category  ${err}`));
    },[URL])

    const itemDetail = {
        name: itemName,
        description: description,
        price: price,
        quantity: qty,
        category_id: category,
        warehouse_id: warehouse,
        supplier_id: supplier
    }

    return(
        <Form
            className='item_form'
            onSubmit={(e) => onHandleSubmit(e, itemDetail)}
        >
            <Form.Group className='item_form__group'>
                <Form.Label>Name</Form.Label>
                <Form.Control value={itemName} onChange={e => setItemName(e.target.value)} />
            </Form.Group>
            <Form.Group className='item_form__group'>
                <Form.Label>Description</Form.Label>
                <Form.Control value={description} onChange={e => setDescription(e.target.value)}/>
            </Form.Group>
            <Form.Group className='item_form__group'>
                <Form.Label>Price</Form.Label>
                <Form.Control value={price} onChange={e => setPrice(e.target.value)}/>

            </Form.Group>
            <Form.Group className='item_form__group'>
                <Form.Label>Quantity</Form.Label>
                <Form.Control value={qty} onChange={e => setQty(e.target.value)}/>

            </Form.Group>
            <Form.Group className='item_form__group'>
                <Form.Label>Category</Form.Label>
                <Form.Select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="">- select category -</option>
                    {
                        categoryList &&
                        categoryList.map(cat => {
                            return <option key={cat.id} value={cat.id}>{cat.type}</option>
                        })
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className='item_form__group'>
                <Form.Label>Warehouse</Form.Label>
                <Form.Select value={warehouse} onChange={e => setWarehouse(e.target.value)}>
                    <option value="">- select warehouse -</option>

                    {
                        warehouseList &&
                        warehouseList.map(wh => {
                            return <option key={wh.id} value={wh.id}>{wh.name}</option>
                        })
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className='item_form__group'>
                <Form.Label>Supplier</Form.Label>
                <Form.Select value={supplier} onChange={e => setSupplier(e.target.value)}>
                    <option value="">- select supplier -</option>
                    
                    {
                        supplierList &&
                        supplierList.map(sup => {
                            return <option key={sup.id} value={sup.id}>{sup.name}</option>
                        })
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className='item_form__group'>
                <Button className='btn_save' type='submit'>Save</Button>
                <Button className='btn_cancel' onClick={()=>nav('/items')}>Cancel</Button>
            </Form.Group>
        </Form>
    );
}