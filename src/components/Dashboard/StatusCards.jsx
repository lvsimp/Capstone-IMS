import './StatusCards.scss';


export default function StatusCards({title, numberStatus, icon}){
    return (
        <article className='sc'>
            <div className='sc_wrapper'>
                {icon}
                <div className='sc_desc'>
                    <p>{title}</p>
                    <p className='sc_desc_number'>{numberStatus}</p>
                </div>
            </div>
        </article>
    )
}