import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap"
import { isAuthenticated, logOut } from './helper/authenticate';

const Navigator = ({ history }) => {
// history is an object from withRouter component 
// TODO I STILL NEED TO STUDY withRouter
    const handleLogout = () => {
        logOut('token', 'user')
        history.push('/login')
    }

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
                {

                    (isAuthenticated('token', 'user')) && <React.Fragment>
                        <NavLink to="/show" className="mr-sm-2">Dashboard</NavLink>

                        <button onClick={handleLogout} className="btn btn-link text-decoration-none text-secondary bg-warning">
                            sign out
                                </button>
                    </React.Fragment>
                }

            </Navbar.Collapse>
        </Navbar>


    )

}

export default withRouter(Navigator)
