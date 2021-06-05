import cartActionTypes from './cart.types'
export const toggleCartHidden=()=>(
    {
        type:cartActionTypes.TOGGLE_CART_HIDDEN
    }
)
export const addItemToCart=(item)=>({
    type:cartActionTypes.ADD_CART_ITEMS,
    payload:item
})

export const clearItemFromCart=(item)=>({
    type:cartActionTypes.CLEAR_ITEM_CART,
    payload:item
})

export const removeCartItem=(item)=>({
    type:cartActionTypes.REMOVE_CART_ITEM,
    payload:item
})

