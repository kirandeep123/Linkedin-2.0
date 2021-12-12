import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import "./styles/Sidebar.css";
function Sidebar() {

  const recentItem = (topic) =>  (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://picsum.photos/200/300" alt="there"/>
        <AccountCircleIcon className="sidebar__avatar" />
        <h2>Kirandeep Kaur</h2>
        <h4>me@kiran.cc</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,300</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,300</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactJs')}
        {recentItem('angular')}
        {recentItem('Vue')}
        {recentItem('Typescript')}
        {recentItem('javascript')}

      </div>
    </div>
  );
}

export default Sidebar;
