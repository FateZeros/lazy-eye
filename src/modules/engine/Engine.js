import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { when } from 'mobx'
import PropTypes from 'prop-types'
import { Layout, Button } from 'antd'

import Header from 'src/components/header'
import MenuSider from 'src/components/menuSider'

import styles from './Engine.module.less'

const { Content, Footer, Sider } = Layout

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
    console.log(num, 1212)

    return (
      <Layout style={{ height: '100%' }}>
        <Header />
        <Layout>
          <Sider width={200} style={{ background: '#e6e6e6' }}>
            <MenuSider />
          </Sider>
          <Content>
            {num}
            {this.state.test}
            <Button onClick={this.handleClick} type="primary">
              click
            </Button>
          </Content>
        </Layout>
        <Footer className={styles['text-center']}>
          websit ©2018 Created by Lazy Eye
        </Footer>
      </Layout>
    )
  }
}

export default Engine
