import React from 'react';
import styles from './styles.css'
import Ingredients from "./Ingredients";

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      // create an array of length of given ingredient
      // map each array element to ingredient
      return [...Array(props.ingredients[ingredientKey])].map(() => ingredientKey);
    })
    // and flatten the nested arrays by flat or reduce
    // .flat(1); // option 3
    .reduce((arr, el)=> {
    // return arr.concat(el) // option 1
       return [...arr, ...el] // option 2
    }, [])

  const renderedIngredients = transformedIngredients.length
    ? transformedIngredients.map((ing, index) => {
      return <Ingredients
        key={[ing, index].join('-')}
        type={ing}/>
    })
    : <p>Please add Ingredients</p>

  return (
    <div className={styles.burger}>
      <Ingredients type={'breadTop'}/>
      {renderedIngredients}
      <Ingredients type={'breadBottom'}/>
    </div>
  )
}

export default Burger
