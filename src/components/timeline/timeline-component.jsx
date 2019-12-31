import React, { Fragment } from 'react';

import Warehouse from '../../assets/warehouse.svg';
import Destination from '../../assets/destination.svg';

const Timeline = ({currentTimeline}) => {
    if(currentTimeline){
        return(
            <section className="timeline">
                <div className="timeline-tracker">
                    <div className="timeline-tracker-container">
                        <img src={Destination} className="timeline-tracker-icon" alt="Destination logo"/>
                    </div>
                    <hr />
                    <div className="timeline-tracker-container">
                        <img src={Warehouse} className="timeline-tracker-icon" alt="Warehouse logo"/>
                    </div>
                </div>
                <div className="timeline-state">

                    {
                        currentTimeline.map( item => {
                            if(item.status_detail === 'DELIVERED'){
                                return (
                                    <div key={item.time} className="timeline-state__status status-active">
                                        <p className="timeline-status__status--name">Delivered</p>
                                        <p className="time-status__status--time">
                                            <span className="margin-right-one">{`${(new Date(item.time)).getDate()}-${(new Date(item.time)).getMonth()}-${(new Date(item.time)).getFullYear()}`}</span>
                                            <span className="time">{`${(new Date(item.time).getHours())}:${new Date(item.time).getMinutes()}`}</span>
                                        </p>
                                    </div>
                                )
                            }else{
                                return (
                                    <Fragment key={item.time}/>
                                )
                            }
                        })
                    }
                    {
                        currentTimeline.map( item => {
                            if(item.status_detail !== 'DELIVERED'){
                                return (
                                    <div key={item.time} className="timeline-state__status">
                                        <p className="timeline-status__status--name">{item.status_detail}</p>
                                        <p className="time-status__status--time">
                                            <span className="margin-right-one">{`${(new Date(item.time)).getDate()}-${(new Date(item.time)).getMonth()}-${(new Date(item.time)).getFullYear()}`}</span>
                                            <span className="time">{`${(new Date(item.time).getHours())}:${new Date(item.time).getMinutes()}`}</span>
                                        </p>
                                    </div>
                                )
                            }else{
                                return (
                                    <Fragment key={item.time}/>
                                )
                            }
                        })
                    }
                </div>
            </section>
        )
    }else{
        return(
            <div className="timeline timeline-none"/>
        )
    }
}

export default Timeline;