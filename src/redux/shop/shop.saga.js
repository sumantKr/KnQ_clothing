import { takeEvery,call,put, delay } from "@redux-saga/core/effects";
import ShopActionTypes from "./shops.types";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";

export function* fetchCollectionsAsync() {
    try{

        console.log('getting it!!!!');
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        console.log('got it!!!!');
        const collectionsMap=yield call(convertCollectionsSnapshotToMap,snapshot)
        console.log('putting itt!!!')
        yield put(fetchCollectionSuccess(collectionsMap));
        console.log('putt itt!!!')
    }catch(error){
        yield(put(fetchCollectionFailure))
    }
}
    export function* fetchCollectionStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync);
}