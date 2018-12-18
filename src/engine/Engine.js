import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import styles from './Engine.module.less'

@inject('engineStore')
@observer
class Engine extends Component {
  static propTypes = {
    engineStore: PropTypes.shape({
      num: PropTypes.number.isRequired,
      addNum: PropTypes.func.isRequired
    }).isRequired
  }

  handleClick = () => {
    this.props.engineStore.addNum()
  }

  render() {
    const { num } = this.props.engineStore

    return (
      <div className={styles['app']}>
        {num}
        <header>React</header>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}

export default Engine
