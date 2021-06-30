import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectIsCollectionFetching} from '../../redux/shop/shop.selector'
import CollectionsOverview from './CollectionsOverview.component'
import WithSpinner from '../with-spinner/WithSpinner.component'
import { compose } from 'redux'
const mapStateToProps=createStructuredSelector({
    isLoading:selectIsCollectionFetching
});

const CollectionsOverviewContainer=
compose(
    connect(mapStateToProps),
    WithSpinner,
    
)(CollectionsOverview)

export default CollectionsOverviewContainer