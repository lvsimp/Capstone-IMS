import axios from "axios";
import { useState, useEffect } from "react";
import { useParams , Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

export default function ItemDetail(){

    const [itemDetail, setItemDetail] = useState();
    const [qr, setQr] = useState();
    const {itemId} = useParams();
     

    useEffect(()=>{
        axios
            .get(`http://localhost:8000/items/${itemId}`)
            .then(res => setItemDetail(res.data[0]))
            .catch(err => console.log(`Can't load data. Please try again later. ${err}`));
    }, [itemId])

    console.log(itemDetail)

    const createQrCode = () => {

        axios
            .get(`http://api.qrserver.com/v1/create-qr-code/?data=http://localhost:3000/items/${itemId}&size=200x200&format=svg`)
            .then(res => {
                setQr(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return(
        <>
            <div>
                <h1>{itemDetail?.name}</h1>
            </div>
            <div>
                <div>
                    <span>Description</span>
                    <p>{itemDetail?.description}</p>
                    <span>Category</span>
                    <p></p>
                    <span>Qty</span>
                    <p>{itemDetail?.quantity}</p>
                    <span>Supplier</span>
                    <p></p>
                    <span>Warehouse</span>
                    <p></p>
                </div>
                <div>
                    {/* <img src={`data:images/svg+xml;base64,${base64data}`} alt="" />
                    <div dangerouslySetInnerHTML={{__html: qr}} /> */}
                    <div dangerouslySetInnerHTML={{__html: qr}} />
                    <span>Price: $</span>
                    <p>{itemDetail?.price}</p>
                </div>
            </div>
            <div>
                <Button as={Link} to='/items'>Back</Button>
                <Button onClick={() => createQrCode()}>Generate QR Code</Button>
            </div>
        </>
    );
}