import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap"
import { isAuthenticated } from './helper/authenticate';

class Navigator extends Component {
    render() {
        return (

            <Navbar bg="light" expand="lg">
                <Navbar.Brand> <NavLink to="/">MM Online Store</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/">Home </NavLink>

                    </Nav>

                    {
                          (!isAuthenticated('token', 'user')) && <React.Fragment>
                                 <NavLink to="/login" className="mr-sm-2">Login</NavLink>
                                <NavLink to="/show" className="mr-sm-2">Show</NavLink>
                                <NavLink to="/register" className="mr-sm-2">Register</NavLink> 
                          </React.Fragment>
                                              
                          
                        }
                              <NavLink to="/show" className="mr-sm-2">Dashboard</NavLink>

                            <NavLink to="/signOut" className="mr-sm-2">sign out</NavLink>


                </Navbar.Collapse>
            </Navbar>


        )
    }
}

export default withRouter(Navigator)
