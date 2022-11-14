import React from 'react'
import NavBar from '../NavBar'
import './style.scss'

export const Layout = ({
    nickName,
    avatarUrl,
    id
}) => {
    return (
        <div className='cnLayoutRoot'>
            <NavBar></NavBar>
            <div className='cnLayoutBody'></div>
        </div>
    )
}

export default Layout
