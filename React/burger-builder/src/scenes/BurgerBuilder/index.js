import React, {Component} from 'react'
import styles from './styles.css'
import Burger from '../../components/Burger'
import Settings from '../../components/Burger/Settings'
import {INGREDIENTS, INGREDIENTS_PRICES} from './config'

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: INGREDIENTS,
      purchased: false,
      price: 1.00
    }
  }

  calculatePrice = (ingredients) => {
    // calculate the new price
    return Object.keys(ingredients).reduce((price, ing) => {
      return price + (INGREDIENTS_PRICES[ing] * ingredients[ing])
    }, 0)
  }

  addIngredient = (event) => {
    const updatedIngredients = this.state.ingredients;
    updatedIngredients[event.target.value] = updatedIngredients[event.target.value] + 1;

    this.setState({
      ingredients: updatedIngredients,
      price: this.calculatePrice(updatedIngredients)
    })
  }

  removeIngredient = (event) => {
    const updatedIngredients = this.state.ingredients;
    updatedIngredients[event.target.value] = updatedIngredients[event.target.value] - 1;

    console.log(event)
    this.setState({
      ingredients: updatedIngredients,
      price: this.calculatePrice(updatedIngredients)
    })
  }

  render() {
    return (
      <div className={styles.builder}>THE BB costs {this.state.price.toFixed(2)}
        <Burger ingredients={this.state.ingredients}/>

        <Settings
          ingredients={this.state.ingredients}
          triggerIngreditensAdd={this.addIngredient}
          triggerIngreditensRemove={this.removeIngredient}
        />
      </div>
    )
  }
}

export default BurgerBuilder;
