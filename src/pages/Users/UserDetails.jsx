import { useParams , Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import back from '../../assets/Icon/chevron-left-solid.svg';

export default function UserDetails(){
    
    const {userId} = useParams();
    const [userDetail, setUserDetail] = useState();
    const backIcon = <img src={back} alt="back" className='btn_back' />

    useEffect(() => {

        axios
            .get(`http://localhost:8000/users/${userId}`)
            .then(res =>{
                console.log(res.data[0]);
                setUserDetail(res.data.map(item => {
                    return (
                        <div>
                            <Button as={Link} to={'/user'}>{backIcon}</Button>
                            <h2>{`${item.first_name} ${item.last_name}`}</h2>
                            <h4>username:</h4><span>{item.username}</span>
                            <h4>email:</h4><span>{item.email}</span>
                            <h4>role:</h4><span>{item.role}</span>
                        </div>
                    );
                }));
            })
            .catch(err => console.log(`Can't retrieve data ${err}`));

    }, [userId]);


    return (
        <>
            {userDetail}
        </>
    );
}