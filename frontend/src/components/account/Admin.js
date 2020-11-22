import React, { useState, useEffect } from 'react'
import { getLocalStorage } from '../helper/localStorage';
import { notAuthenticated } from '../helper/authenticate';
import { Navbar } from 'react-bootstrap'
import Sidebar from './template/admin/Sidebar';
import Header from './template/admin/Header';
import PageContent from './template/admin/PageContent';
import AllUsers from './template/admin/Allusers';

export default function Admin() {

    const style = {
        width: 300,

    }
    const [userData, setUser] = useState([])

    useEffect(() => {
        // check if the token called user exist on the computer and if not redirect to the login page
        notAuthenticated('token', 'user', '/login')
        // get the user storage data and store in the data variable
        let data = getLocalStorage('user')
        // use the data variable to update the user 
        setUser(data)
    }, [])
    // Get the Sidebar
const mySidebar = document.getElementById("mySidebar")
// Get the DIV with overlay effect
const overlayBg = document.getElementById("myOverlay");

    const w3_close = () => {
        mySidebar.style.display = "none";
        overlayBg.style.display = "none";
    }

    // Toggle between showing and hiding the sidebar, and add overlay effect
    const w3_open = () => {
        if (mySidebar.style.display === 'block') {
            mySidebar.style.display = 'none';
            overlayBg.style.display = "none";
        } else {
            mySidebar.style.display = 'block';
            overlayBg.style.display = "block";
        }
    }

    return (

        <>
            {/* THE USER PAGE

            {userData.username} with the email, {userData.email} ,You are in the Admin page page */}

            <Sidebar sidebarClose={w3_close} sidebarOpen = {w3_open} />

            <PageContent/>
            <AllUsers/>
      
        </>




    )
}
