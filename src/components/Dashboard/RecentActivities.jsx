import UserContext from "../../UserContext";
import { useContext } from "react";

export default function RecentActivities(){

    const {user} = useContext(UserContext);

    return (
        <div className="recent_activities">
            <h2>Recent Activities</h2>
            <div className="recent_activities_wrapper">
                <article className="recent_activities_item">
                    <p>
                        <span className="recent_activities_user">{user?.name} </span>
                          purchase something important from 
                        <span className="recent_activities_company"> This Corp</span>
                    </p>
                    <p className="recent_activities_timestamp"> a day ago</p>
                </article>
                <article className="recent_activities_item">
                    <p>
                        <span className="recent_activities_user">{user?.name} </span>
                         purchase something important from 
                        <span className="recent_activities_company"> This Corp</span>
                    </p>
                    <p className="recent_activities_timestamp"> a day ago</p>
                </article>
                <article className="recent_activities_item">
                    <p>
                        <span className="recent_activities_user">{user?.name} </span>
                         purchase something important from 
                        <span className="recent_activities_company"> This Corp</span>
                    </p>
                    <p className="recent_activities_timestamp"> a day ago</p>
                </article>
            </div>
        </div>
    );
}