import React from 'react';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/WithSpinner.component';
import './shop-page.scss'


const CollectionsOverviewWithSpinner=WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };
    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
         collectionRef.get().then( snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading:false})            
        })
    }
    render() {
        const { match } = this.props;
        const { loading } = this.state;

        console.log(this.props);
        return (
            <div className="shop-page">
                <Route exact path={match.path} 
                render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
                <Route exact path={`${match.path}/:collectionId`} 
                render={(props)=>(<CollectionPageWithSpinner isLoading={loading}{...props}/>)}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => (
    {
        updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    }
)
export default connect(null, mapDispatchToProps)(ShopPage);






