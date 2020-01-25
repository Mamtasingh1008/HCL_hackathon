import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import HotelDetails from '../assets/data/hotelDetails.json';
import '../styles/viewDetailsStyles.css'; 
 
const HotelComponent = ({ text }) => <div>{text}</div>;
 
class ViewDetails extends Component { 
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  render(){
    return (
        <div className="container">
        <h3><center>View Hotel Detials Page</center></h3>   
        <div className="row">
          <div className="col-lg-12" style={{ height: '40vh'}}>
            <GoogleMapReact
                // bootstrapURLKeys={{ key: "AIzaSyDUnhVLqrcfTd2CSLUUpNjV5_4dmYvSi7o" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <HotelComponent
                lat={HotelDetails.langitude}
                lng={HotelDetails.lattitude}
                text="Hotel location"
                />
            </GoogleMapReact>
          </div> 
        </div> 
        <br/>
        <h3>Room photos:</h3>
        <div className="row">
            <img src={HotelDetails.roomImage1} className="col-lg-4 room-image" alt="" />
            <img src={HotelDetails.roomImage2} className="col-lg-4 room-image" alt="" />
            <img src={HotelDetails.roomImage3} className="col-lg-4 room-image"  alt="" />
        </div> 
        <br/>
        <div className="hotel-address">
              <h3>Address:</h3>
              <h4>Hotel name: {HotelDetails.hotelName}</h4>
              <h4>Hotel Address: {HotelDetails.street},{HotelDetails.city},{HotelDetails.pincode}</h4>
        </div>
        </div>
      );
  }
}
export default ViewDetails;