import React, {Component} from 'react';
import styles from './styles.css'
import {INGREDIENTS, INGREDIENTS_LABEL} from '../../../scenes/BurgerBuilder/config'

class Settings extends Component {
  render() {
    return (
      <div className={styles.settings}>
        <h3>Set up your Burger</h3>
        <div className={styles.settingsItems}>
          {/* generate controls for all possible ingredients */}
          { Object.keys(INGREDIENTS).map(ing => {
            return (
              <label
                key={ing}
                className={styles.label}>
                {INGREDIENTS_LABEL[ing]}
                <button
                  type='button'
                  name={ing + '-decr'}
                  value={ing}
                  disabled={INGREDIENTS[ing] <= 0}
                  onClick={this.props.triggerIngreditensRemove}
                >Less</button>
                <button
                  type='button'
                  value={ing}
                  name={ing + '-incr'}
                  onClick={this.props.triggerIngreditensAdd}
                >More</button>
              </label>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Settings;

