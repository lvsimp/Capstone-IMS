import PageHeader from '../../components/PageHeader/PageHeader';
import './Orders.scss';

export default function Orders(){

    const title = <h1 className='page_header__title'>Orders</h1>
    
    return(
        <>
          <PageHeader page_title={title}/>
          <main>
                <div className='order_main'>

                </div>
          </main>
        </>
    );
}