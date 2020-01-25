import React, { Component } from 'react';
//import { MDBCol } from "mdbreact";
import {Button} from "react-bootstrap"


class Search extends Component {

    /* constructor(props) {
        super(props);
        this.updateRange = this.updateRange.bind(this);
      }

      updateRange(e) {
        this.props.updateRange(e.target.value);
      } */

      handleClick=()=>{
        window.alert("my booking clicked")
        
      }

render() {
    //const {range,updateRange}= this.props;

return (
  <React.Fragment>
      <h3>Hotel Home Page: </h3>
    <input type="text" placeholder="Enter City to search.."></input>
    <span>
    <Button variant="primary" onClick={this.handleClick}>My Bookings</Button>
    {/* <button onClick={this.handleClick}> My Bookings </button> */}
    </span>
    </React.Fragment>
);}}

export default Search;