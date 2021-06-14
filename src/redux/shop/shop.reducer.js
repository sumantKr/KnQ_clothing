import SHOP_DATA from './shop.data'
import ShopActionTypes from './shops.types';


const INITIAL_SHOP_STATE={
    collections:SHOP_DATA
}

const shopReducer=(state=INITIAL_SHOP_STATE,action)=>{
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collections:action.payload
            }
        default:
            return state;
    }
}

export default shopReducer