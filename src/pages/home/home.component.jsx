import React, { Fragment } from 'react';
import Navbar from '../../components/navbar/navbar-component';
import Counter from '../../components/counter/counter-component';
import Timeline from '../../components/timeline/timeline-component';
import Shipment from '../../components/shipment/shipment-component';
import WebService from '../../services/webService';
import { getSortedData } from '../../services/sortServices';


class Home extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            loaded : false,
            delData : null,
            intData : null,
            oodData : null,
            nfiData : null,
            dexData : null,
            currentData : "delData",
            currentTimeline : null
        }
    }

    componentDidMount = () => {
        WebService.post("https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank")
        .then(response => {
            return getSortedData(response);
        })
        .then( data => {
            const {
                delData,
                intData,
                oodData,
                nfiData,
                dexData
            } = data;

            this.setState({
                delData,
                intData,
                oodData,
                nfiData,
                dexData,
                loaded : true
            })
        })
        .catch(error => {
            console.error(error);
        })
    }

    updateCurrentData = currentData => {
        this.setState({
            currentData
        })
    }

    updateCurrentTimeline = currentTimeline => {
        this.setState({
            currentTimeline
        })
    }

    render(){
        const { 
            loaded,
            delData,
            intData,
            oodData,
            nfiData,
            dexData,
            currentData,
            currentTimeline
        } = this.state;

        if(loaded){
            return(
                <Fragment>
                    <Navbar/>
                    <Counter 
                        delCount = {delData.length}
                        intCount = {intData.length}
                        oodCount = {oodData.length}
                        nfiCount = {nfiData.length}
                        dexCount = {dexData.length}
                        currentData = {currentData}
                        updateCurrentData = {this.updateCurrentData}
                        updateCurrentTimeline = {this.updateCurrentTimeline}
                    />
                    <div className="main-content">
                        <Timeline
                            currentTimeline = { currentTimeline }
                        />
                        <Shipment 
                            data = {this.state[currentData]}
                            updateCurrentTimeline = {this.updateCurrentTimeline}
                        />
                    </div>
                </Fragment>
            )
        }else{
            return(
                <p>Loading...</p>
            )
        }
    }
}

export default Home;