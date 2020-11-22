import React from 'react'

function Header(props) {
    return (
        <React.Fragment>
           
                <div className="w3-quarter">
                    <div className="w3-container w3-red w3-padding-16">
                        <div className="w3-left"><i className={props.icon}></i></div>
                        <div className="w3-right">
                            <h3> {props.number} </h3>
                        </div>
                        <div className="w3-clear"></div>
                        <h4>{props.msg}  </h4>
                  
                </div>
            </div>
        </React.Fragment>





    )
}

export default Header
