import React from 'react';
import './collection-item.scss'
import { connect } from 'react-redux'
import { CustomButton } from '../custom-button/CustomBottom.component'
import { addItemToCart } from '../../redux/cart/cart.action.js'
const CollectionItem = ({ item,...props}) => (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${item.imageUrl})`
                }} />
            <div className="collection-footer">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
            </div>
            <CustomButton inverted onClick={() => props.addItem(item)}>
                Add To Cart
            </CustomButton>
        </div>
)

const mapDispatchToProps = (dispatch) =>
(
    {
        addItem: (item) => { dispatch(addItemToCart(item)) }
    }
)
export default connect(null, mapDispatchToProps)(CollectionItem)