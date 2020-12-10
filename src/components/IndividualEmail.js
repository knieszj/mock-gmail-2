import React from 'react'

const IndividualEmail = ({subject,sender, id}) => {


    return (
        <div key={id}>
            <div>
                {sender}
            </div>
            <div>
                {subject}
            </div>
        </div>
    )
}

export default IndividualEmail;