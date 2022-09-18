import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext)
  const { items } = cartCtx
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false)
  const numberOfitem = cartCtx.items.reduce((cartNumber, item) => { return cartNumber + item.amount}, 0)
  const buttonClass = `${classes.button} ${isButtonHighlighted ? classes.bump : ''}`
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return
    }
    setIsButtonHighlighted(true)
    const time = setTimeout(() => setIsButtonHighlighted(false), 300)
    return () => {
      clearTimeout(time)
    }
  }, [items])
  return <button className={buttonClass} onClick={props.onShowCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
    <span>Your Cart Item</span>
    <span className={classes.badge}>
            {numberOfitem}
        </span>
  </button>
}

export default HeaderCartButton
