import React from 'react';
import './menu-items.scss';
export const MenuItems = ({ title, imageUrl,size}) => {
  return <div className={`${size} menu-item`}>
  <div className="background-image"
  style={
    {
      backgroundImage: `url(${imageUrl})`
    }
  } />
    <div className="content">
      <h2 className="title">{title.toUpperCase()}</h2>
      <p className="subtitle">SHOP NOW</p>
    </div>
  </div>

}
