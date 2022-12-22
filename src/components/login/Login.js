import React from 'react'
import "./login.css"
import Button from '@mui/material/Button';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

function Login() {
  const [state, dispatch] = useStateValue();

  const singIn = () =>{
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result)
        dispatch({
          type : actionTypes.SET_USER,
          user : result.user
        })
      })
      .catch(error => {
        alert(error.message)
      })
  }

  return (
    <div className='login'>
      <div className='login_container'>
        <img src="https://assets.brandfolder.com/pmix53-32t4so-a6439g/v/3065838/original/slackbot.png" alt="" />
        <h1>Sing in to Slack Power by Nazir</h1>
        <p>slack.com</p>
        <Button onClick={singIn}>Sing In whith Google</Button>
      </div>
    </div>
  )
}

export default Login