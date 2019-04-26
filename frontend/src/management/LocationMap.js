import React, { Component } from 'react'
import {Map,Marker, GoogleApiWrapper} from 'google-maps-react';

/**
 * This class creates google map component
 */
class LocationMap extends Component {
    state = {
        markers: [
            {
                name: "Current position",
                position: {
                    lat: 37.77,
                    lng: -122.42
                }
            }
        ]
    };

    /**
     * This function updates the state/position of marker according to new co-ordinates
     * @param coord
     * @param index
     */
    onMarkerDragEnd = (coord, index) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();

        this.setState(prevState => {
            const markers = [...this.state.markers];
            markers[index] = { ...markers[index], position: { lat, lng } };
            return { markers };
        });
    };

    render() {
        return (
            <div style={{height: `200px`, width: '810px'}}>
            <Map
                google={this.props.google}
                style={{
                    width: "810px",
                    height: "200px"
                }}
                zoom={14}
            >
                {this.state.markers.map((marker, index) => (
                    <Marker
                        position={marker.position}
                        draggable={true}
                        onDragend={(t, map, coord) => this.onMarkerDragEnd(coord, index)}
                        name={marker.name}
                    />
                ))}
            </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    //  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(LocationMap)