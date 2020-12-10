import React from 'react'
import IndividualEmail from "./IndividualEmail";
const ViewAllEmails = ({allEmails}) => {

    return (
        <div>
            {allEmails.map(email => <IndividualEmail id={email.id} subject={email.subject} sender={email.sender}/>)}
        </div>
    )
}

export default ViewAllEmails