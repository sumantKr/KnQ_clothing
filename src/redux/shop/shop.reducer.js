import SHOP_DATA from './shop.data'


const INITIAL_SHOP_STATE={
    collections:SHOP_DATA
}

const shopReducer=(state=INITIAL_SHOP_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default shopReducer