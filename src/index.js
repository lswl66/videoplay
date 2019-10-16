/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : index.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com/
 * Version             :
 * Date Of Creation    : 2019/01/01 13:30:00
 * Description         : react 脚手架入口 js
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import Routes from './routes'
import * as serviceWorker from './serviceWorker'
import Store from '@redux/store'

// 路由器
ReactDOM.render(<Provider store={ Store }>
                  <Routes />
                </Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
