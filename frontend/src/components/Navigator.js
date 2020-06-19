import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap"

export default class Navigator extends Component {
    render() {
        return (

                <Navbar bg="light" expand="lg">
                    <Navbar.Brand> <Nav.Link href="/">MM Online Store</Nav.Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/">Home </Link>
                       
                        </Nav>
                                           
                            <Link to="/login" className="mr-sm-2">Login</Link> 

                             <Link to="/register" className="mr-sm-2">Register</Link>                         
                            <Link to="/signOut" className="mr-sm-2">sign out</Link>
                          
                     
                    </Navbar.Collapse>
                </Navbar>


        )
    }
}
