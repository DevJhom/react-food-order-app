import { useContext, useState, useEffect } from "react";

import CartContext from '../../store/cart-context';
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

  const [btnIsBumped, setBtnIsBumped] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsBumped ? classes.bump : ''}`;

  useEffect(() => {
    if(cartCtx.items.length === 0) {
      return;
    }
    setBtnIsBumped(true);

    const timer = setTimeout(() => {
      setBtnIsBumped(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };

  },[cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
