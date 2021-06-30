import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import ShopActionTypes from "./shops.types";

export const fetchCollectionsStart=(collectionsMap)=>(
    {
        type:ShopActionTypes.FETCH_COLLECTION_START
    }
)
 
export const fetchCollectionSuccess=(collectionsMap)=>(
    {
        type:ShopActionTypes.FETCH_COLLECTION_SUCCESS,
        payload:collectionsMap
    }
)
export const fetchCollectionFailure=(errorMessage)=>(
    {
        type:ShopActionTypes.FETCH_COLLECTION_FAILURE,
        payload:errorMessage
    }
)
 

export const fetchCollectionsStartAsync=()=>    {
        return dispatch=>{
          }
    }

   
