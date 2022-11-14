import React from 'react'
import './style.scss'
import {useNavigate} from 'react-router-dom'

 const UserBadge = ({avatarUrl, userId, nickName}) => {

    const navigate = useNavigate()

    const onUserBadgeClick = () => {
        navigate(`/${userId}`)
    }
  return (
    <div className='cnUserBadgeRoot' onClick={onUserBadgeClick}>
      { avatarUrl ? <img src={{avatarUrl}} alt="logo" className='cnUserBadgeAvatar' /> : <div className='cnUserBadgeAvatarDefault'/>}
      <span  className='cnUserBadgeName'>{nickName}</span> 
    </div>

  )
}

export default UserBadge