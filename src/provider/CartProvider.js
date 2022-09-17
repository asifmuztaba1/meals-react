import CartContext from "../store/cart-context";

const CartProvider = props => {
    const addToCartHandler = (item) => {

    }
    const removeCartHandler = (item) => {

    }
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addToCartHandler,
        removeItem: removeCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;
