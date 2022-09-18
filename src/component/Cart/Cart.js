import { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../../layouts/Modal/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = props => {
  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0
  const cartItemOnAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }
  const cartItemOnRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }
  const cartItems = (
    <ul className={classes['cart-items']}>
      {
        cartCtx.items.map((item) =>
          <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
                    onRemove={cartItemOnRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemOnAddHandler.bind(null, item)}/>
        )
      }
    </ul>
  )
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}
export default Cart
