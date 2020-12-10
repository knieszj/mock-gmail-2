import React from 'react'
import { useParams } from 'react-router-dom'

const IndividualEmail = ({allEmails}) => {

    return (
    <div key={allEmails.id}>
        <div>
            {allEmails.sender}
        </div>
        <div>
            {allEmails.subject}
        </div>
    </div>
    )
}

export default IndividualEmail;