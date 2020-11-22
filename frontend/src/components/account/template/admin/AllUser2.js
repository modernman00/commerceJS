import React from 'react'

function AllUser2(props) {

    return (
        <React.Fragment>
            <tbody>
                <tr>
                  
                    <td><i className="fa fa-user w3-text-blue w3-large"> { props.name }</i> </td>
                    <td> { props.location } </td>
                    <td><i> { props.email }  </i></td>
                    <td><i> { props._id }  </i></td>
                </tr>
            </tbody>
             
        </React.Fragment>
    )
}

export default AllUser2
