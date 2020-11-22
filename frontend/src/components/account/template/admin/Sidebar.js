import React from 'react'

function Sidebar(props) {

    return (
        <React.Fragment> 
        
            <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{width:300 }} id="mySidebar">
                <div className="w3-container w3-row">
                    <div className="w3-col s4">
                        <img src="/w3images/avatar2.png" className="w3-circle w3-margin-right" style={{ width:46 }} alt ='logo'/>
                    </div>
                        <div className="w3-col s8 w3-bar">
                            <span>Welcome, <strong>Mike</strong></span>
                                <a href="/" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i></a>
                                <a href="/" className="w3-bar-item w3-button"><i className="fa fa-user"></i></a>
                                <a href="/" className="w3-bar-item w3-button"><i className="fa fa-cog"></i></a>
                        </div>
                </div>
                <hr></hr>
                <div className="w3-container">
                    <h5>Dashboard</h5>
                </div>
                <div className="w3-bar-block">
                    <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onClick={props.sidebarClose} title="close menu"><i className="fa fa-remove fa-fw"></i>&nbsp; Close Menu</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-users fa-fw"></i>&nbsp; Overview</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw"></i>&nbsp; Views</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw"></i>&nbsp; Traffic</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bullseye fa-fw"></i>&nbsp; Geo</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-diamond fa-fw"></i>&nbsp; Orders</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bell fa-fw"></i>&nbsp; News</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bank fa-fw"></i>&nbsp; General</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-history fa-fw"></i>&nbsp; History</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-cog fa-fw"></i>&nbsp; Settings</a><br></br>
                </div>
            </nav>
        {/* //  <!-- Overlay effect when opening sidebar on small screens --> */}
<div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={props.sidebarClose} style={{ cursor:'pointer' }} title="close side menu" id="myOverlay"></div> 
     
        </React.Fragment>      
    )
}

export default Sidebar
