import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import './styles/Sidebar.css';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <AccountCircleIcon className="sidebar__avatar"/>
        <h2>Kirandeep</h2>
        <h2>me@kiran.cc</h2>
      </div>
    </div>
  )
}

export default Sidebar;
