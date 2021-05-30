import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils.js'
import { ReactComponent as Crown } from '../../assets/crown.svg';
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon.component'
import CartDropdown from '../cart-dropdown/CartDropdown.component'
import './header.scss'
const Header = ({currentUser,hidden}) => (
    <div className="header">
        <Link to='/' className="logo-container">
            <Crown className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon />
        </div>{
            hidden?null:<CartDropdown/>
        }

    </div>
)

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => (
    {
        currentUser: currentUser,
        hidden:hidden
 
    }

)

export default connect(mapStateToProps)(Header)