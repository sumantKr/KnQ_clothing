export const addToCart=(cartItems,itemToAdd)=>{
    const existingItem=cartItems.find(
        cartItems=>cartItems.id===itemToAdd.id);
    if(existingItem){
        return cartItems.map(
            cartItem=>cartItem.id===itemToAdd.id
            ?
            {...cartItem,quantity:cartItem.quantity+1}
            :
            cartItem
            )
    }
    return [...cartItems,{...itemToAdd,quantity:1}]    
}

export const removeItemFromCart=(cartItems,toRemove)=>{
    const existingItem=cartItems.find(
        cartItems=>cartItems.id===toRemove.id);
    if(existingItem.quantity===1){
        return cartItems.filter(cartItem=>cartItem.id!==toRemove.id)
    }
    return cartItems.map(
        cartItem=>cartItem.id===toRemove.id
        ?
        {...cartItem,quantity:cartItem.quantity-1}
        :
        cartItem
        )
}