import React from 'react'
import "./message.css"

function Message({name, imgUrl, text, timestamp}) {
  return (
    <div className='message'>
        <img src={imgUrl} alt="" />
        <div className='message_info'>
            <h4>{name} <span className='message_timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Message