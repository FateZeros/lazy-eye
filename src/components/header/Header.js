import React, { Component } from 'react'

import styles from './Header.module.less'

class Header extends Component {
  render() {
    return <div className={styles['header-container']}>头部</div>
  }
}

export default Header
