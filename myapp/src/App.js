import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Slider from "./components/Slider/Slider";
import Search from "./components/Search/Search";
import Stars from "./components/Stars/Stars";
import BookNow from "./components/BookNow/BookNow"
import ViewDetails from './components/viewDetails'; 
import {HotelData} from './Shared/Hoteldata.js'
import HomePage from './components/HotelDetails/HomePageComponent.jsx';
import Contactus from './components/Contactus.jsx';
import Header from './components/Header.jsx';
import {Router,Switch,rou} from 'react-router-dom';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeVal: 0,
      hoteldetails:HotelData
    }
    this.updateRange = this.updateRange.bind(this);
  }
  
  updateRange(val) {
    this.setState({
      rangeVal: val
      
      
    })
  } 
  render(){
    
    return (
      <React.Fragment>
        
      {/* <Slider range={rangeVal} updateRange={this.updateRange}/>
 */}
 

      <Search/>
      <br/>
      <br/>
      <Slider range="1000" updateRange={this.updateRange}/>
      <Stars/>
      <BookNow/>
      <br></br>
        <ViewDetails />
        
        
          <div>
          <HomePage hoteldetails={this.state.hoteldetails}></HomePage>
            </div>
            <div>
              <Contactus></Contactus>
            </div>
            </React.Fragment>
          
      
    );

  }
  
}

export default App;
