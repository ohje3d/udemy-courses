import React, {Fragment} from 'react';
import { INGREDIENTS_LABEL} from "../../scenes/BurgerBuilder/config";
import Button from "../Button";

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((ingKey) => {
    return (
      <li
        key={ingKey}
      >
        {INGREDIENTS_LABEL[ingKey]}
      </li>
    )
  })

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>
        A delicious burger with the following ingredients:
      </p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p><strong>Total price: {props.totalPrice}</strong></p>
      <p>
        Continue to checkout?
      </p>
      <Button theme={'danger'} onClick={props.cancel}>Cancel</Button>
      <Button theme={'success'}  onClick={props.continue} >Continue</Button>
    </Fragment>
  )
}

export default OrderSummary
