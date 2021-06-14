import { createSelector } from 'reselect'


const shopSelector = (state) => {
    return state.shop
}

export const selectCollections = createSelector(
    shopSelector,
    shop => shop.collections
)


export const selectCollectionForPreview = createSelector(
    [selectCollections],
    (collections) =>
        collections ? Object.keys(collections).map((key) => collections[key]) : []
);
export const selectCollection = (collectionURLParam) => {
    return createSelector(
        selectCollections,
        collections => collections[collectionURLParam]
    )
}