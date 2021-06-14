import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils.js'
import { ReactComponent as Crown } from '../../assets/crown.svg';
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon.component'
import CartDropdown from '../cart-dropdown/CartDropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import styled,{css} from 'styled-components';

const HeaderContainer = styled.div`
    height:70px;
    width:100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`
const LogoContainer = styled(Link)`
        height:100%;
        width:70px;
        padding: 25px;  
`
const OptionContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`
const Options=css`
          padding:10px 15px;
            cursor:pointer;
`
const OptionLink=styled(Link)`
        ${Options}
`

const OptionDiv=styled.div`
    
`
const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/' >
            <Crown  />
        </LogoContainer>
        <OptionContainer >
            <OptionLink  to="/shop">SHOP</OptionLink>
            <OptionLink  to="/shop">CONTACT</OptionLink>
            {
                currentUser ?
                    <OptionDiv as={Link} onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to="/signin">SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionContainer>{
            hidden ? null : <CartDropdown />
        }

    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    }

)

export default connect(mapStateToProps)(Header)