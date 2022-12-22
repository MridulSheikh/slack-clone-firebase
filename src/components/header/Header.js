import React from 'react'
import './header.css'
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search'
import { HelpOutline } from '@mui/icons-material';
import { useStateValue } from '../../StateProvider';

function Header() {
  const [{user}] = useStateValue()
  return (
    <div className='header'>
        <div className='header_left'>
            <Avatar 
            className='header_avatar'
            alt= {user?.displayName}
            src={user?.photoURL}
            />
            <AccessTimeIcon />
        </div>
        <div className='header_search'>
            <SearchIcon />
            <input placeholder='Search Nazir ahammed' />
        </div>
        <div className='header_right'>
            <HelpOutline />
        </div>
    </div>
  )
}

export default Header