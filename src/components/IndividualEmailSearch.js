import React from 'react'

const IndividualEmailSearch = ({sender,subject,id}) => {

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

export default IndividualEmailSearch;
