import React, { Component } from 'react';
import Map from '../../components/Map';
import './index.css'
import ISSService from '../../services/iss.service';
import Legend from "../../components/Legend";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: 59.95,
            lng: 30.33,
        }
    }

    componentDidMount () {
        this.updateLocation();
    }

    updateLocation () {
        ISSService.getCurrentLocation()
            .then( (response) => {
                const {latitude, longitude} = response.iss_position;
                this.setState({
                    lat: parseFloat(latitude),
                    lng: parseFloat(longitude),
                });
                setTimeout(() => {
                    this.updateLocation()
                }, 3000);
            }).catch(() => {
                setTimeout(() => {
                    this.updateLocation()
                }, 3000);
            })
    }

    render() {
        return (
            <div className="Home">
                <Legend/>
                <Map lat={this.state.lat} lng={this.state.lng}/>
            </div>
        );
    }
}

export default Home;
