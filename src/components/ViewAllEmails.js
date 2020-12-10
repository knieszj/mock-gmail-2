import React from 'react'
import IndividualEmail from "./IndividualEmail";
import {Switch, Link, Route, useRouteMatch} from 'react-router-dom'
import './ViewEmailsCSS.css'

const ViewAllEmails = ({allEmails}) => {
    const match = useRouteMatch()

    return (
        <div className={'vae-main'}>
            <div className={'all-emails-div'}>
                {allEmails.map(email =><Link to={`${match.url}/${email.id}`}> <IndividualEmail allEmails={email}/> </Link>)}
            </div>
            <div className={'individual-email'}>
                <Switch>
                    <Route path={`${match.url}/:emailId`}>

                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default ViewAllEmails