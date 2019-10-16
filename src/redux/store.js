/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : store.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com
 * Version             :
 * Date Of Creation    : 2019/08/30 14:30:00
 * Description         : redux store 简单封装
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import { createStore } from 'redux'
import reducer from './reducers'


const Store = createStore(reducer)

export default Store
