import React from 'react'

const SendEmail = ({sender,recipient,subject,message, sendEmail}) => {

    return (
        <div>
            <label>
                Email sender:
                <input type={'textarea'} placeholder={'your email address'} onChange={event => sender(event)}/>
            </label>
            <label>
                Email recipient:
                <input type={'textarea'} placeholder={'to whom you desire to electronically correspond with'} onChange={event => recipient(event)}/>
            </label>
            <label>
                Email subject:
                <input type={'textarea'} placeholder={'subject of your electronic correspondence'} onChange={event => subject(event)}/>
            </label>
            <label>
                Email message:
                <input type={'textarea'} placeholder={'write your electronic correspondence here'} onChange={event => message(event)}/>
            </label>
            <button onClick={event => sendEmail()}>Send Email</button>
        </div>
    )
}

export default SendEmail;