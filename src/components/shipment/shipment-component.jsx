import React, { Fragment } from 'react';

const Shipment = ({data, updateCurrentTimeline}) => {
    return (
        <section className="shipments">
            <div className="shipments__table ">
                <ul>
                    <li>AWB number</li>
                    <li>Transporter</li>
                    <li>Source</li>
                    <li>Destination</li>
                    <li>Brand</li>
                    <li>Start Date</li>
                    <li>ETO</li>
                    <li>Status</li>
                </ul>
                <div className="shipments__content slim-scroll">
                    {
                        data.map( item => {
                            return(
                                <ul 
                                    key={item._id}
                                    className="package"
                                    onClick={() => updateCurrentTimeline(item.scan)}
                                >
                                    <li className="package--awb">{item.awbno}</li>
                                    <li className="package--transpoter">{item.carrier}</li>
                                    <li className="package--source">{item.from}</li>
                                    <li className="package--destination">{item.to}</li>
                                    <li className="package--brand">{item.carrier}</li>
                                    <li className="package--start">
                                        {`${(new Date(item.time).getDate())}/${(new Date(item.time).getMonth())}/${(new Date(item.time).getFullYear())}`}
                                    </li>
                                    <li className="package--eto">
                                        {
                                            item.extra_fields ? 
                                            (
                                                `${(new Date(item.extra_fields.expected_delivery_date).getDate())}/${(new Date(item.extra_fields.expected_delivery_date).getMonth())}/${(new Date(item.extra_fields.expected_delivery_date).getFullYear())}`
                                            ) : 
                                            <Fragment/>
                                        }
                                    </li>
                                    <li className="package--status">{item.current_status}</li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}


export default Shipment;