/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : route-page.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com/
 * Version             :
 * Date Of Creation    : 2019-08-27 12:50:00
 * Description         : DEMO router跳转页
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import React from 'react'
import { connect } from 'react-redux'
import './route-page.less'


class RoutePage extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {}
  }

  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    return (
      <div className="route-page">
        <div>这是route跳转后的落地页面</div>
        <div>{ this.props.id }</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('[route-page] mapStateToProp')
  console.log(state)
  const id = state.oneReducer.id

  return { id }
}

export default connect(mapStateToProps)(RoutePage)
