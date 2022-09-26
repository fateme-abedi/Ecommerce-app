const cart = []
const CartHandler = (state = cart, action) => {
  const product = action.payload

  switch (action.type) {
    case 'AddToCart':
      //if item exists in cart,
      const exist = state.find((x) => x.id === product.id)
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x,
        )
      }
      //add new item
      else {
        const product = action.payload
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ]
      }

    case 'DeleteFromCart':
      const existOne = state.find((x) => x.id === product.id)
      if (existOne.qty === 1) {
        return state.filter((x) => x.id !== existOne.id)
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x,
        )
      }

    default:
      return state
  }
}

export default CartHandler
