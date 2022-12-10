import './Btn.scss';

export default function Btn({icon, text, classname, ...other}){

    
    return(
        <button  className={`btn ${classname}`} {...other}>
            <span>{icon}</span> 
            {text}
        </button>
    )
}