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