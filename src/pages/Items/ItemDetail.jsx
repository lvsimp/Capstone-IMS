import axios from "axios";
import { useState, useEffect, useContext} from "react";
import { useParams, Link} from "react-router-dom";
import logo from '../../assets/Logo/Logo.svg';
import UserContext from '../../UserContext';
import {Button} from 'react-bootstrap';

export default function ItemDetail(){

    const {user} = useContext(UserContext);

    const URL = process.env.REACT_APP_SERVER_URL || '';
    const [itemDetail, setItemDetail] = useState();
    const [qr, setQr] = useState();
    const {itemId} = useParams();
     

    useEffect(()=>{
        axios
            .get(`${URL}/items/${itemId}`)
            .then(res => setItemDetail(res.data[0]))
            .catch(err => console.log(`Can't load data. Please try again later. ${err}`));
        axios
            .get(`http://api.qrserver.com/v1/create-qr-code/?data=http://localhost:3000/items/${itemId}&size=200x200&format=svg`)
            .then(res => {
                setQr(res.data)
            })
            .catch(err => console.log(err));
    }, [itemId, URL])


    return(
        <>
        <div className="wrapper">
            <div className="brand_name">
               <img src={logo} alt="brand_name" />
            </div>
            {
                user?.role ==="Admin"
                ?
                <div className="item_wrapper">
                    <div className="item_image">
                        <img src={`${URL}/${itemDetail?.images}`} alt={itemDetail?.name} />
                    </div>
                    <div className="item_description">
                        <h2>{itemDetail?.name}</h2>
                        <p>{itemDetail?.description}</p>
                        <p>Price: $ <span className="bold">{itemDetail?.price}</span></p>
                        <div dangerouslySetInnerHTML={{__html: qr}} />
                        <Button as={Link} to='/items'>Back to Item Lists</Button>
                    </div>
                </div>
                : 
                <div className="item_wrapper">
                    <div className="item_image">
                        <img src={`${URL}/${itemDetail?.images}`} alt={itemDetail?.name} />
                    </div>
                    <div className="item_description">
                        <h2>{itemDetail?.name}</h2>
                        <p>{itemDetail?.description}</p>
                        <p>Price: $<span className="bold">{itemDetail?.price}</span></p>
                        <Button as={Link} to='/items'>Back to Item Lists</Button>
                    </div>
                </div>
            }
            
        </div>
        </>
    );
}