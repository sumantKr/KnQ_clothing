import ShopActionTypes from './shops.types';


const INITIAL_SHOP_STATE={
    collections:null,
    IsFetching:false,
    errorMessage:undefined
}

const shopReducer=(state=INITIAL_SHOP_STATE,action)=>{
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTION_START:
            return{
                ...state,
                IsFetching:true
            }
        case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
            return{
                ...state,
                IsFetching:false,
                collections:action.payload
            }    
        case ShopActionTypes.FETCH_COLLECTION_FAILURE:
            return   {
                ...state,
                IsFetching:false,
                errorMessage:action.payload
            }
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collections:action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;