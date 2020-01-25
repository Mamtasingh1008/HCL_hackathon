import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Slider from "./components/Slider/Slider";
import Search from "./components/Search/Search";
import Stars from "./components/Stars/Stars";
import BookNow from "./components/BookNow/BookNow"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeVal: 0
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
        
        </React.Fragment>
      
    );

  }
  
}

export default App;
