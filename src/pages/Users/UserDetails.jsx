import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserDetails(){
    
    const {userId} = useParams();
    const [userDetail, setUserDetail] = useState();

    useEffect(() => {

        axios
            .get(`http://localhost:8000/users/${userId}`)
            .then(res =>{
                console.log(res.data[0]);
                setUserDetail(res.data[0]);
            })
            .catch(err => console.log(`Can't retrieve data ${err}`));

    }, [userId]);


    return (
        <>
            
        </>
    );
}