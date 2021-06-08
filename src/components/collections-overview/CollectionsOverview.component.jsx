import React from 'react'
import {selectCollectionForPreview} from '../../redux/shop/shop.selector'
import './collections-overview.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { CollectionPreview } from '../../components/preview-collection/CollectionPreview.component.jsx'
const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">{

        collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
    }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);