import React,{Component} from 'react';
import {Nav,Navbar,NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
           <Navbar>
               <div className="cotainer">
                   <Nav>
                       <NavItem>
                          <NavLink to='/home'>
                              Home
                          </NavLink>
                       </NavItem>
                       <NavItem>
                          <NavLink to='/contactus'>
                             Contactus 

                          </NavLink>
                       </NavItem>
                   </Nav>

               </div>
           </Navbar>
        );
    }
}
export default Header