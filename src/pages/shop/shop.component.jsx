import React from 'react';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component'

import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import './shop-page.scss'
const ShopPage = ({ match }) => (
    <div className="shop-page">
    // {console.log(match)} 
        <Route exact path={match.path} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
)

export default ShopPage;