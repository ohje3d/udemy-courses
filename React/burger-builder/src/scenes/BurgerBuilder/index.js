import React, {Component} from 'react'
import styles from './styles.css'
import Burger from '../../components/Burger'
import Settings from '../../components/Burger/Settings'
import {INGREDIENTS, INGREDIENTS_PRICES} from './config'
import Modal from '../../components/Modal'
import OrderSummary from '../../components/OrderSummary'

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: INGREDIENTS,
      purchased: false,
      purchasing: false,
      purchasable: false,
      price: 1.00
    }
  }

  calculatePrice = (ingredients) => {
    // calculate the new price
    return Object.keys(ingredients).reduce((price, ing) => {
      return price + (INGREDIENTS_PRICES[ing] * ingredients[ing])
    }, 0)
  }

  isPurchasable = (ingredients) => {
    const sum = Object.values(ingredients).reduce((amount, item) => {
      return amount + item;
    }, 0);
    return sum > 0
  }

  addIngredient = (event) => {
    const updatedIngredients = this.state.ingredients;
    updatedIngredients[event.target.value] = updatedIngredients[event.target.value] + 1;

    this.setState({
      ingredients: updatedIngredients,
      price: this.calculatePrice(updatedIngredients),
      purchasable: this.isPurchasable(updatedIngredients)
    })
  }

  removeIngredient = (event) => {
    const updatedIngredients = this.state.ingredients;
    updatedIngredients[event.target.value] = updatedIngredients[event.target.value] - 1;

    this.setState({
      ingredients: updatedIngredients,
      price: this.calculatePrice(updatedIngredients),
      purchasable: this.isPurchasable(updatedIngredients)
    })
  }


  purchaseHandler = () => {
    this.setState(prevState => ({
      purchasing: !prevState.purchasing
    }));
  }

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    });
  }

  purchaseContinueHandler = () => {
    console.info('Continue checkout!')
  }

  render() {
    const formattedPrice = this.state.price.toFixed(2) + ' €'
    return (
      <div className={styles.builder}>THE BB costs {formattedPrice}
        <Burger ingredients={this.state.ingredients}/>

        <Settings
          ingredients={this.state.ingredients}
          triggerIngreditensAdd={this.addIngredient}
          triggerIngreditensRemove={this.removeIngredient}
        />
        <button
          className={styles.btnOrder}
          onClick={this.purchaseHandler}
          disabled={!this.state.purchasable}
        >
          ORDER NOW
        </button>
        <Modal
          show={this.state.purchasing}
          triggerModalClose={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            totalPrice={formattedPrice}
            cancel={this.purchaseCancelHandler}
            continue={this.purchaseContinueHandler}
          />
        </Modal>
      </div>
    )
  }
}

export default BurgerBuilder;
