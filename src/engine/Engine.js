import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { when } from 'mobx'
import PropTypes from 'prop-types'

import styles from './Engine.module.less'

@inject('engineModel')
@observer
class Engine extends Component {
  static propTypes = {
    engineModel: PropTypes.shape({
      num: PropTypes.number.isRequired,
      addNum: PropTypes.func.isRequired
    }).isRequired
  }

  constructor(props) {
    super(props)

    when(
      () => this.props.engineModel.num === 3,
      () =>
        this.setState({
          test: 111
        })
    )

    this.state = {
      test: ''
    }
  }

  handleClick = () => {
    this.props.engineModel.addNum()
  }

  render() {
    const { num } = this.props.engineModel

    return (
      <div className={styles['app']}>
        {num}
        <header>React</header>
        {this.state.test}
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}

export default Engine
