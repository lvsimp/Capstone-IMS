import RecentActivities from "../../components/Dashboard/RecentActivities";
import StatusCards from "../../components/Dashboard/StatusCards";
import PageHeader from "../../components/PageHeader/PageHeader";
import Deliveries from "../../components/Dashboard/Deliveries";
import warning from '../../assets/Icon/boxes-stacked-warning.svg';
import danger from '../../assets/Icon/boxes-stacked-danger.svg';
import go from '../../assets/Icon/boxes-stacked-go.svg';
import './Dashboard.scss';
import { useEffect,  useState  } from "react";
import axios from "axios";

export default function Dashboard(){

    const title = <h1 className="page_header__title">Dashboard</h1>
    const URL = process.env.REACT_APP_SERVER_URL || '';
    const [totalQty, setTotalQty] = useState(); 
    const [lowQty, setLowQty] = useState();
    const [outOfStock, setOutOfStock] = useState();

    useEffect(()=>{
        axios
            .get(`${URL}/items/dashboard/totalqty`)
            .then(res => {
                setTotalQty(res.data[0].qty)
            })
            .catch(err => console.log(err))
        axios
            .get(`${URL}/items/dashboard/lowestqty`)
            .then(res =>{
                setLowQty(res.data[0].qty)
            })
            .catch(err => console.log(err))
        axios
            .get(`${URL}/items/dashboard/outofstock`)
            .then(res =>{
                setOutOfStock(res.data[0].qty)
            })
            .catch(err => console.log(err))
    },[URL]);

    return(
        <>
            <PageHeader page_title={title} />
            <main>
                <section className="inventory_summary">
                    <div className="inventory_summary__insight">
                        <StatusCards title='Total Available Items' numberStatus={totalQty}icon={<img src={go} alt='box'/> } />
                        <StatusCards title='Lowest Items Available' numberStatus={lowQty} icon={<img src={warning} alt='box' /> } />
                        <StatusCards title='Out of stuck items' numberStatus={outOfStock} icon={<img src={danger} alt='box' /> } />
                    </div>
                    {/* deliveries */}
                    <Deliveries />
                </section>
                <section className="recent_activities">
                   <RecentActivities />
                </section>
            </main>
        </>
    );
}