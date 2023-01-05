import RecentActivities from "../../components/Dashboard/RecentActivities";
import StatusCards from "../../components/Dashboard/StatusCards";
import PageHeader from "../../components/PageHeader/PageHeader";
import Deliveries from "../../components/Dashboard/Deliveries";
import warning from '../../assets/Icon/boxes-stacked-warning.svg';
import danger from '../../assets/Icon/boxes-stacked-danger.svg';
import go from '../../assets/Icon/boxes-stacked-go.svg';
import './Dashboard.scss';
import { useEffect } from "react";

export default function Dashboard(){

    const title = <h1 className="page_header__title">Dashboard</h1>

    useEffect(()=>{

    },[]);

    return(
        <>
            <PageHeader page_title={title} />
            <main>
                <section className="inventory_summary">
                    <div className="inventory_summary__insight">
                        <StatusCards title='Total Available Items' numberStatus='12500'icon={<img src={go} alt='box'/> } />
                        <StatusCards title='Lowest Items Available' numberStatus='300' icon={<img src={warning} alt='box' /> } />
                        <StatusCards title='Out of stuck items' numberStatus='5' icon={<img src={danger} alt='box' /> } />
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