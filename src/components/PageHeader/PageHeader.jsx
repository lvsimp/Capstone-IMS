import './PageHeader.scss';
import avatar from '../../assets/Icon/user-solid.svg';


export default function PageHeader({page_title }){

    // useEffect(() =>{
    //     const jwtToken = sessionStorage.getItem('jwt_token');
    
    //     if(jwtToken){
    //       loadProfile(jwtToken);
    //     }
    //   }, [])
    // const loadProfile = (jwtToken) => {
    //     axios
    //       .get(`${URL}/users`, 
    //         {
    //           headers: {
    //             Authorization: `Bearer ${jwtToken}`,
    //           },
    //         }
    //       )
    //       .then(res =>{
    //         setLoggedIn(true);
    //         setUser(res.data.user);
    //       })
    //       .catch( err => {
    //         console.log(err);
    //       })
    //   }
    return ( 
       <div className='page_header'>
            {page_title} 
            <div className='user_profile'>
                <div className='user_details'>
                    <p>Hey! <span>Laura</span></p>
                    <p>Admin</p>
                </div>
                <img src={avatar} alt='user' className='avatar'/>
            </div>
       </div>

    );
}