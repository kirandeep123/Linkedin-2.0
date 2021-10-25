import React from 'react'
import './styles/HeaderOption.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function HeaderOption({avatar, Icon, title}) {
  return (
    <div className="header-option">
      {Icon && <Icon className="header-option__icon"/>}
      {avatar && <AccountCircleIcon className="header-option__icon" src={avatar}/>}
      <h3 className="header-option__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
