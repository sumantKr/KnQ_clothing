import React from 'react';
import SHOP_DATA from './shop.data.js';
import './shop-page.scss'
import {CollectionPreview} from '../../components/preview-collection/CollectionPreview.component.jsx'
class ShopPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            collections:SHOP_DATA
        }
    }
    render(){
        const collection=this.state.collections;
        return (<div className="shop-page">
        {
            collection.map(({id,...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>)
    }
}
export default ShopPage;