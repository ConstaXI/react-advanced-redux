import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispach = useDispatch()

  const { totalQuantity } = useSelector((state) => state.cart)

  const toggleCartHandler = () => {
    dispach(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
