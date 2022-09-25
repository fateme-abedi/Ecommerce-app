export const AddToCart=(product)=>{
    return{
        type: "AddToCart",
        payload:product
    }
}

export const DeleteFromCart=(product)=>{
    return{
        type: "DeleteFromCart",
        payload:product
    }
}