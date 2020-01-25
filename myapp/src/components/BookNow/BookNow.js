import React, { Component } from 'react';
//import { MDBCol } from "mdbreact";
import {Button} from "react-bootstrap";


class BookNow extends Component {
    constructor(props) {
        super(props);
        this.state = {
             RoomCount: 1,
             AdultCount:1,
             ChildCount: 0,
        }
      }

    

    //    Room_decrease=()=>{
    //     this.setState({
    //         RoomCount: RoomCount -1,
    //        }
    //         ); 
    //  }
    Room_deacrease = (prevState) => {
        if(this.state.RoomCount>=2)
        this.setState({ RoomCount: this.state.RoomCount - 1})
        
        
      }


       Room_increase=()=>{
        this.setState({
            RoomCount: this.state.RoomCount+1,
           }
            ); 
       }
      Adult_decrease=()=>{
        if(this.state.AdultCount>=2)
       this.setState({
        AdultCount: this.state.AdultCount-1,
             }
              ); 
       }
       Adult_increase=()=>{
         this.setState({
            AdultCount: this.state.AdultCount+1,
            }
             ); 
       }

       Child_decrease = (prevState) => {
        if(this.state.ChildCount>=2)
        this.setState({ RooChildCount: this.state.ChildCount - 1})
        
        
      }


       Child_increase=()=>{
        this.setState({
            ChildCount: this.state.ChildCount+1,
           }
            ); 
       }

render() {

    var price= (1000*this.state.AdultCount) + (500*this.state.ChildCount)
    

return (
  <React.Fragment>
      <h3> Please choose: </h3>
      <p> Rooms: </p>
      <Button variant="danger" onClick={this.Room_deacrease}>-</Button>
      <span> {this.state.RoomCount} </span>
      <Button variant="danger" onClick={this.Room_increase}>+</Button>

      <p> Adults: </p>

      <Button variant="danger" onClick={this.Adult_decrease}>-</Button>
      <span> {this.state.AdultCount} </span>
      <Button variant="danger" onClick={this.Adult_increase}>+</Button>

      <p> Children: </p>

      <Button variant="danger" onClick={this.Child_decrease}>-</Button>
      <span> {this.state.ChildCount} </span>
      <Button variant="danger" onClick={this.Child_increase}>+</Button>
      <h3> Price (in Rs.) :{price}/-</h3>
    </React.Fragment>
);}}

export default BookNow;