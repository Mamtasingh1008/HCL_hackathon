import React ,{Component} from 'react';
import {Card,CardBody,CardImg,CardTitle,CardText,CardLink} from 'reactstrap';
import {Input} from 'reactstrap'

class HomePage extends Component
{
    constructor(props)
    {
        super(props)
    }


    render()
    {
       const menu=this.props.hoteldetails.map((hotel)=>{
            return(
               
             
                <div  className="col-6 col-md-2 m-1">
                    
                    <Card >
                     
                <CardImg top src={hotel.img} alt={hotel.HotelName}></CardImg>
                <CardBody>
                <CardTitle >{hotel.HotelName}</CardTitle>
               <CardText>{hotel.description}</CardText>
               <CardLink>
                   <Input type="button" value="View Details"></Input>
               </CardLink>
               <CardLink>
                   <Input type="button" value="Book Now"></Input>
               </CardLink>
               </CardBody>
              
            </Card>
                </div>
              
                
                
            );
        });

        return(
            <div className="row">                
          {menu}
            </div>
        );
    }
}
export default HomePage