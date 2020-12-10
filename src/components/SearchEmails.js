import React from 'react'
import ViewAllEmails from "./ViewAllEmails";
import IndividualEmail from "./IndividualEmail";
import IndividualEmailSearch from "./IndividualEmailSearch";

const SearchEmails = ({search, allEmails, searchFilter}) => {

    const emailsToShow = search === null ?
        <div>
            <ViewAllEmails allEmails={allEmails}/>
        </div>
        :
        <div>
            {allEmails.filter(email =>
                (
                    email.subject.toLowerCase().includes(search.toLowerCase())) ||
                email.sender.toLowerCase().includes(search.toLowerCase()) ||
                email.message.toLowerCase().includes(search.toLowerCase())
            ).map(email => <IndividualEmailSearch sender={email.sender} subject={email.subject} id={email.id}/> )}
        </div>

    return (
        <div>
            <input type={'text'} placeholder={'search here'} onChange={event => searchFilter(event)} />
            {emailsToShow}
        </div>
    )
}

export default SearchEmails