import React, { Component } from 'react';
//import { MDBCol } from "mdbreact";\
import {Button} from "react-bootstrap"


class Stars extends Component {


      handleClick=()=>{
          console.log("my booking clicked")
      }

render() {
    //const {range,updateRange}= this.props;

return (
  <React.Fragment>
      <p> Stars</p>
    <input type="text" placeholder="stars"></input>
    
    <Button variant="primary" onClick={this.handleClick}>Search</Button>
    
    
    </React.Fragment>
);}}

export default Stars;