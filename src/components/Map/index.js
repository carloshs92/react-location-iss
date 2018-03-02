import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from '../../assets/img/marker.png';

const Point = () => <div><img src={marker} width={'32'} height={'32'} alt={'marker'}/></div>;


class Map extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {lat, lng} = this.props;
        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: [''] }}
                center={{lat, lng}}
                defaultZoom={4}
            >
                <Point
                    lat={lat}
                    lng={lng}
                />
            </GoogleMapReact>
        );
    }
}

export default Map;