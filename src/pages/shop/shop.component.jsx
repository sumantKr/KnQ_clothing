import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import CollectionPageContainer from '../collection/collection.container'
import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import './shop-page.scss'

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
    }
    render() {
        const { match } = this.props;
        console.log(this.props);
        return (
            <div className="shop-page">
                <Route
                    exact path={match.path}
                    component={CollectionsOverviewContainer}
                />

                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => (
    {
        fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
    }
)
export default connect(null, mapDispatchToProps)(ShopPage);






