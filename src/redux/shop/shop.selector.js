import {createSelector} from 'reselect'

const shopSelector=(state)=>{
    return state.shop
}

export const selectCollections=createSelector(
    shopSelector,
    shop=>shop.collections
)