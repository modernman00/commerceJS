import React from 'react';
import {Spinner} from "react-bootstrap"

const loader = () => {
    return <React.Fragment>
        <Spinner animation="grow" variant="warning"/>
         <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="dark" />
    </React.Fragment>
}

export default loader