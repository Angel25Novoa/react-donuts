import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  
    const mapStyles = {        
      height: "50vh",
      width: "90%",
      margin: "0 auto"
    };
    
    const defaultCenter = {
      lat: 19.379514544712343, lng: -99.15908833246459 
    }

    const locations = [{
      name: "Doubnuts-Mx",
      location:{
        lat: 19.37906956092746,
        lng: -99.15907359153931
      }
    }]
    
    return (
      <LoadScript
        googleMapsApiKey='AIzaSyD8WQ3Z-ElwPUgN6k1lthzcG9_uq16Kqz4'>
          <GoogleMap 
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}>
              {locations.map(item => {
                return (
                  <Marker key={item.name} position = {item.location}/>
                )
              })}
            </GoogleMap>
      </LoadScript>
    )
  }

export default MapContainer
