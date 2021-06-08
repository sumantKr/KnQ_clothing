import React from 'react';
import { withRouter,Link} from 'react-router-dom';
import './menu-items.scss';
const MenuItems = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div className={`${size} menu-item`} onClick={() => { history.push(`${match.url}${linkUrl}`) }}>
    <div className="background-image"
      style={
        {
          backgroundImage: `url(${imageUrl})`
        }
      } />
    <Link to={linkUrl} className="content">
      <h2 className="title">{title.toUpperCase()}</h2>
      <p className="subtitle">SHOP NOW</p>
      
    </Link>
  </div>
)

export default withRouter(MenuItems);