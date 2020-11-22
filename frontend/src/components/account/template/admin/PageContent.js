import React from 'react'
import Header from './Header'
import View from './View'

function PageContent() {
    return (
        <React.Fragment>
            <div className="w3-main" style={{ marginLeft: 300, marginTop: 43 }}>
                <div className="w3-container" style={{ paddingTop: 22 }} >
                    <h5><b><i className="fa fa-dashboard"></i> My Dashboard</b></h5>
                </div>

                <div className="w3-row-padding w3-margin-bottom">
                    <Header icon={"fa fa-comment w3-xxxlarge"} number={52} msg={'message'} />
                    <Header icon={"fa fa-eye w3-xxxlarge"} number={99} msg={'Views'} />
                    <Header icon={"fa fa-share-alt w3-xxxlarge"} number={56} msg={'Shares'} />
                    <Header icon={"fa fa-users w3-xxxlarge"} number={52} msg={'User'} />
                </div>
            </div>

            {/* <View/> */}

        </React.Fragment>
    )
}

export default PageContent
