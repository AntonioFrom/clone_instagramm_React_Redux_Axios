import React from 'react'
import UserBadge from '../UserBadge'
import './style.scss'

 const NavBar = ({avatarUrl, userId, nickName}) => {
  
  return (
    <div className='cnNavbarRoot'>
        <div className='cnNavbarWrapper'>

        <span>Gollogram</span>
        <UserBadge avatarUrl={avatarUrl}  userId={userId} nickName={nickName} ></UserBadge>
        </div>
    </div>

  )
}

export default NavBar