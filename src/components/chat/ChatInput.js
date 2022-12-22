import { Button } from '@mui/material'
import React, { useState } from 'react'
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';
import './ChatInput.css'
import firebase from 'firebase/compat/app';

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState('');
    const [{user}] = useStateValue();
    const sendMessage = e =>{
        e.preventDefault();
        if(channelId){
            db.collection('rooms').doc(channelId).collection('messeges').add({
                messege : input,
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                username: user.displayName,
                userimage: user.photoURL
            })
        }
    }
  return (
    <div className='chatInput'>
        <form>
            <input placeholder={`Message #${channelName}`}
            onChange={e => setInput(e.target.value)}
            />
            <Button type='submit' onClick={sendMessage}></Button>
        </form>
    </div>
  )
}

export default ChatInput