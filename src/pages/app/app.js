/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : app.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com/
 * Version             :
 * Date Of Creation    : 2019-07-30 10:30:00
 * Description         : 默认路由试图对应的组件 '/'
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import React from 'react'
import './app.less'
import Demo from '@components/demo/demo'
import { Link } from 'react-router-dom'


class App extends React.Component {
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
    const title = 'Hello, 前端俱乐部'
    return (
      <div className="app">
        {/* <div className="title">{ title }</div> */}
        <Demo></Demo>
        {/* <Link to="/route-page">
          <div className="link-class">这是route跳转</div>
        </Link> */}
      </div>
    )
  }
}


export default App
