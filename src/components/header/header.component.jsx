import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Crown } from '../../assets/crown.svg';
import './heades.scss'
export const Header = () => (
    <div className="header">
        <Link to='/' className="logo-container">
            <Crown className="logo" />
        </Link>
        <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/shop">CONTACT</Link>
        </div>
    </div>
)