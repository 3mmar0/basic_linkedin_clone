import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import "./Sidebar.css"

function Sidebar() {

    const user = useSelector(selectUser)

    const recentItems = (topic) => (
        <div className="sidebar__recentItem">
            <span>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img 
                    src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                    alt="" 
                />
                <Avatar className="sidebar__avatar" src={user.photoURL}>
                    {user.email[0]}
                </Avatar>
                <h3>{user.displayName}</h3>
                <h5>{user.email}</h5>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewd you</p>
                    <span>2,545</span>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <span>1,145</span>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>recent</p>
                {recentItems("reactJs")}
                {recentItems('UX/UI')}
                {recentItems('programing')}
                {recentItems("reactJs")}
            </div>
        </div>
    )
}

export default Sidebar
